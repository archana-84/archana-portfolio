import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-neutral-400">
        <p>Archana Bhusara · Data Analytics Portfolio</p>
        <Link href="/#work" className="rounded-sm hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
          Explore projects <span aria-hidden="true">↑</span>
        </Link>
      </div>
    </footer>
  );
}
