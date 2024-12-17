import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meexpay",
  description:
    "Otimize suas vendas com nossa plataforma líder, oferecendo as taxas mais competitivas do mercado. Desfrute de um checkout de alta conversão que simplifica o processo de compra para seus clientes. Além disso, proporcione uma experiência exclusiva aos seus consumidores com uma área de membros personalizada, criada especialmente para atender às necessidades e preferências individuais. Maximize seus resultados e impulsione seus negócios com eficiência e personalização incomparáveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
