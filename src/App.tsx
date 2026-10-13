import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollManager } from "@/components/layout/ScrollManager";
import { SERVICES, servicePath } from "@/data/services";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";

// Rutas compartidas entre el navegador (BrowserRouter) y el prerender (StaticRouter en entry-server.tsx).
export const AppRoutes = () => (
  <>
    <ScrollManager />
    <Routes>
      <Route path="/" element={<Index />} />
      {SERVICES.map((service) => (
        <Route
          key={service.slug}
          path={servicePath(service.slug)}
          element={<ServicePage key={service.slug} service={service} />}
        />
      ))}

      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
