import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  AlertCircle,
  CheckCircle2,
  Timer,
  ArrowRight
} from "lucide-react";

const cronograma = [
  {
    fecha: "15 Enero - 15 Febrero",
    evento: "Inscripciones Abiertas",
    descripcion: "Proceso de inscripción para todas las modalidades de admisión",
    estado: "activo",
    modalidades: ["Examen Regular", "Primeros Puestos", "Traslado Externo"],
    icono: Calendar,
    color: "bg-primary"
  },
  {
    fecha: "20 Febrero",
    evento: "Examen de Admisión - Primera Fecha",
    descripcion: "Primera convocatoria del examen de admisión presencial",
    estado: "proximo",
    modalidades: ["Examen Regular"],
    icono: Clock,
    color: "bg-secondary"
  },
  {
    fecha: "25 Febrero",
    evento: "Publicación de Resultados",
    descripcion: "Resultados del primer examen disponibles en línea",
    estado: "proximo",
    modalidades: ["Examen Regular"],
    icono: CheckCircle2,
    color: "bg-accent"
  },
  {
    fecha: "1 - 15 Marzo",
    evento: "Matrícula - Primera Convocatoria",
    descripcion: "Proceso de matrícula para ingresantes de la primera fecha",
    estado: "proximo",
    modalidades: ["Todas las modalidades"],
    icono: CheckCircle2,
    color: "bg-primary"
  },
  {
    fecha: "15 Julio - 15 Agosto",
    evento: "Inscripciones Segunda Convocatoria",
    descripcion: "Segunda oportunidad de inscripción para el año académico",
    estado: "futuro",
    modalidades: ["Examen Regular", "Centro Pre"],
    icono: Calendar,
    color: "bg-secondary"
  },
  {
    fecha: "20 Agosto",
    evento: "Examen de Admisión - Segunda Fecha",
    descripcion: "Segunda convocatoria del examen de admisión",
    estado: "futuro",
    modalidades: ["Examen Regular"],
    icono: Clock,
    color: "bg-secondary"
  }
];

const getEstadoBadge = (estado: string) => {
  switch (estado) {
    case 'activo':
      return <Badge className="bg-primary text-primary-foreground">En curso</Badge>;
    case 'proximo':
      return <Badge className="bg-secondary text-secondary-foreground">Próximamente</Badge>;
    case 'futuro':
      return <Badge variant="outline" className="border-muted-foreground text-muted-foreground">Futuro</Badge>;
    default:
      return null;
  }
};

const Fechas = () => {
  return (
    <section id="fechas" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fechas
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Importantes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantente al día con nuestro cronograma de admisión. 
            No pierdas ninguna fecha importante y planifica tu postulación.
          </p>
        </div>

        {/* Alerta de fecha activa */}
        <Card className="max-w-4xl mx-auto mb-12 border-primary bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  ¡Inscripciones Abiertas Ahora!
                </h3>
                <p className="text-muted-foreground">
                  Las inscripciones para el proceso de admisión están activas hasta el 15 de febrero.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary-light text-primary-foreground shadow-glow">
                Inscribirse Ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {cronograma.map((item, index) => {
                const Icon = item.icono;
                return (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center relative z-10 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 hover:shadow-card transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-semibold text-foreground">
                                {item.evento}
                              </h3>
                              {getEstadoBadge(item.estado)}
                            </div>
                            <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                              <Timer className="h-4 w-4" />
                              <span className="font-medium">{item.fecha}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.descripcion}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.modalidades.map((modalidad, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {modalidad}
                            </Badge>
                          ))}
                        </div>
                        
                        {item.estado === 'activo' && (
                          <Button className="mt-4 bg-gradient-hero hover:opacity-90 text-primary-foreground">
                            Acceder
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-dashed border-2 border-accent">
            <CardContent className="p-8">
              <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                ¿Quieres recordatorios personalizados?
              </h3>
              <p className="text-muted-foreground mb-4">
                Regístrate para recibir notificaciones sobre fechas importantes y no perderte ningún paso del proceso.
              </p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Configurar Recordatorios
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Fechas;