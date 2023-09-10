import Link from "next/link";
import ThemeButton from "@/theme/ThemeButton";
import NavSesion from "@/components/NavSesion";
export default function Nav() {
  return (
    <nav className=" flex items-center justify-between">
      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <NavSesion />
        </li>
      </ul>

      <ThemeButton />
    </nav>
  );
}
