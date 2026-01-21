"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Film, Clapperboard, Tv, Video, Search } from "lucide-react";

const categories = [
  { id: "todos", name: "Todos", icon: null },
  { id: "filmes", name: "Filmes", icon: Film },
  { id: "curtas", name: "Curtas", icon: Clapperboard },
  { id: "series", name: "Séries", icon: Tv },
  { id: "documentarios", name: "Documentários", icon: Video },
];

const projects = [
  {
    id: 1,
    title: "A Última Fronteira",
    category: "filmes",
    description: "Drama sobre a vida de imigrantes brasileiros na fronteira norte do país. Uma história emocionante de superação e identidade.",
    needed: 2500000,
    raised: 1850000,
    proponent: "Bambu Filmes",
    law: "Lei do Audiovisual",
    returns: "Participação de 2% nos lucros",
  },
  {
    id: 2,
    title: "Amazônia Viva",
    category: "documentarios",
    description: "Documentário sobre a preservação da floresta amazônica e suas comunidades ribeirinhas tradicionais.",
    needed: 800000,
    raised: 620000,
    proponent: "Produtora Verde Ltda",
    law: "Lei Rouanet",
    returns: "Créditos e experiência de set",
  },
  {
    id: 3,
    title: "Conexão",
    category: "curtas",
    description: "Curta-metragem experimental sobre a solidão urbana e as conexões humanas na era digital.",
    needed: 150000,
    raised: 95000,
    proponent: "Coletivo Audiovisual SP",
    law: "Lei do Audiovisual",
    returns: "Participação de 5% nos lucros",
  },
  {
    id: 4,
    title: "Crimes do Sertão",
    category: "series",
    description: "Série de suspense policial ambientada no sertão nordestino. 8 episódios para streaming.",
    needed: 4200000,
    raised: 2800000,
    proponent: "Nordeste Pictures",
    law: "Lei do Audiovisual",
    returns: "Participação de 1.5% nos lucros",
  },
  {
    id: 5,
    title: "Vozes da Periferia",
    category: "documentarios",
    description: "Série documental sobre artistas e movimentos culturais das periferias brasileiras.",
    needed: 600000,
    raised: 450000,
    proponent: "Favela Filmes",
    law: "Lei Rouanet",
    returns: "Créditos e pré-estreia exclusiva",
  },
  {
    id: 6,
    title: "O Encontro",
    category: "filmes",
    description: "Comédia romântica sobre dois desconhecidos que se encontram em uma viagem de trem pelo Brasil.",
    needed: 1800000,
    raised: 720000,
    proponent: "Alegria Produções",
    law: "Lei do Audiovisual",
    returns: "Participação de 2.5% nos lucros",
  },
  {
    id: 7,
    title: "Memórias de Pedra",
    category: "curtas",
    description: "Curta de animação stop-motion sobre a história de uma cidade mineira e suas tradições.",
    needed: 280000,
    raised: 195000,
    proponent: "Anima Brasil",
    law: "Lei Rouanet",
    returns: "Participação de 3% nos lucros",
  },
  {
    id: 8,
    title: "Startup Brasil",
    category: "series",
    description: "Série dramática sobre o ecossistema de startups brasileiro. 6 episódios para TV.",
    needed: 3500000,
    raised: 2100000,
    proponent: "TechMedia Produções",
    law: "Lei do Audiovisual",
    returns: "Participação de 1% nos lucros",
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
            <span className="gradient-text">Projetos Audiovisuais</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invista em produções brasileiras aprovadas pela ANCINE e deduza do seu Imposto de Renda
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
              className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-all"
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
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${isActive
                    ? "gradient-primary text-primary-foreground border-transparent"
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
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-all group hover:border-primary"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  {categories.find((c) => c.id === project.category)?.icon && (
                    <div className="p-4 rounded-full bg-background/80 backdrop-blur-sm">
                      {(() => {
                        const Icon = categories.find((c) => c.id === project.category)?.icon;
                        return Icon ? <Icon className="size-12 text-primary" /> : null;
                      })()}
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {project.returns.split(" ")[0]} {project.returns.split(" ")[1]}
                  </div>
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
                  <div className="flex gap-2">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {project.law}
                    </div>
                  </div>

                  {/* Returns */}
                  <p className="text-sm text-secondary font-medium">
                    💰 {project.returns}
                  </p>

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
                        className="h-full gradient-primary transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground text-right">
                      {progress.toFixed(0)}% captado
                    </p>
                  </div>

                  {/* Action Button */}
                  <Button asChild className="w-full gradient-primary border-0">
                    <Link href={`/projetos/${project.id}`}>
                      Investir Agora
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
