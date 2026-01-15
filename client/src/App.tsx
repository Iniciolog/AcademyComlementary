import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sidebar } from "@/components/Sidebar";
import Home from "@/pages/home";
import Department from "@/pages/department";
import NotFound from "@/pages/not-found";

function AppRouter() {
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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const basePath = import.meta.env.BASE_URL || "/";
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router base={basePath}>
        <TooltipProvider>
          <Toaster />
          <Sidebar />
          <AppRouter />
        </TooltipProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
