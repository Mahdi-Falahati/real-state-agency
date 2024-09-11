import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

export default function Layout({ children }) {
  const style = { minHeight: "700px" };
  return (
    <>
      <Header />
      <main styles={style}>{children}</main>
      <Footer />
    </>
  );
}
