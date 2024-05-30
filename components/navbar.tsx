import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center bg-black/50 backdrop-blur-md z-50">
        <div className="text-2xl font-bold">
          <Link href="#">Jose Mota</Link>
        </div>
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
          <Link className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200" href="#">
            Resume
          </Link>
        </div>
      </nav>
  );
}
