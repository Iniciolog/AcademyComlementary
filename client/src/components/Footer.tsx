import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-wiki-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 md:pl-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-serif text-sm font-semibold text-black mb-4">
              American Academy of Complementary Medicine
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Advancing the field through research, education, and professional standards </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">
              About
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Academy Information
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/price" className="text-muted-foreground hover:text-primary transition-colors">
                  Price
                </Link>
              </li>
              <li>
                <Link href="/associations" className="text-muted-foreground hover:text-primary transition-colors">
                  Associations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Registration Data
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="font-normal">Jurisdiction: 7901 4TH ST N, STE 300 ST PETERSBURG, FL. 33702 United States  Tel.+1(786)7899632.</li>
              <li>
                <Link href="/registration" className="text-primary hover:underline">
                  View Official Registration
                </Link>
              </li>
              <li className="pt-4">
                <a 
                  href="https://platform.aacmedinc.org/members/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap"
                >
                  Log in / Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wiki-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} American Academy of Complementary Medicine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
