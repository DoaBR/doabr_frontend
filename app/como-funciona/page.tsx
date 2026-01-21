import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Film,
  FileText,
  Calculator,
  CheckCircle,
  Users,
  Building2,
  CircleDollarSign,
  Shield,
  TrendingUp
} from "lucide-react";

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container max-w-7xl px-4 py-12 md:py-20">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Como Funciona</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entenda como investir em projetos audiovisuais e deduzir do seu Imposto de Renda
          </p>
        </div>

        {/* Passo a Passo */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Passo a Passo do Investimento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="size-20 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto glow-primary">
                1
              </div>
              <Film className="size-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Escolha o Projeto</h3>
              <p className="text-muted-foreground">
                Navegue pelos projetos audiovisuais aprovados e selecione o que mais te interessa
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="size-20 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto glow-primary">
                2
              </div>
              <CircleDollarSign className="size-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Faça o Investimento</h3>
              <p className="text-muted-foreground">
                Invista via PIX, cartão ou boleto. O pagamento é processado de forma segura
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="size-20 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto glow-primary">
                3
              </div>
              <FileText className="size-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Receba o Recibo</h3>
              <p className="text-muted-foreground">
                O recibo oficial é enviado automaticamente por email após a confirmação do pagamento
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="size-20 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto glow-primary">
                4
              </div>
              <Calculator className="size-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Deduza no IR</h3>
              <p className="text-muted-foreground">
                Use o recibo na sua declaração e recupere até 6% do imposto devido
              </p>
            </div>
          </div>
        </div>

        {/* Benefícios */}
        <div className="mb-20 bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Benefícios do Investimento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="size-8 text-primary" />
                <h3 className="text-2xl font-semibold">Pessoa Física</h3>
              </div>
              <ul className="space-y-3 ml-11">
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Deduza até <strong>6% do IR devido</strong> na declaração completa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Receba participação nos lucros de alguns projetos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Recibos válidos para comprovação na Receita Federal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Apoie o cinema brasileiro e faça parte de histórias</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Building2 className="size-8 text-primary" />
                <h3 className="text-2xl font-semibold">Pessoa Jurídica</h3>
              </div>
              <ul className="space-y-3 ml-11">
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Deduza até <strong>4% do IR devido</strong> para empresas do Lucro Real</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Associe sua marca a produções cinematográficas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Melhora a imagem corporativa e responsabilidade social</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Incentivo fiscal regulamentado pela Lei do Audiovisual</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exemplo Prático */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Exemplo Prático
          </h2>
          <div className="max-w-3xl mx-auto gradient-border rounded-lg p-8 bg-card">
            <div className="space-y-6">
              <div>
                <p className="text-lg mb-4">
                  <strong>Cenário:</strong> João tem R$ 10.000,00 de IR devido em 2025
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Imposto de Renda devido:</span>
                  <span className="font-semibold">R$ 10.000,00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Limite de dedução (6%):</span>
                  <span className="font-semibold">R$ 600,00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>João investe em filme:</span>
                  <span className="font-semibold text-primary">R$ 600,00</span>
                </div>
                <div className="flex justify-between items-center py-3 gradient-primary rounded px-4 mt-4 text-primary-foreground">
                  <span className="font-bold">IR a pagar após dedução:</span>
                  <span className="text-2xl font-bold">R$ 9.400,00</span>
                </div>
              </div>

              <div className="pt-4 border-t space-y-2">
                <p className="text-center text-muted-foreground">
                  João apoiou o cinema brasileiro, <strong className="text-foreground">sem custo adicional</strong>!
                </p>
                <p className="text-center text-secondary font-medium">
                  <TrendingUp className="inline size-4 mr-1" />
                  Além disso, pode receber participação nos lucros do filme
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leis de Incentivo */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Leis de Incentivo ao Audiovisual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border rounded-lg p-6 space-y-3 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-primary">Lei do Audiovisual (Lei 8.685/93)</h3>
              <p className="text-sm text-muted-foreground">
                Principal lei de incentivo para produção de filmes e séries brasileiras.
                Permite dedução de até 6% do IR para pessoas físicas e 4% para jurídicas.
              </p>
            </div>

            <div className="border rounded-lg p-6 space-y-3 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-primary">Lei Rouanet (Lei 8.313/91)</h3>
              <p className="text-sm text-muted-foreground">
                Incentivo a projetos culturais incluindo documentários, filmes experimentais
                e produções audiovisuais com cunho cultural e educativo.
              </p>
            </div>

            <div className="border rounded-lg p-6 space-y-3 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-primary">Artigo 39 (Lei do Audiovisual)</h3>
              <p className="text-sm text-muted-foreground">
                Permite que contribuintes invistam em projetos específicos de produção
                audiovisual e recebam participação proporcional nos resultados.
              </p>
            </div>

            <div className="border rounded-lg p-6 space-y-3 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-primary">FSA - Fundo Setorial do Audiovisual</h3>
              <p className="text-sm text-muted-foreground">
                Fundo dedicado ao desenvolvimento da cadeia produtiva do audiovisual,
                com linhas de investimento e financiamento para produções brasileiras.
              </p>
            </div>
          </div>
        </div>

        {/* Segurança */}
        <div className="text-center space-y-6 bg-muted/30 rounded-lg p-8 md:p-12">
          <Shield className="size-16 text-primary mx-auto" />
          <h2 className="text-3xl font-bold">
            Segurança e Transparência
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos os projetos são previamente aprovados pela ANCINE e órgãos governamentais competentes.
            Seus investimentos são rastreados e você recebe recibos oficiais válidos para a Receita Federal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="gradient-primary border-0 glow-primary">
              <Link href="/projetos">Ver Projetos</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/faq">Perguntas Frequentes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
