import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-emerald-300 focus:p-3 focus:text-black">
        Skip to content
      </a>
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-6 lg:px-10">
        <Link href="/" aria-label="Archana Bhusara home" className="text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-emerald-300">
          AB.
        </Link>
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-300 sm:gap-8">
          {[
            ["Work", "/#work"],
            ["About", "/#about"],
            ["Skills", "/#skills"],
            ["Contact", "/#contact"],
          ].map(([label, href]) => (
            <Link key={label} href={href} className="rounded-sm transition hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
