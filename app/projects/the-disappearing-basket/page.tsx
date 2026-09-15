import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import dashboardPreview from "../../../public/disappearing-basket-dashboard.png";

export const metadata: Metadata = {
  title: "The Disappearing Basket | Archana Bhusara",
  description:
    "Historical retail spending decline analysis using SQL, SQLite, Excel, and Tableau to identify households for further investigation.",
};

const technologies = ["SQL", "SQLite", "Excel", "Tableau"];

const metrics = [
  { label: "Transaction rows analyzed", value: "2,595,732" },
  { label: "Households in the dataset", value: "2,500" },
  { label: "Complete 28-day periods", value: "25" },
  { label: "Latest eligible households", value: "1,126" },
  { label: "Latest flagged households", value: "68" },
  { label: "Latest flagged rate", value: "6.0%" },
];

const workflow = [
  {
    title: "Structure the transaction analysis",
    description:
      "Used SQL and SQLite to analyze transaction records and organize household activity into 25 complete periods of 28 days.",
  },
  {
    title: "Identify spending decline signals",
    description:
      "Compared household spending across periods to identify substantial declines among households that continued shopping.",
  },
  {
    title: "Evaluate subsequent spending",
    description:
      "Compared next-period low-spending rates for flagged and unflagged household-period observations in a later historical evaluation window.",
  },
  {
    title: "Communicate findings and propose a test",
    description:
      "Created a Tableau dashboard and an Excel scenario for a proposed retention experiment. The experiment was not conducted.",
  },
];

export default function DisappearingBasketPage() {
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
          <span aria-hidden="true" className="mr-2">
            ←
          </span>
          Back to projects
        </Link>

        <article className="mt-8 overflow-hidden rounded-3xl border border-neutral-800 bg-[#0e0e0e]">
          {/* Project introduction and dataset summary */}
          <div className="grid lg:grid-cols-2">
            <header className="p-6 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                Retail analytics · Historical analysis
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                The Disappearing Basket
              </h1>

              <p className="mt-4 text-xl text-neutral-300">
                Retail spending decline analysis
              </p>

              <p className="mt-7 text-lg leading-8 text-neutral-200">
                Which households are spending substantially less while
                continuing to shop, and which deserve investigation?
              </p>

              <p className="mt-5 leading-7 text-neutral-400">
                An end-to-end analysis of household purchasing patterns,
                connecting transaction-level SQL analysis with a Tableau
                dashboard and an Excel scenario for a proposed retention
                experiment.
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

              <a
                href="https://github.com/archana-84/retail-customer-retention-public"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
              >
                View project on GitHub
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </header>

            <section
              aria-labelledby="dataset-heading"
              className="border-t border-neutral-800 bg-gradient-to-br from-emerald-950/30 via-[#101413] to-[#0e0e0e] p-6 sm:p-10 lg:border-l lg:border-t-0"
            >
              <h2
                id="dataset-heading"
                className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-300"
              >
                Dataset and latest-period findings
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

              <p className="mt-6 text-sm leading-6 text-neutral-400">
                In the latest complete period, 68 of 1,126 eligible
                households were flagged: 6.0%, rounded. Eligibility is a
                subset of the 2,500 households in the full dataset.
              </p>
            </section>
          </div>

          {/* Dashboard screenshot */}
          <section
            aria-labelledby="dashboard-heading"
            className="border-t border-neutral-800 p-6 sm:p-10"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
              Dashboard preview
            </p>

            <h2
              id="dashboard-heading"
              className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Making spending declines visible
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-neutral-300">
              The Tableau dashboard presents household spending declines,
              the latest-period flagging summary, and subsequent
              low-spending rates from the historical evaluation.
            </p>

            <figure className="mt-7">
              <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-white">
                <Image
                  src={dashboardPreview}
                  alt="The Disappearing Basket Tableau dashboard showing household spending declines, 68 flagged households out of 1,126 eligible households, and next-period low-spending rates of 45.6% versus 21.0%."
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="h-auto w-full"
                />
              </div>

              <figcaption className="mt-4 text-sm leading-6 text-neutral-400">
                Static dashboard screenshot. The household bar chart
                shows percentage spending decline from the prior
                two-period average. Interactive filters are not available
                on this portfolio page.
              </figcaption>
            </figure>
          </section>

          {/* Historical evaluation */}
          <section
            aria-labelledby="evaluation-heading"
            className="border-t border-neutral-800 p-6 sm:p-10"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
              Historical evaluation
            </p>

            <h2
              id="evaluation-heading"
              className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              What happened in the following period?
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-neutral-300">
              In the later evaluation window, low spending occurred in
              the next 28-day period for 45.6% of flagged household-period
              observations, compared with 21.0% of unflagged observations.
            </p>

            <dl className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-950/20 p-6">
                <dt className="text-sm leading-6 text-neutral-300">
                  Flagged observations with next-period low spending
                </dt>
                <dd className="mt-4 text-5xl font-semibold tracking-tight text-emerald-300">
                  45.6%
                </dd>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-black/20 p-6">
                <dt className="text-sm leading-6 text-neutral-300">
                  Unflagged observations with next-period low spending
                </dt>
                <dd className="mt-4 text-5xl font-semibold tracking-tight">
                  21.0%
                </dd>
              </div>
            </dl>

            <p className="mt-6 text-sm leading-7 text-neutral-400">
              These percentages describe household-period observations,
              not unique households. A household can appear in more than
              one period. This evaluation is separate from the
              latest-period snapshot of 68 flagged households.
            </p>

            <div className="mt-7 border-l-2 border-emerald-400/50 pl-5">
              <p className="font-medium text-white">
                A signal for investigation
              </p>
              <p className="mt-3 leading-7 text-neutral-300">
                Flagged observations were associated with a higher
                subsequent low-spending rate in this historical window.
                This supports further investigation, but does not
                establish the cause of the decline or prove customer churn.
              </p>
            </div>
          </section>

          {/* Methodology */}
          <section
            aria-labelledby="approach-heading"
            className="border-t border-neutral-800 p-6 sm:p-10"
          >
            <h2
              id="approach-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              From transactions to a business question
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

          {/* Proposed experiment */}
          <section
            aria-labelledby="experiment-heading"
            className="border-t border-neutral-800 p-6 sm:p-10"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
              Proposed experiment · Not conducted
            </p>

            <h2
              id="experiment-heading"
              className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Test a retention offer before scaling it
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-neutral-300">
              The project includes an Excel scenario for a proposed
              retention experiment. The recommendation is to investigate
              flagged households and pilot an offer with a randomized
              control group.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
              The experiment was not conducted. No recovered revenue,
              campaign effectiveness, or causal impact is claimed.
            </p>
          </section>

          {/* Public materials */}
          <section
            aria-labelledby="materials-heading"
            className="border-t border-neutral-800 p-6 sm:p-10"
          >
            <h2
              id="materials-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Explore the public project
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-neutral-300">
              The public GitHub repository contains SQL, documentation,
              and the dashboard screenshot. It does not include raw data,
              Excel or Tableau workbooks, or an interactive dashboard.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
              Findings describe historical purchasing patterns. Spending
              declines can have multiple explanations and should be
              investigated before making customer-level decisions.
            </p>

            <a
              href="https://github.com/archana-84/retail-customer-retention-public"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium transition hover:border-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            >
              View project on GitHub
              <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}