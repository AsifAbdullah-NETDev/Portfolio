import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b">
      <h1 className="font-bold text-xl">Abdullah Al Asif</h1>

      <div className="flex gap-6">
        <Link href="/" className="font-bold text-lg">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}