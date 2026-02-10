
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Truck, AlertCircle } from "lucide-react";

const Dashboard = () => {
  // Placeholder data - will be replaced by real data fetching later
  const stats = [
    { title: "Proyectos Activos", value: "3", icon: Briefcase, description: "2 en ejecución, 1 en planificación" },
    { title: "Empleados", value: "12", icon: Users, description: "10 activos, 2 de licencia" },
    { title: "Maquinaria", value: "8", icon: Truck, description: "6 disponibles, 2 en mantenimiento" },
    { title: "Alertas", value: "1", icon: AlertCircle, description: "Mantenimiento pendiente en Camión #3" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Resumen de Actividad</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] w-full flex items-center justify-center text-muted-foreground">
               Gráfico de actividad (Próximamente)
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Asignaciones Recientes</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="space-y-4">
                <div className="text-sm">
                   <p className="font-medium">Juan Pérez asignado a Obra Centro</p>
                   <p className="text-xs text-muted-foreground">Hace 2 horas</p>
                </div>
                <div className="text-sm">
                   <p className="font-medium">Excavadora CAT asignada a Ruta 14</p>
                   <p className="text-xs text-muted-foreground">Hace 5 horas</p>
                </div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
