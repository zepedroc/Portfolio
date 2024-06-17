import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="fixed top-0 z-50 flex w-full">
      <nav className="mx-auto mt-8 flex items-center justify-center rounded-full bg-blue-500/50 px-10 py-4 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <Link className="duration-400 transition-transform hover:scale-105 hover:underline" href="/">
            Home
          </Link>
          <Link className="duration-400 transition-transform hover:scale-105 hover:underline" href="/work">
            Work
          </Link>
          <Link
            className="duration-400 transition-transform hover:scale-105 hover:underline"
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
