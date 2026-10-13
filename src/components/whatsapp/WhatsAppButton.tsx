import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  size?: ButtonProps["size"];
  className?: string;
}

export const WhatsAppButton = ({
  message,
  label = "Pedir presupuesto por WhatsApp",
  size = "default",
  className,
}: WhatsAppButtonProps) => (
  <Button
    asChild
    size={size}
    className={cn(
      "bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300",
      size === "lg" && "[&_svg]:size-5",
      className,
    )}
  >
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon />
      {label}
    </a>
  </Button>
);
