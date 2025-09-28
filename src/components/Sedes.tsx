import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Users, Building2 } from "lucide-react";

const sedes = [
  {
    nombre: "Sede Central - Lima",
    direccion: "Av. Universitaria 1801, San Miguel",
    telefono: "+51 1 626-2000",
    email: "admisiones.lima@universidad.edu.pe",
    estudiantes: "15,000+",
    facultades: 12,
    imagen: "🏛️"
  },
  {
    nombre: "Sede Norte - Trujillo",
    direccion: "Av. Larco 1420, Trujillo",
    telefono: "+51 44 244-000",
    email: "admisiones.trujillo@universidad.edu.pe",
    estudiantes: "8,500+",
    facultades: 8,
    imagen: "🏢"
  },
  {
    nombre: "Sede Sur - Arequipa",
    direccion: "Av. Ejército 750, Arequipa",
    telefono: "+51 54 234-000",
    email: "admisiones.arequipa@universidad.edu.pe",
    estudiantes: "6,200+",
    facultades: 6,
    imagen: "🏫"
  },
  {
    nombre: "Sede Este - Cusco",
    direccion: "Av. El Sol 928, Cusco",
    telefono: "+51 84 234-000",
    email: "admisiones.cusco@universidad.edu.pe",
    estudiantes: "4,800+",
    facultades: 5,
    imagen: "🎓"
  }
];

const Sedes = () => {
  return (
    <section id="sedes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestras
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Sedes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Presencia nacional con infraestructura moderna y tecnología de vanguardia.
            Encuentra la sede más cercana a ti y comienza tu aventura universitaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sedes.map((sede, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{sede.imagen}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {sede.nombre}
                    </h3>
                    
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">{sede.direccion}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-secondary" />
                        <span className="text-sm">{sede.telefono}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-accent" />
                        <span className="text-sm">{sede.email}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{sede.estudiantes} estudiantes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building2 className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium">{sede.facultades} facultades</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mt-4 bg-gradient-hero hover:opacity-90 text-primary-foreground"
                      variant="default"
                    >
                      Más Información
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-dashed border-2 border-muted hover:border-primary transition-colors duration-300">
            <CardContent className="p-8">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                ¿No encuentras una sede cerca?
              </h3>
              <p className="text-muted-foreground mb-4">
                También ofrecemos modalidad virtual para muchas de nuestras carreras.
                Estudia desde cualquier lugar del país con la misma calidad educativa.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Conocer Modalidad Virtual
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sedes;