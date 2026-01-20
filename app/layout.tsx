import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MotionController from "../components/MotionController";

export const metadata: Metadata = {
  title: "Formed Supply | Hospitality Sourcing & Procurement",
  description:
    "Branded print and supplies for coffee shops and restaurants. Cups, menus, labels, packaging, signage."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MotionController />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
