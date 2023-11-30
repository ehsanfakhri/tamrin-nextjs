import Link from "next/link";

const Navigation = () => (
  <nav className="bg-gray-200 py-4">
    <ul className="flex justify-center space-x-4">
      <li>
        <Link className="text-blue-800 hover:text-blue-700" href="/">
          HomePage
        </Link>
      </li>
      <li>
        <Link className="text-blue-800 hover:text-blue-700" href="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="text-blue-800 hover:text-blue-700" href="/user">
          Users
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
