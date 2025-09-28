import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Trophy, 
  Users, 
  Star,
  CheckCircle,
  Clock,
  Target
} from "lucide-react";

const viasAdmision = [
  {
    icon: GraduationCap,
    nombre: "Examen de Admisión",
    descripcion: "Proceso de admisión tradicional con examen presencial",
    requisitos: ["Certificado de estudios", "DNI vigente", "Fotografías"],
    vacantes: "2,500",
    fecha: "Marzo & Agosto",
    color: "from-blue-500 to-blue-600",
    popularidad: "Más popular"
  },
  {
    icon: Trophy,
    nombre: "Primeros Puestos",
    descripcion: "Para estudiantes que ocuparon los primeros puestos en secundaria",
    requisitos: ["Certificado de 1° o 2° puesto", "Promedio mínimo 16", "Documentos validados"],
    vacantes: "300",
    fecha: "Febrero",
    color: "from-yellow-500 to-yellow-600",
    popularidad: "Excelencia"
  },
  {
    icon: Users,
    nombre: "Centro Pre-Universitario",
    descripcion: "Ingreso directo tras completar ciclo pre-universitario",
    requisitos: ["Aprobar ciclo completo", "Promedio mínimo 14", "Asistencia 85%"],
    vacantes: "800",
    fecha: "Todo el año",
    color: "from-red-500 to-red-600",
    popularidad: "Preparación"
  },
  {
    icon: Star,
    nombre: "Traslado Externo",
    descripcion: "Para estudiantes de otras universidades",
    requisitos: ["Record académico", "Sílabos de cursos", "Carta de no adeudo"],
    vacantes: "200",
    fecha: "Enero & Julio",
    color: "from-purple-500 to-purple-600",
    popularidad: "Especializado"
  }
];

const Admision = () => {
  return (
    <section id="admision" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vías de
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Admisión
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Múltiples caminos para ingresar a nuestra universidad. 
            Elige la modalidad que mejor se adapte a tu perfil académico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {viasAdmision.map((via, index) => {
            const Icon = via.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${via.color}`}></div>
                <CardContent className="p-8 pl-12">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${via.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                      {via.popularidad}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {via.nombre}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {via.descripcion}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Requisitos:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                        {via.requisitos.map((req, i) => (
                          <li key={i}>• {req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium">{via.vacantes} vacantes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">{via.fecha}</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${via.color} hover:opacity-90 text-white shadow-glow`}
                    variant="default"
                  >
                    Postular por esta vía
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-hero text-primary-foreground border-none">
            <CardContent className="p-8">
              <GraduationCap className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">
                ¿Necesitas ayuda para elegir?
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-lg leading-relaxed">
                Nuestros asesores académicos están listos para orientarte en el proceso de admisión.
                Agenda una cita personalizada y resuelve todas tus dudas.
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Agendar Asesoría Gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Admision;