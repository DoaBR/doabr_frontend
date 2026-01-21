import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Film, Clapperboard, Video, Tv, Sparkles, TrendingUp, Shield, Receipt } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container max-w-7xl px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-3">
            <Film className="size-12 md:size-16 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">cynema</span>
              <span className="text-muted-foreground">.ai</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Invista em projetos audiovisuais brasileiros e
            <span className="block mt-2 text-primary font-semibold">
              deduza até 6% do seu Imposto de Renda.
            </span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Apoie filmes, séries e documentários. Receba retornos do seu investimento
            e ainda abata do IR com doação incentivada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 gradient-primary border-0 glow-primary">
              <Link href="/projetos">Ver Projetos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/como-funciona">Como Funciona</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 w-full max-w-4xl">
            <div className="text-center p-6 rounded-lg bg-muted/30 border">
              <p className="text-3xl md:text-4xl font-bold gradient-text">R$ 2,8bi</p>
              <p className="text-sm text-muted-foreground mt-1">Captados via Lei do Audiovisual (2024)</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/30 border">
              <p className="text-3xl md:text-4xl font-bold gradient-text">4 tipos</p>
              <p className="text-sm text-muted-foreground mt-1">Categorias de projetos</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1 p-6 rounded-lg bg-muted/30 border">
              <p className="text-3xl md:text-4xl font-bold gradient-text">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Dedutível do IR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias de Projetos */}
      <section className="container max-w-7xl px-4 py-20 border-t">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Projetos Audiovisuais
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Escolha o tipo de projeto que mais combina com você e invista no cinema brasileiro
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/projetos?categoria=filmes" className="group">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover:border-primary transition-all hover:shadow-lg hover:glow-primary">
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Film className="size-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Filmes</h3>
              <p className="text-sm text-muted-foreground">
                Longas-metragens de ficção e drama
              </p>
            </div>
          </Link>

          <Link href="/projetos?categoria=curtas" className="group">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover:border-primary transition-all hover:shadow-lg hover:glow-primary">
              <div className="p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <Clapperboard className="size-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold">Curtas-Metragens</h3>
              <p className="text-sm text-muted-foreground">
                Produções independentes e autorais
              </p>
            </div>
          </Link>

          <Link href="/projetos?categoria=series" className="group">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover:border-primary transition-all hover:shadow-lg hover:glow-primary">
              <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Tv className="size-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Séries</h3>
              <p className="text-sm text-muted-foreground">
                Séries para TV e streaming
              </p>
            </div>
          </Link>

          <Link href="/projetos?categoria=documentarios" className="group">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover:border-primary transition-all hover:shadow-lg hover:glow-primary">
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Video className="size-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Documentários</h3>
              <p className="text-sm text-muted-foreground">
                Histórias reais que inspiram
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
            <div className="size-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto glow-primary">
              1
            </div>
            <h3 className="text-xl font-semibold">Escolha um Projeto</h3>
            <p className="text-muted-foreground">
              Navegue pelos projetos audiovisuais aprovados e escolha aquele que mais te interessa
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="size-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto glow-primary">
              2
            </div>
            <h3 className="text-xl font-semibold">Faça seu Investimento</h3>
            <p className="text-muted-foreground">
              Invista de forma segura via PIX, cartão ou boleto. Você recebe o recibo imediatamente
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="size-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto glow-primary">
              3
            </div>
            <h3 className="text-xl font-semibold">Deduza no IR</h3>
            <p className="text-muted-foreground">
              Use o recibo na sua declaração e deduza até 6% do seu Imposto de Renda devido
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container max-w-7xl px-4 py-20 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <Receipt className="size-12 text-primary mx-auto" />
            <h3 className="text-xl font-semibold">Dedução Fiscal</h3>
            <p className="text-muted-foreground">
              Deduza até 6% do IR devido como pessoa física ou 4% como pessoa jurídica
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <TrendingUp className="size-12 text-secondary mx-auto" />
            <h3 className="text-xl font-semibold">Retorno Potencial</h3>
            <p className="text-muted-foreground">
              Alguns projetos oferecem participação nos lucros da obra audiovisual
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <Sparkles className="size-12 text-accent mx-auto" />
            <h3 className="text-xl font-semibold">Impacto Cultural</h3>
            <p className="text-muted-foreground">
              Apoie a produção cultural brasileira e faça parte de histórias incríveis
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container max-w-7xl px-4 py-20 border-t">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Shield className="size-16 text-primary mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Plataforma Segura e Regulamentada
          </h2>
          <p className="text-xl text-muted-foreground">
            Todos os projetos são aprovados pela ANCINE e órgãos competentes.
            Seus dados estão protegidos de acordo com a LGPD.
          </p>
          <Button asChild size="lg" className="text-lg px-8 gradient-primary border-0 glow-primary">
            <Link href="/auth/signup">Começar a Investir Agora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
