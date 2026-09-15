import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import constructionDashboard from "../public/construction-dashboard.png";
import disappearingBasketDashboard from "../public/disappearing-basket-dashboard.png";

export const metadata: Metadata = {
  title: "Archana Bhusara | Data Analytics Portfolio",
  description: "Explore Archana Bhusara's data analytics projects, including construction cost analysis with Python, SQL, and interactive dashboards.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Archana Bhusara · Buffalo, NY</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Turning data into clearer business decisions.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">Data Science graduate from the University at Buffalo, building practical projects in analysis, visualization, and reporting.</p>
          <Link href="#work" className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
            Explore my work <span aria-hidden="true">↓</span>
          </Link>
        </section>

        <section id="work" aria-labelledby="work-heading" className="scroll-mt-8 border-t border-neutral-800 px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Selected work</p>
            <h2 id="work-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Business questions. Data-driven answers.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-neutral-300">Open a project to explore the business question, approach, dashboard, and findings.</p>
            <ProjectCard
              title="Construction Cost Intelligence"
              description="Exploring where construction costs exceed estimates and which cost records deserve a closer look, using a synthetic dataset."
              href="/projects/construction-cost-intelligence"
              image={constructionDashboard}
              imageAlt="Preview of the construction dashboard's cost variance bar chart."
              technologies={["Python", "Pandas", "SQL", "Streamlit", "Plotly"]}
            />
            <ProjectCard
              title="The Disappearing Basket"
              description="Retail spending decline analysis: identifying households that spend substantially less while continuing to shop, using historical transaction data."
              href="/projects/the-disappearing-basket"
              image={disappearingBasketDashboard}
              imageAlt="The Disappearing Basket dashboard showing household spending declines and historical evaluation results."
              technologies={["SQL", "SQLite", "Excel", "Tableau"]}
            />
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="scroll-mt-8 border-t border-neutral-800 px-6 py-16 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            <h2 id="about-heading" className="text-3xl font-semibold tracking-tight">About me</h2>
            <div className="space-y-4 leading-7 text-neutral-300">
              <p>I am Archana, based in Buffalo, New York, with a master’s degree in Engineering Science (Data Science) from the University at Buffalo.</p>
              <p>I am pursuing Data Analyst opportunities and developing projects that connect data preparation, analysis, and clear visual communication.</p>
            </div>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-8 border-t border-neutral-800 px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 id="skills-heading" className="text-3xl font-semibold tracking-tight">Tools used in my projects</h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {["Python", "Pandas", "SQL", "SQLite", "ETL", "Streamlit", "Plotly", "scikit-learn"].map((skill) => (
                <li key={skill} className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300">{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-8 border-t border-neutral-800 px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2
              id="contact-heading"
              className="text-3xl font-semibold tracking-tight"
            >
              Let’s connect
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-neutral-300">
              Interested in discussing a Data Analyst opportunity or my projects?
              Connect with me on LinkedIn or send me an email.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:archana.bhusara84@gmail.com"
                className="inline-flex items-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
              >
                Email me
                <span aria-hidden="true" className="ml-2">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/archana-bhusara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-700 px-6 py-3 text-sm transition hover:border-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
              >
                LinkedIn
                <span aria-hidden="true" className="ml-2">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>

              <a
                href="https://github.com/archana-84"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-700 px-6 py-3 text-sm transition hover:border-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
              >
                GitHub
                <span aria-hidden="true" className="ml-2">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <p className="mt-6 break-words text-sm text-neutral-400">
              archana.bhusara84@gmail.com
            </p>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}
