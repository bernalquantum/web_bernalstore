import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { QuantumEncryption } from "@/components/sections/QuantumEncryption";
import { DataAnalysis } from "@/components/sections/DataAnalysis";
import { ContactForm } from "@/components/sections/ContactForm";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <CaseStudies />
        <section id="tools" className="py-12 lg:py-24 bg-background/70">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Herramientas Cuánticas</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Experimenta el poder de la computación cuántica con nuestras herramientas impulsadas por IA.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              <QuantumEncryption />
              <DataAnalysis />
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 lg:py-24">
          <div className="container">
            <Card className="max-w-2xl mx-auto shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Contáctanos</CardTitle>
                <CardDescription className="mt-4 text-lg text-muted-foreground">
                  ¿Tienes un desafío para nosotros? Envíanos un mensaje.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
