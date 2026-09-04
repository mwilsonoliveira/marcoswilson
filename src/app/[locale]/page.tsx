import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Portfolio } from "@/components/portfolio";
import { content, isLocale, locales } from "@/lib/content";
import { getGithubRepos } from "@/lib/github";

export const revalidate = 3600;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const description = content[locale].hero.intro;
  return {
    title: locale === "pt" ? "Desenvolvedor Full-Stack" : "Full-Stack Developer",
    description,
    alternates: { canonical: `/${locale}`, languages: { "pt-BR": "/pt", "en-US": "/en", "x-default": "/pt" } },
    openGraph: { title: "Marcos Wilson — Full-Stack Developer", description, type: "website", locale: locale === "pt" ? "pt_BR" : "en_US" },
  };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const repos = await getGithubRepos();
  const schema = { "@context": "https://schema.org", "@type": "Person", name: "Marcos Wilson", jobTitle: "Full-Stack Developer", url: process.env.NEXT_PUBLIC_SITE_URL, email: "mailto:mwilson.oliveira@gmail.com", address: { "@type": "PostalAddress", addressLocality: "São Leopoldo", addressRegion: "RS", addressCountry: "BR" }, sameAs: ["https://github.com/mwilsonoliveira", "https://www.linkedin.com/in/mwilson-oliveira/"] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><Portfolio locale={locale} repos={repos} /></>;
}
