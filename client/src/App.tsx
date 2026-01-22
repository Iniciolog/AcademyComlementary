import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import Home from "@/pages/home";
import Department from "@/pages/department";
import About from "@/pages/about";
import Contacts from "@/pages/contacts";
import Privacy from "@/pages/privacy";
import Cookies from "@/pages/cookies";
import Registration from "@/pages/registration";
import Price from "@/pages/price";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/analytics" component={Department} />
      <Route path="/marketing" component={Department} />
      <Route path="/accreditation" component={Department} />
      <Route path="/ratings" component={Department} />
      <Route path="/awards" component={Department} />
      <Route path="/education" component={Department} />
      <Route path="/research" component={Department} />
      <Route path="/diagnostics" component={Department} />
      <Route path="/publications" component={Department} />
      <Route path="/council" component={Department} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/cookies" component={Cookies} />
      <Route path="/registration" component={Registration} />
      <Route path="/price" component={Price} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sidebar />
        <div className="flex flex-col min-h-screen">
          <Router />
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
