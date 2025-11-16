import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "./components/ui/sonner";
import Footer from "./components/footer";

const nunito = Poppins({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FSW Barber",
  description: "Make your appointment online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className={nunito.variable}>
        <div className="flex min-h-screen flex-col max-w-screen-2xl mx-auto">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
