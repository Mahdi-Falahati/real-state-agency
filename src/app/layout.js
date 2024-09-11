import { yekan } from "@/utils/fonts";

import "./globals.css";
import Layout from "@/layout/Layout";

export const metadata = {
  title: "آژانس مسکن فلاحتی",
  description: "( آژانس مسکن فلاحتی ( خرید - فروش - رهن ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
