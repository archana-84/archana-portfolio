import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import constructionDashboard from "../../../public/construction-dashboard.png";

export const metadata: Metadata = {
  title: "Construction Cost Intelligence | Archana Bhusara",
  description: "A case study exploring construction cost variance and unusual cost patterns using synthetic data, Python, SQL, and Streamlit.",
};

export default function ConstructionCostIntelligencePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <main id="main-content" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <Link href="/#work" className="inline-flex rounded-sm text-sm text-emerald-300 hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
          <span aria-hidden="true" className="mr-2">←</span> Back to projects
        </Link>
        <article className="mt-8 overflow-hidden rounded-3xl border border-neutral-800 bg-[#0e0e0e]">
          <div className="grid lg:grid-cols-2">
            {/* Project story */}
            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Project case study
                </span>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-emerald-300">
                  Completed
                </span>
              </div>
              <h1 className="mt-7 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Construction Cost
                <span className="block text-neutral-400">
                  Intelligence
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-200">
                Where are construction costs exceeding estimates—and
                which records deserve a closer look?
              </p>
              <p className="mt-4 leading-7 text-neutral-400">
                An end-to-end analytics project that transforms synthetic
                construction cost records into an interactive dashboard
                for exploring budget variance and flagging unusual cost
                patterns.
              </p>
              <div className="mt-8 border-l-2 border-emerald-400/50 pl-5">
                <p className="text-sm font-medium text-white">
                  From raw records to cost insights
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Python and Pandas power the ETL workflow, SQLite and SQL
                  support analysis, and Streamlit and Plotly bring the
                  results into an interactive dashboard. Isolation Forest
                  flags potential anomalies for review.
                </p>
              </div>
              <ul
                aria-label="Project technologies"
                className="mt-8 flex flex-wrap gap-2"
              >
                {[
                  "Python",
                  "Pandas",
                  "SQL",
                  "SQLite",
                  "ETL",
                  "Streamlit",
                  "Plotly",
                  "scikit-learn",
                ].map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              {/* Project links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://construction-cost-intelligence.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                >
                  View live dashboard
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href="https://github.com/archana-84/construction-cost-intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition hover:border-neutral-400 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                >
                  View GitHub code
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
            {/* Dataset summary */}
            <div className="border-t border-neutral-800 bg-gradient-to-br from-emerald-950/30 via-[#101413] to-[#0e0e0e] p-6 sm:p-10 lg:border-l lg:border-t-0">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                  Dataset Snapshot
                </p>
                <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400">
                  Synthetic data
                </span>
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
                <p className="text-sm text-neutral-400">
                  Actual cost above estimate
                </p>
                <p className="mt-4 text-5xl font-semibold tracking-tight text-emerald-300 sm:text-6xl">
                  ≈$155M
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  Aggregate cost variance across the synthetic dataset. Totals are rounded independently.
                </p>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-4">
                {[
                  { label: "Projects analyzed", value: "300" },
                  { label: "Cost records", value: "4,500" },
                  { label: "Estimated cost", value: "≈$1.84B" },
                  { label: "Actual cost", value: "≈$1.99B" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5"
                  >
                    <dt className="text-xs leading-5 text-neutral-400">
                      {metric.label}
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-6 text-neutral-500">
                Built with synthetic construction cost records to demonstrate
                analytical methods. Figures describe the sample dataset;
                they do not represent employer results or realized savings.
              </p>
            </div>
          </div>
          {/* Dashboard preview */}
          <figure className="border-t border-neutral-800 p-6 sm:p-10">
            <div className="mb-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                Inside the dashboard
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">
                Top cost overruns by category and subcategory
              </h2>
            </div>
            <a
              href="https://construction-cost-intelligence.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl border border-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            >
              <Image
                src={constructionDashboard}
                alt="Top Cost Drivers bar chart showing concrete materials as the largest contributor to cost variance in the synthetic dataset."
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="h-auto w-full"
              />
              <span className="sr-only">
                Open the interactive dashboard in a new tab
              </span>
            </a>
            <figcaption className="mt-4 text-sm leading-6 text-neutral-400">
              Cost variance equals actual cost minus estimated cost, summed by
              category and subcategory. Positive values indicate overruns; negative
              values indicate costs below estimate. The dashboard displays the ten
              largest variances for the selected filters. Select the preview to explore it.
            </figcaption>
          </figure>
        </article>
        <section aria-labelledby="interpretation-heading" className="mt-10 rounded-3xl border border-neutral-800 bg-[#0e0e0e] p-6 sm:p-10">
          <h2 id="interpretation-heading" className="text-2xl font-semibold tracking-tight">From the chart to an investigation</h2>
          <p className="mt-5 leading-7 text-neutral-300">Concrete has the largest aggregate cost variance in the displayed synthetic sample. This identifies where to begin a review; it does not establish why the overrun occurred.</p>
          <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-neutral-300">
            <li>Compare material quantities and unit prices with the original estimate.</li>
            <li>Review supplier pricing, scope changes, and estimating assumptions.</li>
            <li>Compare absolute variance with percentage variance to account for differences in budget size.</li>
          </ul>
        </section>
        <section aria-labelledby="filters-heading" className="mt-8 rounded-3xl border border-neutral-800 p-6 sm:p-10">
          <h2 id="filters-heading" className="text-2xl font-semibold tracking-tight">Explore the live dashboard</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-neutral-300">
            <li>Open the live dashboard using the button above.</li>
            <li>Set Cost Category to Equipment to compare equipment drivers.</li>
            <li>Select Hamburg, NY under Location to examine that subset.</li>
            <li>Clear the filters to return to the full dataset.</li>
          </ol>
          <p className="mt-5 text-sm leading-6 text-neutral-400">The image on this page is a static preview. Filters and interactive charts are available in the live dashboard.</p>
        </section>
        <section aria-labelledby="limitations-heading" className="mt-8 mb-8 rounded-3xl border border-neutral-800 p-6 sm:p-10">
          <h2 id="limitations-heading" className="text-2xl font-semibold tracking-tight">Data and limitations</h2>
          <p className="mt-5 leading-7 text-neutral-300">This project uses synthetic data to demonstrate analytical methods. The figures describe that sample, not employer results or realized savings. Anomaly flags identify records for review and are not proof of an error or fraud.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
