import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link href="/buy-residential">آگهی ها</Link>
        </li>
      </ul>
      <Link href="/sign-in">
        <FiLogIn />
        <span>ورود</span>
      </Link>
    </header>
  );
}
