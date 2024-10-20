import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "react-toastify/dist/ReactToastify.css";
import { AOSInit } from "@/module/AOSInit";

export default function Layout({ children }) {
  return (
    <>
      <AOSInit />
      <Header />
      <main className="min-h-[318px]">{children}</main>
      <Footer />
    </>
  );
}
