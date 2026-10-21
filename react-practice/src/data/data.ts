export interface DiamondCardProps {
  id?: number;
  image: string;
  name: string;
  price?: string;
  sale?: boolean;
}

export const data: DiamondCardProps[] = [
  {
    id: 1,
    image: "src/assets/pexels-the-glorious-studio-10475791.jpg",
    name: "Princess",
    price: "$ 1,350",
  },
  {
    id: 2,
    image: "src/assets/pexels-the-glorious-studio-10475793.jpg",
    name: "Swan",
    price: "$ 1,420",
  },
  {
    id: 3,
    image: "src/assets/pexels-the-glorious-studio-10475794.jpg",
    name: "Ice Lake",
    price: "$ 1,780",
    sale: true,
  },
];
export default data;
