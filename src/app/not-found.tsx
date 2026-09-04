import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="eyebrow">404 / route_not_found</p>
        <h1 className="mt-5 text-5xl font-semibold text-white">Esta página saiu do mapa.</h1>
        <Link className="button button-primary mt-8" href="/pt">Voltar ao início</Link>
      </div>
    </main>
  );
}
