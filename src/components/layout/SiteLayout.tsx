import type { ReactNode } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloating } from "@/components/whatsapp/WhatsAppFloating";
import { Seo } from "@/seo/Seo";
import type { PageMeta } from "@/seo/pages";

export const SiteLayout = ({ meta, children }: { meta: PageMeta; children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Seo meta={meta} />
    <Navigation />
    <main className="pt-20">{children}</main>
    <Footer />
    <WhatsAppFloating />
  </div>
);
