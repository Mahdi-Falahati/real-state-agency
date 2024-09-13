import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-[318px]">{children}</main>
      <Footer />
    </>
  );
}
