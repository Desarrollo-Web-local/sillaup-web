import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl border border-outline-variant shadow-lg p-8 md:p-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">accessible_forward</span>
          </div>
          <div>
            <p className="text-headline-sm font-headline-sm font-extrabold text-on-surface leading-tight">SillaUp</p>
            <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Panel de administración</p>
          </div>
        </div>
        <h1 className="text-headline-md font-headline-md font-extrabold text-on-surface mb-2">Iniciar sesión</h1>
        <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
          Ingresa con la cuenta autorizada para editar textos, precios, ofertas y fotos del sitio
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
