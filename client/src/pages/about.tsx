import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function About() {
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
            Academy Information
          </h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8 pl-16">
        <div className="wiki-infobox float-right ml-6 mb-6 w-72">
          <table className="w-full">
            <thead>
              <tr>
                <th colSpan={2} className="text-base p-2 bg-slate-100 font-serif">
                  American Academy of Complementary Medicine
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-slate-200 font-semibold text-xs">Type</td>
                <td className="p-2 border-b border-slate-200 text-xs">Professional Association & Research Institution</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-200 font-semibold text-xs">Headquarters</td>
                <td className="p-2 border-b border-slate-200 text-xs">Florida, USA</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-slate-200 font-semibold text-xs">Fields</td>
                <td className="p-2 border-b border-slate-200 text-xs">Complementary Medicine, Integrative Health, Research</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            The <strong>American Academy of Complementary Medicine (AACM)</strong> is a distinguished institution dedicated to the advancement, standardization, and scientific validation of complementary and integrative medical practices. Established to bridge traditional healing wisdom with modern scientific rigor, the Academy serves as a global hub for practitioners, researchers, and educators.
          </p>

          <h2 className="text-xl font-serif mt-8 mb-4">Mission & Vision</h2>
          <p className="mb-4">
            Our mission is to foster excellence in complementary medicine through rigorous accreditation, innovative research, and comprehensive professional development. We envision a healthcare landscape where evidence-based complementary therapies are seamlessly integrated into global health systems, providing safe, effective, and holistic care for all.
          </p>

          <h2 className="text-xl font-serif mt-8 mb-4">Core Functions</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Accreditation:</strong> establishing gold-standard criteria for practitioners and educational institutions.</li>
            <li><strong>Research:</strong> Coordinating multi-center clinical trials and systematic reviews to build the evidence base.</li>
            <li><strong>Education:</strong> Developing advanced curricula and continuing education programs for healthcare professionals.</li>
            <li><strong>Policy:</strong> Advocating for regulatory frameworks that ensure patient safety and practice rights.</li>
          </ul>

          <h2 className="text-xl font-serif mt-8 mb-4">Global Reach</h2>
          <p className="mb-4">The Academy establishes collaborative relationships with complementary medicine organizations across 47 countries, facilitating the exchange of research data, educational resources, and professional standards. </p>
          
          <p className="text-sm text-muted-foreground mt-8 italic">
            Note: Further details from the official documentation are being processed and will be updated shortly.
          </p>
        </div>
      </main>
    </div>
  );
}
