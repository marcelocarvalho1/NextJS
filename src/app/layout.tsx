import "./globals.css";
import {Header} from '../components/Header'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - teste',
  description: 'NextJS',
  openGraph:{
    title: 'NextJS Loren',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus minus nostrum est temporibus laudantium.',
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <Header/>
        
        {children}
      </body>
    </html>
  );
}
