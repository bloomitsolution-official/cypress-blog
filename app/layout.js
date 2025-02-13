import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: true,
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Blog app",
  description: "Generated by Bloom It Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar />
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
