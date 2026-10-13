import { BUSINESS } from "@/data/business";

export const DEFAULT_WA_MESSAGE = "Hola, vengo del sitio web y me gustaría solicitar un presupuesto.";

export const waLink = (message: string = DEFAULT_WA_MESSAGE) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const serviceWaMessage = (serviceName: string) =>
  `Hola, vengo del sitio web y me gustaría solicitar un presupuesto para ${serviceName}.`;

export const projectWaMessage = (projectTitle: string) =>
  `Hola, vengo del sitio web. Vi el proyecto "${projectTitle}" y me gustaría solicitar un presupuesto para un trabajo similar.`;
