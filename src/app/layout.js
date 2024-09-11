import "./globals.css";

export const metadata = {
  title: "آژانس مسکن",
  description: "( آژانس مسکن فلاحتی ( خرید - فروش - رهن ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
