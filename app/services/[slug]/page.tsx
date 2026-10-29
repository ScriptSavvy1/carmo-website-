import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { getService, services } from "@/lib/site";

// Training has its own top-level route (/training); every other service lives here.
const pageServices = services.filter((service) => service.href.startsWith("/services/"));

export const dynamicParams = false;

export function generateStaticParams() {
  return pageServices.map((service) => ({ slug: service.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: service.href },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || !service.href.startsWith("/services/")) notFound();
  return <ServiceDetail service={service} />;
}
