import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - teste",
  description: "NextJS",
  openGraph: {
    title: "NextJS Loren",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus minus nostrum est temporibus laudantium.",
  },
};

export const revalidate = 10

export default function Home() {
  const randomNumber = Math.random() * 10;
  return (
    <div>
      <h1> Página HOME</h1>
      <h2> Numero gerado: {randomNumber}</h2>
    </div>
  );
}
