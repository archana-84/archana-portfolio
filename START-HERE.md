# Portfolio update: separate project pages

This bundle updates your existing Next.js App Router portfolio. It is not a new standalone app. It contains complete replacement/new files, not snippets. No additional packages are needed for these changes in your existing Next.js + Tailwind project.

## 1. Open the correct project

Open your `archana-portfolio` folder in VS Code. These files belong to the portfolio, not the Python `construction-cost-intelligence` repository. The Streamlit `dashboard/app.py` file does not need to change for this page split.

Before replacing the homepage, save a backup outside the app folder or commit your current portfolio changes in GitHub Desktop.

## 2. Add the files

Unzip the download. Copy the files individually into the paths below. Do not replace your entire existing app directory.

| Path relative to your portfolio root | Action | Purpose |
| --- | --- | --- |
| `app/page.tsx` | Replace the contents | Homepage, introduction, project card, About, Skills, Contact |
| `app/projects/construction-cost-intelligence/page.tsx` | Create folders and file | Construction project detail page |
| `components/Navbar.tsx` | Create | Shared navigation on both pages |
| `components/Footer.tsx` | Create | Shared footer on both pages |
| `components/ProjectCard.tsx` | Create | Reusable clickable project card |
| `public/construction-dashboard.png` | Keep your existing image | Chart preview on both pages |

Keep `app/layout.tsx`, `app/globals.css`, `package.json`, configuration files, and other existing project files. The bundle uses your current global styling and root layout. Your supplied homepage already contained its own navbar, so these pages do too; if you separately added a navbar/footer to `layout.tsx`, render each only once.

Your existing image is not included in this bundle. The uploaded attachment was source code, not the standalone `construction-dashboard.png` asset. Keep that image in `public/`. Do not substitute a screenshot of the whole portfolio for the chart image.

### If your project uses src/app instead

The supplied code originally imports `../public/construction-dashboard.png`, so this bundle assumes a root-level `app` folder. If yours uses `src/app`, put the new app files in `src/app` and the components in `src/components`. Keep `public` at the project root. Change only the image imports:

- In `src/app/page.tsx`: `../../public/construction-dashboard.png`
- In `src/app/projects/construction-cost-intelligence/page.tsx`: `../../../../public/construction-dashboard.png`

Do not create both `app` and `src/app`.

## 3. Create folders in VS Code

1. Right-click the `app` folder and choose New Folder. Name it `projects`.
2. Inside `projects`, create `construction-cost-intelligence`.
3. Inside that folder, create `page.tsx` and paste the full matching file from the bundle.
4. At the same level as `app` and `public`, create `components`.
5. Add the three component files with the exact names shown above.
6. Open your original `app/page.tsx`, select all, and replace it with the bundle's homepage file.
7. Save all files. Use the `.tsx` extension, not `.ts`, because these files contain JSX.

## 4. View the result

If your development server is already running, refresh the browser. Otherwise open Terminal > New Terminal in VS Code, make sure the terminal is in `archana-portfolio`, and run:

```bash
npm run dev
```

Use the Local URL shown in your terminal. Usually it is `http://localhost:3000`, but use the port actually shown.

Homepage: `/`

Construction detail page: `/projects/construction-cost-intelligence`

Select the project card or its View project text. Both are part of one accessible link and open the detail page in the same tab. The live Streamlit dashboard and GitHub buttons on the detail page open their external destinations in new tabs.

## 5. Check these behaviors

- Homepage shows a short project card instead of the full case study.
- Clicking the card opens the construction project detail page.
- Refreshing the detail page loads it directly.
- Back to projects returns to the homepage's Work section.
- Work, About, Skills, and Contact navigation works from both pages.
- Dashboard and GitHub buttons open the correct destinations.
- The chart image appears on both pages and is not stretched or cropped.
- At narrow browser widths, content stacks and navigation stays available.
- Tab through links to check visible keyboard focus.

Then run the project's production build from its root:

```bash
npm run build
```

After checking the changes, commit them in GitHub Desktop. A suggested summary is `Split portfolio into homepage and construction project page`. Push when you want the changes on GitHub; pushing may trigger a deployment if your repository is configured for one.

## 6. Where to make future edits

- Homepage introduction, About, Skills, or profile link: `app/page.tsx`.
- Construction project descriptions, metrics, chart caption, and external links: `app/projects/construction-cost-intelligence/page.tsx`.
- Navbar links: `components/Navbar.tsx`.
- Footer: `components/Footer.tsx`.
- Card appearance shared by future projects: `components/ProjectCard.tsx`.

The Contact section currently uses your known GitHub profile. Add a verified email or LinkedIn URL there when ready. No email address or credentials have been invented. The old Certifications navigation link was removed because the supplied file did not include a certifications section.

The dataset metrics are retained from your original code and are static, independently rounded figures. They do not update when the Streamlit data or filters change. They were not recalculated from the dataset here. The detail page explains that cost variance means actual minus estimated cost and that anomaly flags require investigation. Its chart is a static preview; filtering happens in Streamlit.

## 7. Add another project later

1. Create a new folder under `app/projects`, such as `retail-sales-analysis`.
2. Create its own `page.tsx` with a default-exported page component. Use the construction page as a structural reference, replacing its project-specific text, metadata, metrics, image, and links.
3. Put the new screenshot in `public`, for example `retail-dashboard.png`.
4. Import that image in `app/page.tsx`:

```tsx
import retailDashboard from "../public/retail-dashboard.png";
```

5. Add another `ProjectCard` directly below the existing one inside the Work section:

```tsx
<ProjectCard
  title="Retail Sales Analysis"
  description="Replace this with the question your completed project answers."
  href="/projects/retail-sales-analysis"
  image={retailDashboard}
  imageAlt="Describe what the retail dashboard screenshot shows."
  technologies={["SQL", "Excel", "Tableau"]}
/>
```

This is a future example, not an existing project or achievement. Only add it once you have the project content and image.

## Validation and scope

The delivered source was reviewed for relative imports, route destinations, matching section anchors, and preservation of the supplied project content. The existing chart image is a required local dependency. A full Next.js build and browser check could not be run here because the attachment did not include the full app, its dependencies, root layout, styles, or chart asset. Run the checks above in your existing project.

Official reference: [Next.js App Router pages and layouts](https://nextjs.org/docs/app/getting-started/layouts-and-pages) and [Link component](https://nextjs.org/docs/app/api-reference/components/link).
