"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "Sobre Investimentos em Audiovisual",
    questions: [
      {
        q: "O que é investimento incentivado em audiovisual?",
        a: "É uma forma de investir em produções cinematográficas brasileiras utilizando parte do seu Imposto de Renda devido. Você direciona até 6% do IR para projetos aprovados pela ANCINE, sem custo adicional, e ainda pode receber participação nos lucros.",
      },
      {
        q: "Quanto posso deduzir do meu IR?",
        a: "Pessoas físicas podem deduzir até 6% do IR devido, enquanto pessoas jurídicas (Lucro Real) podem deduzir até 4%. O valor investido é integralmente abatido do imposto que você pagaria de qualquer forma.",
      },
      {
        q: "Posso ter retorno financeiro além da dedução?",
        a: "Sim! Alguns projetos oferecem participação nos lucros da obra audiovisual. Isso significa que, além do benefício fiscal, você pode receber retornos se o filme ou série tiver sucesso comercial.",
      },
      {
        q: "Quem pode investir em projetos audiovisuais?",
        a: "Qualquer pessoa física que declara IR no modelo completo ou pessoa jurídica tributada pelo Lucro Real pode investir em projetos audiovisuais incentivados.",
      },
    ],
  },
  {
    category: "Como Investir",
    questions: [
      {
        q: "Como faço para investir?",
        a: "É simples: escolha um projeto na nossa plataforma, selecione o valor do investimento, faça o pagamento via PIX, cartão ou boleto, e receba o recibo automaticamente por email.",
      },
      {
        q: "Quais formas de pagamento são aceitas?",
        a: "Aceitamos PIX (instantâneo), cartão de crédito (parcelado em até 12x) e boleto bancário (confirmação em até 3 dias úteis).",
      },
      {
        q: "Posso parcelar meu investimento?",
        a: "Sim! Investimentos via cartão de crédito podem ser parcelados em até 12 vezes sem juros. O recibo será emitido pelo valor total.",
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
        a: "Todos os projetos na plataforma são previamente aprovados pela ANCINE (Agência Nacional de Cinema) e seguem as legislações da Lei do Audiovisual e Lei Rouanet.",
      },
      {
        q: "Posso acompanhar o andamento do projeto que investi?",
        a: "Sim! Você terá acesso a atualizações sobre o desenvolvimento da produção, desde a pré-produção até o lançamento. Investidores também podem ser convidados para eventos exclusivos.",
      },
      {
        q: "Quais tipos de projetos posso apoiar?",
        a: "Você pode investir em: filmes de longa-metragem, curtas-metragens, séries para TV e streaming, documentários, e animações brasileiras.",
      },
      {
        q: "O dinheiro vai direto para o projeto?",
        a: "Sim. O valor investido é destinado integralmente ao projeto escolhido, seguindo as regras da Lei do Audiovisual. A cynema.ai facilita a conexão entre investidores e produtores.",
      },
    ],
  },
  {
    category: "Declaração de IR",
    questions: [
      {
        q: "Como declarar os investimentos no IR?",
        a: "Use o recibo oficial que enviamos para preencher a ficha de 'Doações Efetuadas' na sua declaração de IR. O próprio sistema da Receita Federal calculará automaticamente a dedução.",
      },
      {
        q: "Preciso guardar os recibos?",
        a: "Sim! Guarde todos os recibos por pelo menos 5 anos, pois a Receita Federal pode solicitá-los em caso de malha fina. Mantemos uma cópia digital disponível na sua conta.",
      },
      {
        q: "Posso investir no ano seguinte e ainda deduzir?",
        a: "Os investimentos devem ser feitos durante o ano-calendário (01/01 a 31/12) para serem deduzidos na declaração do ano seguinte. Exemplo: investimentos feitos em 2025 são declarados em 2026.",
      },
      {
        q: "E se eu declarar no modelo simplificado?",
        a: "Infelizmente, apenas quem declara no modelo completo pode deduzir os investimentos incentivados. No modelo simplificado, a dedução padrão de 20% já é aplicada automaticamente.",
      },
    ],
  },
  {
    category: "Riscos e Retornos",
    questions: [
      {
        q: "Qual o risco do investimento?",
        a: "O risco principal está na participação nos lucros: se o projeto não tiver sucesso comercial, você não receberá retornos financeiros. Porém, o benefício fiscal (dedução do IR) é garantido.",
      },
      {
        q: "Como funciona a participação nos lucros?",
        a: "Cada projeto define seu modelo de participação. Geralmente, investidores recebem um percentual proporcional ao valor investido sobre os lucros líquidos da exploração comercial da obra.",
      },
      {
        q: "Quando recebo os retornos?",
        a: "Os retornos começam a ser distribuídos após a estreia comercial da obra e geração de receita. O prazo varia de 12 a 36 meses após o término da produção, dependendo do projeto.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold pr-4">{question}</span>
        <ChevronDown
          className={`size-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
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
            <span className="gradient-text">Perguntas Frequentes</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre investimentos em audiovisual e dedução no IR
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold mb-6 gradient-text">
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
            Nossa equipe está pronta para ajudar você a fazer seu primeiro investimento em cinema.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="gradient-primary border-0 glow-primary">
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
