"use client";

import { Heart, Menu, X, Recycle } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b">
      <div className="container max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <Heart className="size-8 text-primary fill-primary" />
              <Recycle className="size-4 text-green-500 absolute -bottom-1 -right-1" />
            </div>
            <span className="text-xl font-bold">DoaBR</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/projetos"
              className="text-sm font-medium hover:text-primary transition-all"
            >
              Projetos
            </Link>
            <Link
              href="/como-funciona"
              className="text-sm font-medium hover:text-primary transition-all"
            >
              Como Funciona
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium hover:text-primary transition-all"
            >
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {session ? (
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/auth/sigin">Entrar</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/signup">Cadastrar</Link>
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/projetos"
                className="text-sm font-medium hover:text-primary transition-all"
                onClick={() => setIsOpen(false)}
              >
                Projetos
              </Link>
              <Link
                href="/como-funciona"
                className="text-sm font-medium hover:text-primary transition-all"
                onClick={() => setIsOpen(false)}
              >
                Como Funciona
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium hover:text-primary transition-all"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                {session ? (
                  <Button asChild>
                    <Link href="/dashboard">Meu Painel</Link>
                  </Button>
                ) : (
                  <>
                    <Button variant="ghost" asChild>
                      <Link href="/auth/signin">Entrar</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/auth/signup">Cadastrar</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
