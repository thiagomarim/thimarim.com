import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./components/contact";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Thiago Marim",
  description: "Desenvolvedor front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="antialiased !scroll-smooth">
      <body className={roboto.className}>
        <div className="App">
          <Header />
          <main className="AppBody">{children}</main>
          <Contact />
          <Footer />
        </div>
      </body>
    </html>
  );
}
