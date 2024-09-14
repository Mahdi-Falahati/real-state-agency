import { yekan } from "@/utils/fonts";

import "./globals.css";
import Layout from "@/layout/Layout";
import Providers from "@/providers/Providers";

export const metadata = {
  title: "آژانس مسکن فلاحتی",
  description: "( آژانس مسکن فلاحتی ( خرید - فروش - رهن ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
