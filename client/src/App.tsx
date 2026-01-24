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
          {/* Root redirect */}
          <Route path="/">
            <Redirect to="/en" />
          </Route>

          {/* Simple match for language only: /en, /ru, /de */}
          <Route path="/:lang">
            {(params) => {
              if (['en', 'de', 'ru'].includes(params.lang)) {
                return <LocalizedLayout lang={params.lang} />;
              }
              // If not a language, it might be a page without lang prefix, redirect to /en/page
              return <Redirect to={`/en/${params.lang}`} />;
            }}
          </Route>

          {/* Match for language + subpath: /en/about, /ru/analytics */}
          <Route path="/:lang/*">
            {(params) => {
               // In wouter v2, wildcard is params["*"]
               // In some versions params[0] is used.
               // Safer to inspect params to see what we get.
               // Assuming standard wouter behavior with * wildcard.
               const lang = params.lang;
               const rest = (params as any)["*"]; // Access wildcard

               if (['en', 'de', 'ru'].includes(lang)) {
                 return <LocalizedLayout lang={lang} />;
               }
               
               // If first segment isn't a language, assume it's part of the path
               const fullPath = rest ? `/${lang}/${rest}` : `/${lang}`;
               return <Redirect to={`/en${fullPath}`} />;
            }}
          </Route>
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
