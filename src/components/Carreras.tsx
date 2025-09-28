import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Computer, 
  Stethoscope, 
  Scale, 
  Calculator, 
  Briefcase, 
  Palette,
  Building,
  Users,
  ArrowRight
} from "lucide-react";

const carreras = [
  {
    icon: Computer,
    name: "Ingeniería en Sistemas",
    area: "Tecnología",
    duracion: "5 años",
    modalidad: "Presencial/Virtual",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Stethoscope,
    name: "Medicina",
    area: "Ciencias de la Salud",
    duracion: "7 años",
    modalidad: "Presencial",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Scale,
    name: "Derecho",
    area: "Ciencias Sociales",
    duracion: "5 años",
    modalidad: "Presencial/Virtual",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Calculator,
    name: "Ingeniería Industrial",
    area: "Ingeniería",
    duracion: "5 años",
    modalidad: "Presencial",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Briefcase,
    name: "Administración",
    area: "Negocios",
    duracion: "4 años",
    modalidad: "Presencial/Virtual",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Palette,
    name: "Diseño Gráfico",
    area: "Arte y Diseño",
    duracion: "4 años",
    modalidad: "Presencial",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Building,
    name: "Arquitectura",
    area: "Arquitectura",
    duracion: "5 años",
    modalidad: "Presencial",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    name: "Psicología",
    area: "Ciencias Sociales",
    duracion: "5 años",
    modalidad: "Presencial/Virtual",
    color: "from-red-500 to-red-600"
  }
];

const Carreras = () => {
  return (
    <section id="carreras" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Carreras que
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Transforman Vidas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre nuestra amplia oferta académica diseñada para prepararte para el futuro.
            Cada programa está diseñado con los más altos estándares de calidad educativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {carreras.map((carrera, index) => {
            const Icon = carrera.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${carrera.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {carrera.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{carrera.area}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Duración: {carrera.duracion}</p>
                    <p>• Modalidad: {carrera.modalidad}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-4 text-primary hover:text-primary-foreground hover:bg-primary group-hover:bg-gradient-hero group-hover:text-primary-foreground"
                  >
                    Ver más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Todas las Carreras
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Carreras;