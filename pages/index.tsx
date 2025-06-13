import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navegación superior */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-neutral-800">
        <h1 className="text-xl font-bold text-yellow-400">Caliente Caliente</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-yellow-400">Inicio</Link>
          <Link href="/servicios" className="hover:text-yellow-400">Servicios</Link>
          <Link href="/contacto" className="hover:text-yellow-400">Contacto</Link>
          <Link href="/admin" className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white font-semibold">Acceso clientes</Link>
        </nav>
      </header>

      {/* Hero principal */}
      <main className="flex flex-1 items-center justify-center text-center px-6">
        <div>
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text drop-shadow mb-6">
            Agencia de Marketing de Proximidad
          </h2>
          <p className="text-lg text-neutral-300 max-w-xl mx-auto mb-8">
            En Caliente Caliente ayudamos a negocios físicos a conectar con sus clientes cercanos a través de campañas hiperlocales personalizadas.
          </p>
          <Link href="/servicios" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition">
            Ver servicios
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-neutral-500 py-4 border-t border-neutral-800">
        © {new Date().getFullYear()} Caliente Caliente. Todos los derechos reservados.
      </footer>
    </div>
  );
}
