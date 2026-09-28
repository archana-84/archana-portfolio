import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import dashboardPreview from "../../../public/before-the-call-dashboard.png";

export const metadata: Metadata = {
  title: "Before the Call | Archana Bhusara",
  description:
    "Historical campaign-response modeling with leakage prevention, chronological evaluation, probability calibration, and an honest look at weak test-period generalization.",
};

const technologies = [
  "Python", "pandas", "NumPy", "scikit-learn", "SQL", "SQLite",
  "Streamlit", "Plotly", "Matplotlib", "joblib", "pytest", "Git", "GitHub",
];

const snapshot = [
  { label: "Historical observations", value: "41,188" },
  { label: "Overall response rate", value: "11.27%" },
  { label: "Selected source features", value: "13" },
  { label: "Automated tests", value: "8" },
];

const testMetrics = [
  { label: "Average precision", value: "0.4782" },
  { label: "No-skill AP reference", value: "0.4450" },
  { label: "Mean calibrated probability", value: "21.88%" },
  { label: "Mean probability − response rate", value: "−22.62 pp" },
  { label: "Brier score", value: "0.3438" },
  { label: "Log loss", value: "1.0261" },
];

const sectionClass = "border-t border-neutral-800 p-6 sm:p-10";
const headingClass = "text-2xl font-semibold tracking-tight sm:text-3xl";
const bodyClass = "mt-5 leading-7 text-neutral-300";
const focusClass = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300";

function Section({ id, title, children }: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className={sectionClass}>
      <h2 id={id} className={headingClass}>{title}</h2>
      {children}
    </section>
  );
}

