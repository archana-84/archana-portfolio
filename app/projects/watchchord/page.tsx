import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import watchchordPreview from "../../../public/watchchord-preview.png";

export const metadata: Metadata = {
  title: "WatchChord | Archana Bhusara",
  description:
    "A movie recommendation app that helps two viewers find shared genre matches, with explained suggestions from MovieLens and a saved TMDB sample.",
};

const technologies = [
  "Python",
  "SQL",
  "SQLite",
  "Streamlit",
  "TMDB API",
];

const metrics = [
  { label: "MovieLens movies processed", value: "9,742" },
  { label: "MovieLens ratings processed", value: "100,836" },
  { label: "Saved TMDB movie sample", value: "291" },
  { label: "Demo database size", value: "1.77 MB" },
];

const workflow = [
  {
    title: "Prepare and validate the data",
    description:
      "Processed MovieLens movies and ratings, added a saved TMDB sample, and checked IDs, duplicates, rating values, dates, and missing genres.",
  },
  {
    title: "Find shared genre matches",
    description:
      "Each suggestion must match at least one selected genre from each viewer. Unwanted genres and selected watched movies are excluded.",
  },
  {
    title: "Rank each source appropriately",
    description:
      "MovieLens matches use weighted community ratings. Recent TMDB discoveries are ordered by release date, with the sources presented separately.",
  },
  {
    title: "Build and deploy the demo",
    description:
      "Built a compact SQLite demo database using rating summaries instead of individual rating records, then deployed the app with Streamlit.",
  },
];

