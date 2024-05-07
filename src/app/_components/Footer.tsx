import Image from "next/image";
import logo from "../../../public/assests/logo_oum-removebg-preview.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://www.linkedin.com/in/anas-adel-892362291/"
            className="flex items-center justify-center md:justify-normal mb-4 sm:mb-0"
          >
            <Image src={logo} alt="Logo" className="w-14 h-14 -mt-3 " />
          </a>
          <ul className="flex flex-wrap items-center justify-center md:justify-normal mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/skills" className="hover:underline me-4 md:me-6">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline me-4 md:me-6">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 text-center ">
          © 2024{" "}
          <Link
            href="https://www.linkedin.com/in/oumaima-ezarouali-382143232/"
            className="hover:underline"
          >
            Ezarouali Oumaima™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
