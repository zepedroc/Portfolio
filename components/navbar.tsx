import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-center bg-gray-950/50 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-6">
        <Link className="duration-400 transition-transform hover:scale-105 hover:underline" href="/">
          Home
        </Link>
        <Link className="duration-400 transition-transform hover:scale-105 hover:underline" href="/work">
          Work
        </Link>
        <Link
          className="duration-800 rounded-md px-4 py-2 transition-transform hover:scale-105 hover:bg-gray-300 hover:text-black"
          href="/resume.pdf"
          target="_blank"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}
