import { yekan } from "@/utils/fonts";

import "./globals.css";

export const metadata = {
  title: "آژانس مسکن",
  description: "( آژانس مسکن فلاحتی ( خرید - فروش - رهن ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>{children}</body>
    </html>
  );
}
