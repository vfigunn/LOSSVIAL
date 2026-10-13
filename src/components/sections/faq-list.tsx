import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/services";

// <details> nativo: las respuestas quedan en el HTML prerenderizado (indexables) aunque estén cerradas.
export const FaqList = ({ faqs }: { faqs: Faq[] }) => (
  <div className="divide-y divide-border rounded-xl border border-border bg-card shadow-card">
    {faqs.map((faq) => (
      <details key={faq.question} className="group px-6">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-primary hover:text-vial-yellow transition-colors [&::-webkit-details-marker]:hidden">
          <h3 className="text-base md:text-lg">{faq.question}</h3>
          <ChevronDown className="h-5 w-5 shrink-0 text-vial-yellow transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <p className="pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
      </details>
    ))}
  </div>
);
