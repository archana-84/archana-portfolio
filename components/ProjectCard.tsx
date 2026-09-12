import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  imageAlt: string;
  technologies: string[];
};

export default function ProjectCard({ title, description, href, image, imageAlt, technologies }: ProjectCardProps) {
  return (
    <article className="mt-10">
      <Link href={href} className="group grid overflow-hidden rounded-3xl border border-neutral-800 bg-[#0e0e0e] transition hover:border-emerald-300/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 lg:grid-cols-2">
        <div className="flex flex-col items-start p-6 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">Featured project · Synthetic data</p>
          <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h3>
          <p className="mt-5 leading-7 text-neutral-300">{description}</p>
          <ul aria-label="Project technologies" className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li key={technology} className="rounded-full border border-neutral-700 px-3 py-1.5 text-xs text-neutral-300">{technology}</li>
            ))}
          </ul>
          <span className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition group-hover:bg-emerald-200">
            View project <span aria-hidden="true">→</span>
          </span>
        </div>
        <div className="flex items-center border-t border-neutral-800 bg-emerald-950/20 p-5 sm:p-8 lg:border-l lg:border-t-0">
          <Image src={image} alt={imageAlt} sizes="(max-width: 1023px) 100vw, 600px" className="h-auto w-full rounded-xl border border-neutral-800" />
        </div>
      </Link>
    </article>
  );
}
