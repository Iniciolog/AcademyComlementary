import { Link } from "wouter";
import { ArrowLeft, FileText, CheckCircle } from "lucide-react";

export default function Registration() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-wiki-border bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-6 pl-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Main Page
          </Link>
          <h1 className="text-2xl md:text-3xl font-serif text-foreground">
            Corporate Registration
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 pl-16">
        <div className="p-6 bg-slate-50 border border-wiki-border rounded-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-lg font-serif font-semibold">
              Electronic Articles of Incorporation
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Document Number</p>
              <p className="font-mono bg-white border border-slate-200 px-2 py-1 rounded inline-block">
                P25000001859
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Status</p>
              <div className="flex items-center gap-2 text-green-700 font-medium">
                <CheckCircle className="w-4 h-4" />
                Active / Good Standing
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none border-t border-wiki-border pt-8">
          <h3 className="text-xl font-serif mb-6">Official Corporate Details</h3>
          
          <div className="space-y-8">
            <section>
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">Article I: Corporate Name</h4>
              <p className="text-lg font-serif">AMERICAN ACADEMY OF COMPLEMENTARY MEDICINE INC</p>
            </section>

            <section>
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">Article II: Principal Office</h4>
              <p>7901 4TH ST N, STE 300<br />ST PETERSBURG, FL. 33702<br />United States</p>
            </section>

            <section>
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">Article III: Purpose</h4>
              <p>The purpose for which this corporation is organized is: ANY AND ALL LAWFUL BUSINESS.</p>
            </section>

            <section>
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">Article IV: Authorized Shares</h4>
              <p>The number of shares the corporation is authorized to issue is: 10,000,000</p>
            </section>

            <section>
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">Article V: Registered Agent</h4>
              <p>REGISTERED AGENTS INC.<br />7901 4TH ST N, STE 300<br />ST PETERSBURG, FL. 33702</p>
              <p className="text-sm text-muted-foreground mt-2 italic">
                "I certify that I am familiar with and accept the responsibilities of registered agent."
              </p>
            </section>
            
             <section className="pt-4 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">Filing Information</h4>
              <p className="text-sm">
                <span className="font-semibold">Filer:</span> kcostello<br/>
                <span className="font-semibold">Jurisdiction:</span> Florida Profit Corporation
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