export default function WatchChordPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <main
        id="main-content"
        className="mx-auto max-w-7xl px-6 py-10 lg:px-10"
      >
        <Link
          href="/#work"
          className="inline-flex rounded-sm text-sm text-emerald-300 hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
        >
          <span aria-hidden="true" className="mr-2">←</span>
          Back to projects
        </Link>

        <article className="mt-8 overflow-hidden rounded-3xl border border-neutral-800 bg-[#0e0e0e]">
          {/* Introduction and project numbers */}
          <div className="grid lg:grid-cols-2">
            <header className="p-6 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                Movie discovery · Recommendation app
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                WatchChord
              </h1>

              <p className="mt-4 text-xl leading-8 text-neutral-300">
                Finding a movie two people can agree on
              </p>

              <p className="mt-6 leading-7 text-neutral-300">
                Two viewers can enjoy different genres and still find
                something to watch together. WatchChord turns their
                preferences into shared shortlists, excluding unwanted
                genres and movies they have already watched.
              </p>

              <p className="mt-4 leading-7 text-neutral-400">
                Each suggestion explains its genre match. MovieLens
                recommendations appear alongside newer discoveries from
                a saved TMDB sample.
              </p>

              <ul
                aria-label="Project technologies"
                className="mt-7 flex flex-wrap gap-2"
              >
                {technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-neutral-700 px-3 py-1.5 text-xs text-neutral-300"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://watchchord.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                >
                  Live Demo
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>

                <a
                  href="https://github.com/archana-84/watchchord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium transition hover:border-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                >
                  GitHub
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </header>

            <section
              aria-labelledby="snapshot-heading"
              className="border-t border-neutral-800 bg-gradient-to-br from-emerald-950/30 via-[#101413] to-[#0e0e0e] p-6 sm:p-10 lg:border-l lg:border-t-0"
            >
              <h2
                id="snapshot-heading"
                className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-300"
              >
                Project snapshot
              </h2>

              <dl className="mt-7 grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <dt className="text-sm leading-6 text-neutral-400">
                      {metric.label}
                    </dt>
                    <dd className="mt-3 text-3xl font-semibold tracking-tight text-emerald-300">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 text-sm leading-7 text-neutral-400">
                These figures describe the processed datasets and saved
                demo database. The 100,836 individual ratings were
                summarized for the demo; they are not stored there as
                individual rating records.
              </p>
            </section>
          </div>

          {/* App preview */}
          <section
            aria-labelledby="preview-heading"
            className="border-t border-neutral-800 p-6 sm:p-10"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
              Inside the app
            </p>

            <h2
              id="preview-heading"
              className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Two sets of preferences. Shared shortlists.
            </h2>

            <figure className="mt-7">
              <div className="overflow-hidden rounded-2xl border border-neutral-800">
                <Image
                  src={watchchordPreview}
                  alt="WatchChord showing two viewers' genre preferences, unwanted genre and watched-movie controls, and separate MovieLens and recent discovery lists."
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="h-auto w-full"
                />
              </div>

              <figcaption className="mt-4 text-sm leading-6 text-neutral-400">
                Static preview of WatchChord. Open Live Demo to change
                preferences, exclude watched movies, and explore the
                suggestions.
              </figcaption>
            </figure>
          </section>

          {/* End-to-end workflow */}
          <section
            aria-labelledby="workflow-heading"
            className="border-t border-neutral-800 p-6 sm:p-10"
          >
            <h2
              id="workflow-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              From movie data to a working app
            </h2>

            <ol className="mt-7 grid gap-5 md:grid-cols-2">
              {workflow.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-neutral-800 p-6"
                >
                  <p className="text-sm font-medium text-emerald-300">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-neutral-400">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Design decisions */}
          <section
            aria-labelledby="decisions-heading"
            className="border-t border-neutral-800 p-6 sm:p-10"
          >
            <h2
              id="decisions-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Decisions behind the recommendations
            </h2>

            <div className="mt-7 space-y-7">
              <div className="border-l-2 border-emerald-400/50 pl-5">
                <h3 className="text-lg font-semibold">
                  Account for rating volume
                </h3>
                <p className="mt-3 leading-7 text-neutral-300">
                  A high average based on very few ratings can be
                  misleading. Weighted community ratings reduce the
                  influence of small rating counts when ranking
                  MovieLens matches.
                </p>
              </div>

              <div className="border-l-2 border-emerald-400/50 pl-5">
                <h3 className="text-lg font-semibold">
                  Keep the two sources distinct
                </h3>
                <p className="mt-3 leading-7 text-neutral-300">
                  MovieLens matches are ranked by weighted ratings,
                  while recent TMDB discoveries are ordered by release
                  date. Scores remain separate because the sources use
                  different scales and rating populations.
                </p>
              </div>

              <div className="border-l-2 border-emerald-400/50 pl-5">
                <h3 className="text-lg font-semibold">
                  Connect watched exclusions across sources
                </h3>
                <p className="mt-3 leading-7 text-neutral-300">
                  Linked movie IDs allow watched selections to exclude
                  the same movie across both sources where a mapping
                  exists. Cross-source exclusions depend on those links.
                </p>
              </div>
            </div>
          </section>

          {/* Skills and scope */}
          <section
            aria-labelledby="skills-heading"
            className="border-t border-neutral-800 p-6 sm:p-10"
          >
            <h2
              id="skills-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Skills demonstrated
            </h2>

            <ul className="mt-6 list-disc space-y-3 pl-5 leading-7 text-neutral-300">
              <li>Preparing and validating data with Python and SQL.</li>
              <li>Integrating API data and linking movie identifiers.</li>
              <li>Designing filtering and weighted ranking logic.</li>
              <li>Explaining recommendations through genre matches.</li>
              <li>Building a compact SQLite database for deployment.</li>
              <li>Creating and deploying an interactive Streamlit app.</li>
            </ul>
          </section>

          <section
            aria-labelledby="scope-heading"
            className="border-t border-neutral-800 p-6 sm:p-10"
          >
            <h2
              id="scope-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Scope and limitations
            </h2>

            <p className="mt-5 leading-7 text-neutral-300">
              WatchChord uses genre-based matching and weighted ranking.
              It is not a trained machine-learning model, and a genre
              match does not guarantee that both viewers will enjoy a
              suggestion.
            </p>

            <p className="mt-4 leading-7 text-neutral-400">
              TMDB discovery uses a saved sample of 291 movies rather
              than a continuously updated catalogue. Recommendation
              quality has not been measured through a user study.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}