import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/home-page"> Home </Link>
        </li>
        <li>
          <Link href="/deposit-money"> Deposit Money </Link>
        </li>
        <li>
          <Link href="/payment"> Make Payment </Link>
        </li>
        <li>
          <Link href="/transaction-history"> Transaction History </Link>
        </li>
        <li>
          <Link href="/about"> About </Link>
        </li>
      </ul>
    </nav>
  );
}
