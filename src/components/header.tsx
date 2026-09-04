"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/content";

export function Header({ locale, nav }: { locale: Locale; nav: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const other = locale === "pt" ? "en" : "pt";

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Marcos Wilson — início">
        <span>MW</span><small>/dev</small>
      </a>
      <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Principal">
        {nav.map((item) => <a key={item.href} href={`#${item.href}`} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <Link className="locale" href={`/${other}`} hrefLang={other}>{other.toUpperCase()}</Link>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
