import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-3.5rem)] flex items-center justify-center text-center overflow-hidden animated-gradient">
      <div className="container relative z-10 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-primary font-headline">
          Desbloquea el Futuro con la Computación Cuántica
        </h1>
        <p className="max-w-3xl text-lg text-foreground/80 md:text-xl">
          En Quantum Leap Solutions, aprovechamos el poder de la computación cuántica y la IA para resolver los problemas más complejos del mundo.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg" className="shadow-lg shadow-primary/20">
            <Link href="#services">
              Explora Nuestros Servicios
              <ChevronDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
