import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  TrendingUp, 
  Heart, 
  Users, 
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const becas = [
  {
    icon: Award,
    nombre: "Beca Excelencia Académica",
    descripcion: "Para estudiantes con promedio superior a 17 en secundaria",
    cobertura: "100% pensión + matrícula",
    requisitos: ["Promedio 17+", "Constancia de estudios", "Evaluación socioeconómica"],
    vacantes: 50,
    color: "from-yellow-500 to-yellow-600",
    destacado: true
  },
  {
    icon: TrendingUp,
    nombre: "Beca Talento Empresarial",
    descripcion: "Para estudiantes de carreras de negocios y administración",
    cobertura: "75% pensión durante toda la carrera",
    requisitos: ["Examen de admisión", "Test vocacional", "Proyecto empresarial"],
    vacantes: 30,
    color: "from-blue-500 to-blue-600",
    destacado: false
  },
  {
    icon: Heart,
    nombre: "Beca Responsabilidad Social",
    descripcion: "Para estudiantes con alto sentido de servicio comunitario",
    cobertura: "50% pensión + programas sociales",
    requisitos: ["Experiencia voluntaria", "Carta de motivación", "Referencias"],
    vacantes: 40,
    color: "from-red-500 to-red-600",
    destacado: false
  },
  {
    icon: Users,
    nombre: "Beca Deportiva",
    descripcion: "Para deportistas destacados a nivel regional o nacional",
    cobertura: "100% pensión + apoyo deportivo",
    requisitos: ["Logros deportivos", "Certificados", "Evaluación física"],
    vacantes: 20,
    color: "from-green-500 to-green-600",
    destacado: false
  }
];

const beneficios = [
  {
    icon: DollarSign,
    titulo: "Financiamiento Educativo",
    descripcion: "Planes de pago flexibles y créditos educativos con tasas preferenciales"
  },
  {
    icon: Star,
    titulo: "Programas de Intercambio",
    descripcion: "Oportunidades de estudiar en universidades partner internacionales"
  },
  {
    icon: CheckCircle,
    titulo: "Seguro Estudiantil",
    descripcion: "Cobertura médica completa durante toda tu formación universitaria"
  }
];

const Becas = () => {
  return (
    <section id="becas" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Becas y
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Beneficios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tu talento merece reconocimiento. Descubre las oportunidades de financiamiento 
            y apoyo académico que tenemos para ti.
          </p>
        </div>

        {/* Becas principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {becas.map((beca, index) => {
            const Icon = beca.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border relative overflow-hidden ${
                  beca.destacado ? 'ring-2 ring-accent ring-offset-2' : ''
                }`}
              >
                {beca.destacado && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-sm font-medium">
                    Más Popular
                  </div>
                )}
                
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${beca.color}`}></div>
                
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${beca.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {beca.vacantes} vacantes
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {beca.nombre}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {beca.descripcion}
                  </p>

                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Star className="h-4 w-4 text-accent mr-2" />
                      Cobertura:
                    </h4>
                    <p className="text-primary font-medium text-lg">{beca.cobertura}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Requisitos:
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {beca.requisitos.map((req, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${beca.color} hover:opacity-90 text-white shadow-glow`}
                    variant="default"
                  >
                    Postular a esta Beca
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Beneficios adicionales */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Beneficios Adicionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{beneficio.titulo}</h4>
                    <p className="text-sm text-muted-foreground">{beneficio.descripcion}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-hero text-primary-foreground border-none">
            <CardContent className="p-8">
              <Award className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">
                ¿Necesitas más información sobre becas?
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-lg leading-relaxed">
                Nuestro equipo de asistencia financiera está aquí para ayudarte a encontrar 
                la mejor opción de financiamiento para tu educación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Asesoría Financiera
                </Button>
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent-light"
                >
                  Simular Financiamiento
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Becas;