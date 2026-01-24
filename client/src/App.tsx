import { Switch, Route, useLocation, Router as WouterRouter, Redirect } from "wouter";
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
import Associations from "@/pages/associations";
import Price from "@/pages/price";
import NotFound from "@/pages/not-found";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function AppRoutes() {
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
      <Route path="/associations" component={Associations} />
      <Route path="/price" component={Price} />
      <Route component={NotFound} />
    </Switch>
  );
}

function LocalizedLayout({ lang }: { lang: string }) {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Only change if different to avoid loops/overhead
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <WouterRouter base={`/${lang}`}>
      <Sidebar />
      <div className="flex flex-col min-h-screen">
        <AppRoutes />
        <Footer />
      </div>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Switch>
          {/* Root route: Redirect to English */}
          <Route path="/">
            <Redirect to="/en" />
          </Route>

          {/* Catch-all route to handle language prefixes and redirection */}
          <Route path="/:lang/:rest*">
            {(params) => {
              const lang = params.lang;
              // Check if the first segment is a valid language code
              if (['en', 'de', 'ru'].includes(lang)) {
                return <LocalizedLayout lang={lang} />;
              }
              
              // If not a language code (e.g. /about), treat it as a path and redirect to /en/...
              // Reconstruct path: /about (lang) + /something (rest)
              // Note: wouter types might include the asterisk in the key for wildcard params
              const rest = (params as any).rest || (params as any)["rest*"];
              const restPath = rest ? `/${rest}` : '';
              const fullPath = `/${lang}${restPath}`;
              
              return <Redirect to={`/en${fullPath}`} />;
            }}
          </Route>

           {/* Handle case where it's just /:lang with no trailing slash/rest if needed, 
               though :rest* usually covers it. 
               Just in case wouter needs specific handling for single segment: */}
           <Route path="/:segment">
            {(params) => {
               const segment = params.segment;
               if (['en', 'de', 'ru'].includes(segment)) {
                 return <LocalizedLayout lang={segment} />;
               }
               return <Redirect to={`/en/${segment}`} />;
            }}
           </Route>
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
