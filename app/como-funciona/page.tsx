import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Heart,
  Calculator,
  CheckCircle,
  Users,
  Building2,
  CircleDollarSign,
  Shield
} from "lucide-react";

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container max-w-7xl px-4 py-12 md:py-20">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Como Funciona
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entenda como doar para projetos incentivados e deduzir do seu Imposto de Renda
          </p>
        </div>

        {/* Passo a Passo */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Passo a Passo da Doação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="size-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto">
                1
              </div>
              <Heart className="size-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Escolha o Projeto</h3>
              <p className="text-muted-foreground">
                Navegue pelos projetos aprovados e selecione aquele que mais se identifica com você
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="size-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto">
                2
              </div>
              <CircleDollarSign className="size-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Faça a Doação</h3>
              <p className="text-muted-foreground">
                Doe via PIX, cartão ou boleto. O pagamento é processado de forma segura
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="size-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto">
                3
              </div>
              <FileText className="size-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Receba o Recibo</h3>
              <p className="text-muted-foreground">
                O recibo oficial é enviado automaticamente por email após a confirmação do pagamento
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="size-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mx-auto">
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

        {/* Benefícios Fiscais */}
        <div className="mb-20 bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Benefícios Fiscais
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
                  <span>Doações podem ser feitas durante todo o ano fiscal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Recibos válidos para comprovação na Receita Federal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Apoie causas sociais sem custo adicional</span>
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
                  <span>Fortalece a responsabilidade social da empresa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Melhora a imagem corporativa e engajamento</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>Incentivo fiscal regulamentado por lei</span>
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
          <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <p className="text-lg mb-4">
                  <strong>Cenário:</strong> João tem R$ 5.000,00 de IR devido em 2025
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Imposto de Renda devido:</span>
                  <span className="font-semibold">R$ 5.000,00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>Limite de dedução (6%):</span>
                  <span className="font-semibold">R$ 300,00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span>João doa para projeto:</span>
                  <span className="font-semibold text-primary">R$ 300,00</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-primary/10 rounded px-4 mt-4">
                  <span className="font-bold">IR a pagar após dedução:</span>
                  <span className="text-2xl font-bold text-primary">R$ 4.700,00</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-center text-muted-foreground">
                  João apoiou uma causa social e <strong className="text-foreground">não teve custo adicional</strong>,
                  pois o valor seria pago como imposto de qualquer forma.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leis de Incentivo */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Leis de Incentivo Fiscal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">Lei Rouanet</h3>
              <p className="text-sm text-muted-foreground">
                Incentivo a projetos culturais como teatro, cinema, música, artes visuais e patrimônio cultural.
              </p>
            </div>

            <div className="border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">Lei do Audiovisual</h3>
              <p className="text-sm text-muted-foreground">
                Apoio à produção de obras audiovisuais brasileiras, incluindo filmes, séries e documentários.
              </p>
            </div>

            <div className="border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">Lei do Esporte</h3>
              <p className="text-sm text-muted-foreground">
                Incentivo a projetos esportivos e paradesportivos para formação de atletas e inclusão social.
              </p>
            </div>

            <div className="border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">PRONON</h3>
              <p className="text-sm text-muted-foreground">
                Programa Nacional de Apoio à Atenção Oncológica para prevenção e tratamento do câncer.
              </p>
            </div>

            <div className="border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">PRONAS/PCD</h3>
              <p className="text-sm text-muted-foreground">
                Programa de Apoio à Pessoa com Deficiência para inclusão e reabilitação.
              </p>
            </div>

            <div className="border rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">Fundo da Criança</h3>
              <p className="text-sm text-muted-foreground">
                Apoio a projetos voltados para crianças e adolescentes em situação de vulnerabilidade.
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
            Todos os projetos são previamente aprovados pelos órgãos governamentais competentes.
            Suas doações são rastreadas e você recebe recibos oficiais válidos para a Receita Federal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
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
