"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "Sobre Doações Incentivadas",
    questions: [
      {
        q: "O que são doações incentivadas?",
        a: "Doações incentivadas são contribuições para projetos aprovados pelo governo que podem ser deduzidas do Imposto de Renda. Você direciona parte do seu imposto para causas sociais, culturais, esportivas ou de saúde, sem custo adicional.",
      },
      {
        q: "Quanto posso deduzir do meu IR?",
        a: "Pessoas físicas podem deduzir até 6% do IR devido, enquanto pessoas jurídicas (Lucro Real) podem deduzir até 4%. O limite exato depende da legislação específica de cada programa de incentivo.",
      },
      {
        q: "A doação realmente não tem custo?",
        a: "Sim! O valor doado seria pago como imposto de qualquer forma. Com as doações incentivadas, você escolhe o destino desse valor, direcionando para projetos sociais aprovados, em vez de simplesmente pagar o imposto sem escolher onde ele será aplicado.",
      },
      {
        q: "Quem pode fazer doações incentivadas?",
        a: "Qualquer pessoa física que declara IR no modelo completo ou pessoa jurídica tributada pelo Lucro Real pode fazer doações incentivadas e deduzir do imposto devido.",
      },
    ],
  },
  {
    category: "Como Doar",
    questions: [
      {
        q: "Como faço para doar?",
        a: "É simples: escolha um projeto na nossa plataforma, selecione o valor da doação, faça o pagamento via PIX, cartão ou boleto, e receba o recibo automaticamente por email.",
      },
      {
        q: "Quais formas de pagamento são aceitas?",
        a: "Aceitamos PIX (instantâneo), cartão de crédito (parcelado em até 12x) e boleto bancário (confirmação em até 3 dias úteis).",
      },
      {
        q: "Posso parcelar minha doação?",
        a: "Sim! Doações via cartão de crédito podem ser parceladas em até 12 vezes sem juros. O recibo será emitido pelo valor total.",
      },
      {
        q: "Quando vou receber o recibo?",
        a: "O recibo oficial é enviado automaticamente por email assim que o pagamento for confirmado. Para PIX, é instantâneo. Para boleto, em até 3 dias úteis após a compensação.",
      },
    ],
  },
  {
    category: "Sobre os Projetos",
    questions: [
      {
        q: "Como os projetos são selecionados?",
        a: "Todos os projetos na plataforma são previamente aprovados pelos órgãos governamentais competentes (Ministério da Cultura, Ministério da Saúde, Ministério do Esporte, etc.) e seguem as legislações específicas de cada programa de incentivo.",
      },
      {
        q: "Posso acompanhar o andamento do projeto que doei?",
        a: "Sim! Os proponentes dos projetos são obrigados a prestar contas aos órgãos competentes. Você pode acompanhar o status e resultados através da nossa plataforma e dos canais oficiais do governo.",
      },
      {
        q: "Quais tipos de projetos posso apoiar?",
        a: "Você pode apoiar projetos nas áreas de: Cultura (Lei Rouanet), Audiovisual, Esporte, Saúde (PRONON/PRONAS), Crianças e Adolescentes (FIA), Idosos (FII) e outros programas de incentivo fiscal.",
      },
      {
        q: "O dinheiro vai direto para o projeto?",
        a: "Sim. O valor doado é destinado integralmente ao projeto escolhido, seguindo as regras de cada programa de incentivo. A DoaBR não cobra taxa dos doadores.",
      },
    ],
  },
  {
    category: "Declaração de IR",
    questions: [
      {
        q: "Como declarar as doações no IR?",
        a: "Use o recibo oficial que enviamos para preencher a ficha de 'Doações Efetuadas' na sua declaração de IR. O próprio sistema da Receita Federal calculará automaticamente a dedução.",
      },
      {
        q: "Preciso guardar os recibos?",
        a: "Sim! Guarde todos os recibos por pelo menos 5 anos, pois a Receita Federal pode solicitá-los em caso de malha fina. Mantemos uma cópia digital disponível na sua conta.",
      },
      {
        q: "Posso doar no ano seguinte e ainda deduzir?",
        a: "As doações devem ser feitas durante o ano-calendário (01/01 a 31/12) para serem deduzidas na declaração do ano seguinte. Exemplo: doações feitas em 2025 são declaradas em 2026.",
      },
      {
        q: "E se eu declarar no modelo simplificado?",
        a: "Infelizmente, apenas quem declara no modelo completo pode deduzir as doações incentivadas. No modelo simplificado, a dedução padrão de 20% já é aplicada automaticamente.",
      },
    ],
  },
  {
    category: "Segurança e Privacidade",
    questions: [
      {
        q: "Meus dados estão seguros?",
        a: "Sim! Utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD (Lei Geral de Proteção de Dados). Seus dados bancários são processados por gateways de pagamento certificados PCI-DSS.",
      },
      {
        q: "Vocês compartilham meus dados?",
        a: "Não! Seus dados pessoais nunca são vendidos ou compartilhados com terceiros para fins comerciais. Apenas compartilhamos informações necessárias com os órgãos governamentais para emissão de recibos oficiais.",
      },
      {
        q: "Como posso excluir minha conta?",
        a: "Você pode solicitar a exclusão da sua conta a qualquer momento através do painel do usuário ou entrando em contato com nosso suporte. Manteremos apenas os dados necessários para cumprimento de obrigações legais.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold pr-4">{question}</span>
        <ChevronDown
          className={`size-5 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-muted-foreground border-t bg-muted/20">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <section className="container max-w-4xl px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre doações incentivadas e dedução no IR
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold mb-6 text-primary">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, qIdx) => (
                  <FAQItem key={qIdx} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center space-y-6 bg-muted/30 rounded-lg p-8 md:p-12">
          <MessageCircle className="size-16 text-primary mx-auto" />
          <h2 className="text-3xl font-bold">Ainda tem dúvidas?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a fazer sua primeira doação incentivada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link href="/projetos">Ver Projetos</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/como-funciona">Como Funciona</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
