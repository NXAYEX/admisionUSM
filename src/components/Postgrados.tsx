import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Microscope, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Brain,
  Building2,
  BookOpen,
  ArrowRight
} from "lucide-react";

const postgrados = [
  {
    icon: GraduationCap,
    name: "MBA - Administración",
    tipo: "Maestría",
    duracion: "2 años",
    modalidad: "Presencial/Ejecutiva",
    color: "from-blue-500 to-blue-600",
    descripcion: "Liderazgo empresarial y gestión estratégica"
  },
  {
    icon: Microscope,
    name: "Maestría en Investigación Médica",
    tipo: "Maestría",
    duracion: "2 años",
    modalidad: "Presencial",
    color: "from-red-500 to-red-600",
    descripcion: "Investigación avanzada en ciencias de la salud"
  },
  {
    icon: TrendingUp,
    name: "Maestría en Finanzas",
    tipo: "Maestría",
    duracion: "1.5 años",
    modalidad: "Virtual/Presencial",
    color: "from-yellow-500 to-yellow-600",
    descripcion: "Análisis financiero y mercados de capital"
  },
  {
    icon: Brain,
    name: "Doctorado en Psicología",
    tipo: "Doctorado",
    duracion: "4 años",
    modalidad: "Presencial",
    color: "from-blue-500 to-blue-600",
    descripcion: "Investigación en neuropsicología y comportamiento"
  },
  {
    icon: Building2,
    name: "Especialización en Arquitectura Sostenible",
    tipo: "Especialización",
    duracion: "1 año",
    modalidad: "Presencial",
    color: "from-red-500 to-red-600",
    descripcion: "Diseño arquitectónico eco-amigable"
  },
  {
    icon: Users,
    name: "Maestría en Recursos Humanos",
    tipo: "Maestría",
    duracion: "2 años",
    modalidad: "Virtual",
    color: "from-yellow-500 to-yellow-600",
    descripcion: "Gestión del talento humano organizacional"
  }
];

const Postgrados = () => {
  return (
    <section id="postgrados" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Maestrías y
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Postgrados de Excelencia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continúa tu formación académica con nuestros programas de postgrado diseñados 
            para profesionales que buscan especializarse y liderar en sus áreas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {postgrados.map((programa, index) => {
            const Icon = programa.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${programa.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 bg-muted text-muted-foreground rounded-full">
                      {programa.tipo}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {programa.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {programa.descripcion}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p>• Duración: {programa.duracion}</p>
                    <p>• Modalidad: {programa.modalidad}</p>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-primary hover:text-primary-foreground hover:bg-primary group-hover:bg-gradient-hero group-hover:text-primary-foreground"
                  >
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mr-4">
            Ver Todos los Programas
            <BookOpen className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow">
            Solicitar Información
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Postgrados;