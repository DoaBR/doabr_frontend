"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Film, HeartPulse, Trophy, Recycle, Palette, Search } from "lucide-react";

const categories = [
  { id: "todos", name: "Todos", icon: null },
  { id: "audiovisual", name: "Audiovisual", icon: Film },
  { id: "saude", name: "Saúde", icon: HeartPulse },
  { id: "esporte", name: "Esporte", icon: Trophy },
  { id: "reciclagem", name: "Reciclagem", icon: Recycle },
  { id: "cultura", name: "Cultura", icon: Palette },
];

const projects = [
  {
    id: 1,
    title: "Documentário sobre Amazônia",
    category: "audiovisual",
    description: "Produção de documentário sobre a preservação da floresta amazônica e suas comunidades.",
    needed: 500000,
    raised: 380000,
    proponent: "Produtora Cultural Ltda",
    law: "Lei Rouanet",
  },
  {
    id: 2,
    title: "Instituto de Oncologia Infantil",
    category: "saude",
    description: "Ampliação do centro de tratamento oncológico para crianças e adolescentes.",
    needed: 1200000,
    raised: 850000,
    proponent: "Instituto Viver Bem",
    law: "PRONON",
  },
  {
    id: 3,
    title: "Escolinha de Futebol Comunitária",
    category: "esporte",
    description: "Projeto esportivo para jovens em situação de vulnerabilidade social.",
    needed: 250000,
    raised: 180000,
    proponent: "Associação Esportiva Unidos",
    law: "Lei de Incentivo ao Esporte",
  },
  {
    id: 4,
    title: "Reciclagem Sustentável SP",
    category: "reciclagem",
    description: "Modernização de cooperativa de reciclagem com equipamentos e capacitação.",
    needed: 350000,
    raised: 120000,
    proponent: "Cooperativa Recicla Mais",
    law: "Lei de Reciclagem",
  },
  {
    id: 5,
    title: "Festival de Teatro Popular",
    category: "cultura",
    description: "Realização de festival itinerante de teatro em comunidades periféricas.",
    needed: 180000,
    raised: 165000,
    proponent: "Coletivo Cultural Arte Viva",
    law: "Lei Rouanet",
  },
  {
    id: 6,
    title: "Centro de Reabilitação PcD",
    category: "saude",
    description: "Construção de centro de reabilitação para pessoas com deficiência.",
    needed: 800000,
    raised: 520000,
    proponent: "Fundação Incluir",
    law: "PRONAS/PCD",
  },
  {
    id: 7,
    title: "Série Web sobre Cultura Brasileira",
    category: "audiovisual",
    description: "Produção de série documental sobre manifestações culturais brasileiras.",
    needed: 420000,
    raised: 95000,
    proponent: "Produtora Raízes Brasil",
    law: "Lei do Audiovisual",
  },
  {
    id: 8,
    title: "Paraolimpíadas Regionais",
    category: "esporte",
    description: "Organização de competição paraolímpica regional com 15 modalidades.",
    needed: 600000,
    raised: 410000,
    proponent: "Comitê Paralímpico Regional",
    law: "Lei de Incentivo ao Esporte",
  },
];

export default function ProjetosPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "todos" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const calculateProgress = (raised: number, needed: number) => {
    return Math.min((raised / needed) * 100, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="container max-w-7xl px-4 py-12 md:py-20">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Projetos Incentivados
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha um projeto aprovado pelos órgãos competentes e faça sua doação dedutível do IR
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar projetos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background hover:border-primary"
                }`}
              >
                {Icon && <Icon className="size-4" />}
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const progress = calculateProgress(project.raised, project.needed);
            return (
              <div
                key={project.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-all group"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {categories.find((c) => c.id === project.category)?.icon && (
                    <div className="p-4 rounded-full bg-background/80">
                      {(() => {
                        const Icon = categories.find((c) => c.id === project.category)?.icon;
                        return Icon ? <Icon className="size-12 text-primary" /> : null;
                      })()}
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.proponent}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  {/* Law Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {project.law}
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">
                        {formatCurrency(project.raised)}
                      </span>
                      <span className="text-muted-foreground">
                        de {formatCurrency(project.needed)}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground text-right">
                      {progress.toFixed(0)}% arrecadado
                    </p>
                  </div>

                  {/* Action Button */}
                  <Button asChild className="w-full">
                    <Link href={`/projetos/${project.id}`}>
                      Doar Agora
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Nenhum projeto encontrado com os filtros selecionados
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
