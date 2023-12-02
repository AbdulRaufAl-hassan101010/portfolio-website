import Link from "next/link";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  weight: ["800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Nav = () => {
  return (
    <nav className="flex justify-between container mx-auto py-20 items-center px-10">
      <Link href="/" className={`${open_sans.className} logo`}>
        Portfolio
      </Link>
      <ul className="flex gap-10 items-center">
        <li className="desktop-link">
          <Link href="/">Home</Link>
        </li>
        <li className="desktop-link">
          <Link href="#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="#about" className="desktop-link">
            About
          </Link>
        </li>
        <li>
          <button className="bg-accent hover:bg-secondary text-white font-bold rounded-full p-5 px-10">
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
