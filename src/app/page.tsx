import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - teste',
  description: 'NextJS',
  openGraph:{
    title: 'NextJS Loren',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus minus nostrum est temporibus laudantium.',
  }
}

export default function Home() {
  return (
    <div>
      <h1> Página HOME</h1>
    </div>
  );
}
