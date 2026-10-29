import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { getService } from "@/lib/site";

const training = getService("ai-training")!;

export const metadata: Metadata = {
  title: "AI Training & Workshops",
  description:
    "Hands-on AI workshops in Nairobi and private team training across East Africa — practical prompting, documents, research and safe use of ChatGPT, Claude and Gemini. No coding required.",
  alternates: { canonical: "/training" },
};

export default function TrainingPage() {
  return <ServiceDetail service={training} />;
}
