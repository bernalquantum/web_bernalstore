import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cpu, ShieldCheck, BarChart3, FlaskConical } from "lucide-react";

const services = [
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: "Optimización Cuántica",
    description: "Resolvemos problemas complejos de optimización en logística, finanzas y más, utilizando algoritmos cuánticos de vanguardia.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Criptografía Post-Cuántica",
    description: "Asegura tus datos para el futuro con nuestras soluciones de encriptación resistentes a los ataques de computadoras cuánticas.",
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: "Simulación Molecular",
    description: "Aceleramos el descubrimiento de fármacos y el desarrollo de nuevos materiales mediante simulaciones cuánticas de alta precisión.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Machine Learning Cuántico",
    description: "Mejoramos los modelos de inteligencia artificial, desbloqueando nuevas capacidades en el análisis de datos y el reconocimiento de patrones.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Nuestros Servicios de Consultoría Cuántica</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ofrecemos soluciones cuánticas a medida para impulsar la innovación en tu industria.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="text-center flex flex-col items-center p-6 bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{service.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 flex-grow">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
