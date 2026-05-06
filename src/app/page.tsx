import { getDashboardStats } from "@/actions/subject";
import { AppLayout } from "@/components/layout/AppLayout";

export default async function Home() {
  const stats = await getDashboardStats();

  return (
    <AppLayout>
      <div className="flex-1 text-white selection:bg-indigo-500/30 font-sans">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <header className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]" />
              System Online
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Bem-vindo ao Quest
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              A sua plataforma premium de estudos gamificada. Acompanhe seu progresso e domine novos conhecimentos de forma inteligente.
            </p>
          </header>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:bg-white/[0.06] overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-zinc-500 text-sm font-medium tracking-wider uppercase mb-2">Matérias</h3>
                <p className="text-5xl font-semibold text-white tracking-tight">{stats.totalSubjects}</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:bg-white/[0.06] overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-zinc-500 text-sm font-medium tracking-wider uppercase mb-2">Questões</h3>
                <p className="text-5xl font-semibold text-white tracking-tight">{stats.totalQuestions}</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:bg-white/[0.06] overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-zinc-500 text-sm font-medium tracking-wider uppercase mb-2">Usuários</h3>
                <p className="text-5xl font-semibold text-white tracking-tight">{stats.totalUsers}</p>
              </div>
            </div>
          </section>

          {/* Status Message */}
          <section className="mt-20 text-center border-t border-white/10 pt-16">
            <p className="text-zinc-500 text-sm font-medium tracking-wide">
              Pronto para receber dados. Aguardando Seed de initialização...
            </p>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
