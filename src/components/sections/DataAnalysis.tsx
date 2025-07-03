"use client";

import { useState } from "react";
import { summarizeQuantumInsights } from "@/ai/flows/summarize-quantum-insights";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DUMMY_DATA_ANALYSIS_DETAILS = `
Nuestras capacidades de análisis de datos cuánticos incluyen:
- Algoritmos de optimización cuántica (QAOA, VQE) para problemas complejos de logística y finanzas.
- Simulación de materiales y moléculas para el descubrimiento de fármacos y la ciencia de materiales.
- Machine learning cuántico para mejorar los modelos de IA en clasificación y clustering.
Resultados pasados:
- Se redujo el riesgo de la cartera financiera en un 15% para un cliente de Nivel 1 mediante la optimización cuántica.
- Se aceleró el descubrimiento de un nuevo catalizador en un 40% mediante simulaciones moleculares.
- Se logró una precisión del 98% en un problema de detección de fraude utilizando un clasificador de soporte vectorial cuántico.
`;

export function DataAnalysis() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setSummary(null);
    try {
      const response = await summarizeQuantumInsights({
        quantumDataAnalysisDetails: DUMMY_DATA_ANALYSIS_DETAILS,
      });
      setSummary(response.summary);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo generar el resumen. Por favor, inténtelo de nuevo.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Insights del Análisis de Datos Cuánticos</CardTitle>
        <CardDescription>
          Explora nuestras capacidades de análisis de datos cuánticos con un resumen generado por IA.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button onClick={handleGenerateSummary} disabled={isLoading} className="w-full sm:w-auto">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generar Resumen de Insights
          </Button>
          {isLoading && !summary && (
             <div className="mt-4 space-y-2 rounded-lg border bg-background/50 p-4">
               <div className="space-y-2">
                 <div className="h-4 bg-muted rounded w-1/3 animate-pulse"></div>
                 <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                 <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                 <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
               </div>
             </div>
           )}
          {summary && (
            <div className="mt-4 space-y-2 rounded-lg border bg-background/50 p-4">
              <h3 className="font-semibold text-lg">Resumen de Capacidades:</h3>
              <p className="text-muted-foreground">{summary}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
