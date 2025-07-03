"use client";

import { useState } from "react";
import { generateSecureKey } from "@/ai/flows/generate-secure-key";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function QuantumEncryption() {
  const [description, setDescription] = useState("");
  const [result, setResult] = useState<{ secureKey: string; explanation: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) return;
    setIsLoading(true);
    setResult(null);
    try {
      const response = await generateSecureKey({ description });
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo generar la clave segura. Por favor, inténtelo de nuevo.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleCopy = () => {
    if (result?.secureKey) {
      navigator.clipboard.writeText(result.secureKey);
      setCopied(true);
      toast({ title: "Copiado", description: "Clave segura copiada al portapapeles."});
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Herramienta de Encriptación Cuántica</CardTitle>
        <CardDescription>
          Genera claves seguras utilizando IA cuántica para una encriptación mejorada. Describe tus requisitos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Ej: 'Una clave de 256 bits para cifrado AES de un servidor de base de datos.'"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !description} className="w-full sm:w-auto">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generar Clave Segura
          </Button>
        </form>
        {result && (
          <div className="mt-6 space-y-4 rounded-lg border bg-background/50 p-4">
            <div>
              <h3 className="font-semibold text-lg">Clave Segura Generada:</h3>
              <div className="flex items-center gap-2 mt-2 p-3 bg-background rounded-md">
                <pre className="text-primary font-mono text-sm flex-grow overflow-x-auto">
                  <code>{result.secureKey}</code>
                </pre>
                <Button variant="ghost" size="icon" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Explicación:</h3>
              <p className="text-muted-foreground mt-2">{result.explanation}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
