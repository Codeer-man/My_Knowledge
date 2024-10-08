import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = async () => {
  return (
    <nav className="flex justify-around items-center py-4 bg-[#141414] text-white">
      <Link href="/" className="text-xl font-bold">
        My Facny Website
      </Link>

      <ul className="hidden md:flex space-x-4 list-none">
        <li>
          <Link href="/Login" className="hover:text-gray-400">
            Login
          </Link>
        </li>
        <li>
          <Link href="/Register" className="hover:text-gray-400">
            Register
          </Link>
        </li>

        <li className="mt-2">
          <Link href="/Private/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link>
        </li>

        <form>
          <Button type="submit" variant={"ghost"}>
            Logout
          </Button>
        </form>
      </ul>
    </nav>
  );
};

export default Navbar;
