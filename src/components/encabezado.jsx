import Link from "next/link";

export default function Encabezado() {
    return (
        <header className="flex justify-between items-center px-5 mb-4 h-[60px]">
          <div className="text-2xl">
            <Link href="/">Empresa</Link>
          </div>
          <nav className="flex gap-5">
            <Link href="/acerca-de">Acerca De</Link>
          </nav>
        </header>
    )
}