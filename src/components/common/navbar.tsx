import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-secondary text-secondary-foreground p-4 flex justify-between">
      <div>
        <h1>Sand Something</h1>
      </div>
      <nav className="space-x-4">
        <Link href="/page1">Page 1</Link>
        <Link href="/page2">Page 2</Link>
        <Link href="/page3">Page 3</Link>
      </nav>
    </div>
  );
}
