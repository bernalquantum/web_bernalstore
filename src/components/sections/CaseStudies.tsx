import Image from "next/image";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "Optimización de Carteras Financieras",
    industry: "Finanzas",
    description: "Reducción del 15% del riesgo en carteras de inversión para un banco líder, utilizando algoritmos de optimización cuántica.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "finance trading",
  },
  {
    title: "Descubrimiento Acelerado de Fármacos",
    industry: "Farmacéutica",
    description: "Identificación de una molécula candidata para un nuevo medicamento en un 40% menos de tiempo a través de simulaciones cuánticas.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "science laboratory",
  },
  {
    title: "Logística de la Cadena de Suministro",
    industry: "Logística",
    description: "Optimización de rutas de entrega para una empresa de comercio electrónico global, resultando en un ahorro de combustible del 12%.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "logistics warehouse",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-12 lg:py-24 bg-card/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Estudios de Caso Exitosos</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aplicaciones reales de nuestras soluciones cuánticas que transforman industrias.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.title} className="overflow-hidden group hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                   <Image
                    src={study.imageUrl}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    data-ai-hint={study.dataAiHint}
                  />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-2 bg-primary/20 text-primary border-primary/30">{study.industry}</Badge>
                  <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
