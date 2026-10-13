export interface Machine {
  name: string;
  image: string;
  description: string;
}

export const MACHINES: Machine[] = [
  { name: "CAT 120", image: "/assets/machines/cat-120.webp", description: "Motoniveladora" },
  { name: "CAT 126", image: "/assets/machines/cat-126.webp", description: "Minicargadora" },
  { name: "CAT 24063", image: "/assets/machines/cat-24063.webp", description: "Excavadora Hidráulica" },
  { name: "CAT 320", image: "/assets/machines/cat-320.webp", description: "Excavadora" },
];
