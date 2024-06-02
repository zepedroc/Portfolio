import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-center bg-black/50 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-6">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/work">
          Work
        </Link>
        <Link className="hover:underline" href="/certifications">
          Certifications
        </Link>
        {/* <Link className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200" href="/resume.pdf" target="_blank">
          Resume
        </Link> */}
      </div>
    </nav>
  );
}
