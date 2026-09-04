export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  pushed_at: string;
};

const fallback: GithubRepo[] = [
  { id: 1, name: "hugg", html_url: "https://github.com/mwilsonoliveira/hugg", description: "Ajudando os tutores a encontrar animais perdidos!", language: "TypeScript", stargazers_count: 0, fork: false, pushed_at: "2026-09-01T00:00:00Z" },
  { id: 2, name: "playfeed", html_url: "https://github.com/mwilsonoliveira/playfeed", description: "A TypeScript product experiment.", language: "TypeScript", stargazers_count: 0, fork: false, pushed_at: "2026-08-01T00:00:00Z" },
  { id: 3, name: "issue-tracker", html_url: "https://github.com/mwilsonoliveira/issue-tracker", description: "A modern issue tracking application.", language: "TypeScript", stargazers_count: 0, fork: false, pushed_at: "2026-07-01T00:00:00Z" },
];

export async function getGithubRepos(): Promise<GithubRepo[]> {
  try {
    const headers: HeadersInit = { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

    const response = await fetch("https://api.github.com/users/mwilsonoliveira/repos?per_page=100&sort=pushed", {
      headers,
      next: { revalidate: 3600 },
    });
    if (!response.ok) return fallback;

    const repos = (await response.json()) as GithubRepo[];
    return repos
      .filter((repo) => !repo.fork && repo.name !== "marcoswilson" && repo.name !== "mwilsonoliveira")
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .slice(0, 6);
  } catch {
    return fallback;
  }
}