function ProjectLinks() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href="https://before-the-call-3cv4yk76yrhgyurwmp3mqx.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-200 ${focusClass}`}
      >
        Live Demo <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <a
        href="https://github.com/archana-84/before-the-call"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium transition hover:border-emerald-300 ${focusClass}`}
      >
        GitHub <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}

function DataTable({ caption, columns, rows }: {
  caption: string;
  columns: string[];
  rows: string[][];
}) {
  return (
    <div
      role="region"
      aria-label={caption}
      tabIndex={0}
      className={`mt-7 overflow-x-auto rounded-2xl border border-neutral-800 ${focusClass}`}
    >
      <table className="w-full text-left text-sm leading-6">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-emerald-950/20 text-neutral-200">
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="whitespace-nowrap px-5 py-4 font-medium">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-800">
          {rows.map((row) => (
            <tr key={row.join("|")}>
              <th scope="row" className="whitespace-nowrap px-5 py-4 font-medium text-white">
                {row[0]}
              </th>
              {row.slice(1).map((cell, index) => (
                <td key={index} className="whitespace-nowrap px-5 py-4 tabular-nums text-neutral-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BeforeTheCallPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <main id="main-content" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <Link
          href="/#work"
          className={`inline-flex rounded-sm text-sm text-emerald-300 hover:text-emerald-200 ${focusClass}`}
        >
          <span aria-hidden="true" className="mr-2">←</span>
          Back to projects
        </Link>

        <article className="mt-8 overflow-hidden rounded-3xl border border-neutral-800 bg-[#0e0e0e]">
          <div className="grid lg:grid-cols-2">
            <header className="p-6 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                Data Science · Predictive Modeling
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Before the Call
              </h1>
              <p className="mt-4 text-xl leading-8 text-neutral-300">
                Predicting campaign response before outreach
              </p>
              <p className={bodyClass}>
                Can information available before a scheduled marketing call help
                prioritize outreach? This project ranks historical term-deposit
                subscription outcomes and checks whether that ranking holds up
                in a later campaign period.
              </p>
              <ul aria-label="Core technologies" className="mt-7 flex flex-wrap gap-2">
                {["Python", "scikit-learn", "SQL", "Streamlit"].map((technology) => (
                  <li key={technology} className="rounded-full border border-neutral-700 px-3 py-1.5 text-xs text-neutral-300">
                    {technology}
                  </li>
                ))}
              </ul>
              <ProjectLinks />
            </header>

            <section
              aria-labelledby="snapshot-heading"
              className="border-t border-neutral-800 bg-gradient-to-br from-emerald-950/30 via-[#101413] to-[#0e0e0e] p-6 sm:p-10 lg:border-l lg:border-t-0"
            >
              <h2 id="snapshot-heading" className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-300">
                Project snapshot
              </h2>
              <dl className="mt-7 grid gap-4 sm:grid-cols-2">
                {snapshot.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <dt className="text-sm leading-6 text-neutral-400">{metric.label}</dt>
                    <dd className="mt-3 text-3xl font-semibold tracking-tight text-emerald-300">{metric.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 border-l-2 border-emerald-400/50 pl-5">
                <h3 className="font-semibold">The central finding</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300">
                  Validation gains weakened in the untouched test period.
                  Ranking generalized weakly, and calibrated probabilities
                  substantially underestimated the later response rate.
                </p>
              </div>
            </section>
          </div>

          <Section id="question-heading" title="The business question">
            <p className="mt-5 max-w-4xl text-lg leading-8 text-neutral-200">
              When contact capacity is limited, can a model use information
              available before outreach to rank historical campaign observations
              by their likelihood of ending in subscription?
            </p>
            <p className="mt-4 leading-7 text-neutral-400">
              The analysis evaluates historical response prediction. It does not
              estimate whether making a call causes a subscription.
            </p>
          </Section>

          <Section id="dataset-heading" title="The data and its historical context">
            <p className={bodyClass}>
              The official UCI Bank Marketing dataset contains 41,188 observations
              from Portuguese direct-marketing campaigns conducted between May
              2008 and November 2010. Its 20 source features accompany a binary
              subscription target, with 4,640 positive outcomes overall.
            </p>
            <details className="mt-6 rounded-2xl border border-neutral-800 p-5">
              <summary className={`cursor-pointer rounded-sm font-medium text-emerald-300 ${focusClass}`}>
                Data quality and identity limitations
              </summary>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-neutral-300">
                <li>Retained 12 exact duplicate rows because no customer or contact identifier is available.</li>
                <li>Found no conventional nulls; treated “unknown” categories as semantic missingness.</li>
                <li>Used the documented chronological row order; exact contact dates and customer identities are unavailable.</li>
              </ul>
            </details>
          </Section>

          <Section id="leakage-heading" title="Define the decision time before modeling">
            <p className={bodyClass}>
              Scoring is framed immediately before a scheduled call, with its
              channel and date assumed known. A feature-by-feature audit checked
              what would be available at that moment.
            </p>
            <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-neutral-300">
              <li><code className="text-emerald-300">duration</code> was excluded because it is only known after the call.</li>
              <li><code className="text-emerald-300">campaign</code> was excluded because its timing at the scoring moment is ambiguous.</li>
              <li><code className="text-emerald-300">y</code> was used only as the outcome, never as a predictor.</li>
              <li>Economic indicators were evaluated, then removed from the selected model after severe temporal extrapolation appeared between training and validation.</li>
            </ul>
            <details className="mt-6 rounded-2xl border border-neutral-800 p-5">
              <summary className={`cursor-pointer rounded-sm font-medium text-emerald-300 ${focusClass}`}>
                The 13 selected source features
              </summary>
              <p className="mt-4 font-mono text-sm leading-7 text-neutral-300">
                age, job, marital, education, default, housing, loan, contact,
                month, day_of_week, pdays, previous, poutcome
              </p>
            </details>
          </Section>

          <Section id="evaluation-heading" title="Evaluate forward in time">
            <p className={bodyClass}>
              Chronological splits preserve the sequence of historical campaign
              regimes. Model and calibration choices used validation data; the
              test set stayed untouched until the model was locked.
            </p>
            <DataTable
              caption="Chronological splits and historical response prevalence"
              columns={["Split", "Approximate period", "Observations", "Response rate"]}
              rows={[
                ["Training", "May–Nov 2008", "27,680", "4.83%"],
                ["Validation", "Dec 2008–May 2009", "8,544", "12.79%"],
                ["Untouched test", "Jun 2009–Nov 2010", "4,964", "44.50%"],
              ]}
            />
            <p className="mt-4 text-sm leading-7 text-neutral-400">
              Period labels are approximate. A random split would mix different
              historical regimes. Without customer identifiers, separation of
              individual customers across splits cannot be verified.
            </p>
          </Section>

          <Section id="model-heading" title="Compare models and select a feature policy">
            <p className={bodyClass}>
              Compared a training-prevalence dummy baseline, unweighted and
              class-balanced logistic regression, unweighted and class-balanced
              random forests, and multiple logistic-regression feature policies.
            </p>
            <div className="mt-6 border-l-2 border-emerald-400/50 pl-5">
              <h3 className="text-lg font-semibold">Selected: regularized logistic regression</h3>
              <p className="mt-3 leading-7 text-neutral-300">
                The selected model excludes economic indicators and uses sigmoid
                probability calibration. Categorical features are one-hot encoded
                with unseen categories ignored; numerical features are standardized.
                All preprocessing was fitted only on training data.
              </p>
            </div>
          </Section>

          <Section id="capacity-heading" title="Validation gains weakened on the test period">
            <p className={bodyClass}>
              Capacity defines the share of observations selected from the top of
              the ranking. Precision measures how many selected observations ended
              in subscription; recall measures how many of all historical subscribers
              were selected.
            </p>
            <DataTable
              caption="Validation and untouched test results at fixed contact capacities"
              columns={["Period", "Capacity", "Precision", "Recall", "Lift"]}
              rows={[
                ["Validation", "10%", "26.67%", "20.86%", "2.08"],
                ["Validation", "20%", "24.69%", "38.61%", "1.93"],
                ["Untouched test", "10%", "43.06%", "9.69%", "0.97"],
                ["Untouched test", "20%", "48.74%", "21.91%", "1.10"],
              ]}
            />
            <p className="mt-4 text-sm leading-7 text-neutral-400">
              Lift is precision divided by that period’s response prevalence;
              1.00 represents the random-selection expectation. This is a ranking
              measure, not a causal campaign-uplift estimate.
            </p>
            <p className={bodyClass}>
              At 10% test capacity, 497 observations included 214 historical
              subscribers, slightly below random expectation. At 20%, 993
              observations included 484 subscribers, giving a modest 1.10 lift.
              The larger raw test precision reflects a much higher response base
              rate and does not show improved generalization.
            </p>
          </Section>

          <Section id="test-heading" title="The untouched test also exposed calibration drift">
            <p className={bodyClass}>
              The test period contained 2,209 subscribers among 4,964 observations.
              Its 44.50% response rate substantially exceeded the mean calibrated
              probability of 21.88%.
            </p>
            <dl className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {testMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-neutral-800 p-5">
                  <dt className="text-sm leading-6 text-neutral-400">{metric.label}</dt>
                  <dd className="mt-3 text-2xl font-semibold tabular-nums">{metric.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 leading-7 text-neutral-400">
              Validation average precision was 0.2244. Test average precision was
              only modestly above its 0.4450 no-skill reference. Because prevalence
              changed substantially, the raw AP values should not be read as a
              direct improvement. “pp” means percentage points.
            </p>
          </Section>

          <Section id="shift-heading" title="Why the model weakened">
            <p className={bodyClass}>
              Response prevalence rose from 4.83% in training to 12.79% in
              validation and 44.50% in testing, showing substantial temporal
              distribution shift. Removing economic indicators addressed an
              observed extrapolation problem but did not make the remaining
              relationships stable over time.
            </p>
            <p className="mt-4 leading-7 text-neutral-400">
              Ranking and calibration weakened under that shift. Feature
              contribution analysis, group diagnostics, ranking-error reviews,
              and score-decile summaries helped investigate the result. The
              historical data cannot establish the exact causes of the change.
            </p>
          </Section>

          <Section id="demo-heading" title="Explore the historical capacity simulator">
            <p className={bodyClass}>
              The Streamlit demo lets visitors vary contact capacity from 1% to
              50%, compare historical precision and recall, inspect and download
              a ranked historical queue, and examine test-period calibration,
              score deciles, methodology, and limitations.
            </p>
            <figure className="mt-7">
              <div className="overflow-hidden rounded-2xl border border-neutral-800">
                <Image
                  src={dashboardPreview}
                  alt="Before the Call historical test dashboard at 20% capacity: 993 selected observations, 484 subscribers, 48.7% precision, 21.9% recall, and 1.10 lift, with precision and recall curves."
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-sm leading-6 text-neutral-400">
                Static preview at 20% capacity. Displayed percentages are rounded.
                The demo explores historical outcomes; it does not run an outreach campaign.
              </figcaption>
            </figure>
            <ProjectLinks />
          </Section>

          <Section id="engineering-heading" title="Reconcile the analysis and test the workflow">
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-800 p-6">
                <h3 className="text-lg font-semibold">SQL analytics</h3>
                <p className="mt-3 leading-7 text-neutral-300">
                  A local SQLite layer reproduces split summaries, 10% and 20%
                  capacity results, contact-channel and campaign-month diagnostics,
                  and score-decile summaries. Python and SQL results are reconciled.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-800 p-6">
                <h3 className="text-lg font-semibold">Eight automated tests</h3>
                <p className="mt-3 leading-7 text-neutral-300">
                  Tests cover feature-policy consistency, split integrity,
                  absence of leakage features, demo-data integrity, capacity
                  calculations, exported probability metrics, and agreement
                  between Python and SQL.
                </p>
              </div>
            </div>
          </Section>

          <Section id="limits-heading" title="Limitations and responsible interpretation">
            <p className={bodyClass}>
              These are historical Portuguese campaign outcomes from 2008–2010.
              The analysis does not demonstrate increased revenue, campaign
              effectiveness, or current US-market performance. Exact customer
              identities and contact dates are unavailable, and prediction does
              not establish the effect of making a call.
            </p>
            <div className="mt-6 rounded-2xl border border-neutral-700 bg-black/20 p-6">
              <h3 className="text-lg font-semibold">Recommendation: do not deploy for operational outreach</h3>
              <p className="mt-3 leading-7 text-neutral-300">
                Further use would require newer representative data, verified
                customer identifiers, rolling temporal validation, recalibration,
                and continuous drift monitoring. The public app is an educational
                demonstration of the historical evaluation.
              </p>
            </div>
          </Section>

          <Section id="technology-heading" title="Technology">
            <ul aria-label="Project technologies" className="mt-6 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <li key={technology} className="rounded-full border border-neutral-700 px-3 py-1.5 text-xs text-neutral-300">
                  {technology}
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
