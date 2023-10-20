import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 p-4 gap-3 border-b-2 items-center">
      <Link href="/" className="flex flex-center bg-black text-white p-3">
        <h1 className="text-2xl font-bold">TechM</h1>
      </Link>
      <div className="basis-2/4 flex justify-start text-lg font-semibold">
        <Link className="nav_link" href="/">
          Home
        </Link>
        <Link className="nav_link" href="/users">
          Users
        </Link>
      </div>
      <div className="basis-1/4">
        <a
          target="_blank"
          rel="noreferrer noopener"
          className="flex gap-2 flex-end font-semibold"
          href="https://github.com/mohsenramy/techm"
        >
          <AiFillGithub />
          Mohsen!
        </a>
      </div>
    </nav>
  );
};

export default Nav;
