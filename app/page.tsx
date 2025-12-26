import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Recycle, Film, HeartPulse, Trophy, Palette, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container max-w-7xl px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-3">
            <Heart className="size-12 md:size-16 text-primary fill-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-primary">Doa</span>BR
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Transforme seu Imposto de Renda em impacto social.
            <span className="block mt-2 text-primary font-semibold">
              Doe para projetos incentivados e deduza até 6% do seu IR.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/projetos">Ver Projetos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/como-funciona">Como Funciona</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 w-full max-w-4xl">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">R$ 14,59bi</p>
              <p className="text-sm text-muted-foreground mt-1">Potencial de doações (2025)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">5 tipos</p>
              <p className="text-sm text-muted-foreground mt-1">Categorias de projetos</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Dedutível do IR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias de Projetos */}
      <section className="container max-w-7xl px-4 py-20 border-t">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Categorias de Projetos Incentivados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Link href="/projetos?categoria=audiovisual" className="group">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover:border-primary transition-all hover:shadow-lg">
              <div className="p-4 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors">
                <Film className="size-8 text-yellow-600 dark:text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold">Audiovisual</h3>
              <p className="text-sm text-muted-foreground">
                Filmes, séries e produções culturais
              </p>
            </div>
          </Link>

          <Link href="/projetos?categoria=saude" className="group">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover:border-primary transition-all hover:shadow-lg">
              <div className="p-4 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                <HeartPulse className="size-8 text-red-600 dark:text-red-500" />
              </div>
              <h3 className="text-lg font-semibold">Saúde</h3>
              <p className="text-sm text-muted-foreground">
                PRONON e PRONAS - Oncologia e PcD
              </p>
            </div>
          </Link>

          <Link href="/projetos?categoria=esporte" className="group">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover:border-primary transition-all hover:shadow-lg">
              <div className="p-4 rounded-full bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                <Trophy className="size-8 text-orange-600 dark:text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold">Esporte</h3>
              <p className="text-sm text-muted-foreground">
                Projetos esportivos e paradesportivos
              </p>
            </div>
          </Link>

          <Link href="/projetos?categoria=reciclagem" className="group">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover:border-primary transition-all hover:shadow-lg">
              <div className="p-4 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                <Recycle className="size-8 text-green-600 dark:text-green-500" />
              </div>
              <h3 className="text-lg font-semibold">Reciclagem</h3>
              <p className="text-sm text-muted-foreground">
                Gestão de resíduos e sustentabilidade
              </p>
            </div>
          </Link>

          <Link href="/projetos?categoria=cultura" className="group">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover:border-primary transition-all hover:shadow-lg">
              <div className="p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <Palette className="size-8 text-purple-600 dark:text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold">Cultura</h3>
              <p className="text-sm text-muted-foreground">
                Lei Rouanet e projetos culturais
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="container max-w-7xl px-4 py-20 border-t bg-muted/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Como Funciona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
              1
            </div>
            <h3 className="text-xl font-semibold">Escolha um Projeto</h3>
            <p className="text-muted-foreground">
              Navegue pelos projetos aprovados e escolha aquele que mais se identifica com você
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
              2
            </div>
            <h3 className="text-xl font-semibold">Faça sua Doação</h3>
            <p className="text-muted-foreground">
              Doe de forma segura via PIX, cartão ou boleto. Você recebe o recibo imediatamente
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
              3
            </div>
            <h3 className="text-xl font-semibold">Deduza no IR</h3>
            <p className="text-muted-foreground">
              Use o recibo na sua declaração e deduza até 6% do seu Imposto de Renda devido
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container max-w-7xl px-4 py-20 border-t">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Shield className="size-16 text-primary mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Plataforma Segura e Confiável
          </h2>
          <p className="text-xl text-muted-foreground">
            Todos os projetos são aprovados pelos órgãos competentes.
            Seus dados estão protegidos de acordo com a LGPD.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/auth/signup">Começar a Doar Agora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
