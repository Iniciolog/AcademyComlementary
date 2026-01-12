import { Link } from "wouter";
import {
  BarChart3,
  Search,
  Building2,
  Award,
  GraduationCap,
  FlaskConical,
  Stethoscope,
  FileText,
  Users,
  TrendingUp,
  Globe,
  CheckCircle,
} from "lucide-react";

const departments = [
  {
    title: "Industry Analytics Department",
    href: "/analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    description:
      "Comprehensive analysis of the complementary medicine industry, including market trends, growth patterns, and sector developments across regional and global markets.",
  },
  {
    title: "Marketing & Market Research",
    href: "/marketing",
    icon: <Search className="w-6 h-6" />,
    description:
      "In-depth research on services and specialists within complementary medicine, consumer behavior analysis, and market positioning strategies.",
  },
  {
    title: "Expertise & Accreditation",
    href: "/accreditation",
    icon: <Building2 className="w-6 h-6" />,
    description:
      "Monitoring and collection of information on education, professional qualifications, verified reviews, confirmed healing outcomes, and statistical analysis of consultations and diagnoses.",
  },
  {
    title: "Rating Monitoring Department",
    href: "/ratings",
    icon: <TrendingUp className="w-6 h-6" />,
    description:
      "Continuous monitoring and updating of current ratings for specialists, services, organizations, and methodologies in complementary medicine.",
  },
  {
    title: "Awards & Honors",
    href: "/awards",
    icon: <Award className="w-6 h-6" />,
    description:
      "Established awards and recognition programs for distinguished specialists, innovative methods, and exemplary schools in the field.",
  },
  {
    title: "Educational Programs",
    href: "/education",
    icon: <GraduationCap className="w-6 h-6" />,
    description:
      "Accredited educational curricula, professional development courses, and certification programs for practitioners at all levels.",
  },
  {
    title: "Scientific Research",
    href: "/research",
    icon: <FlaskConical className="w-6 h-6" />,
    description:
      "Academic studies, clinical trials, and evidence-based research initiatives advancing the scientific foundation of complementary medicine.",
  },
  {
    title: "Diagnostic Methods Department",
    href: "/diagnostics",
    icon: <Stethoscope className="w-6 h-6" />,
    description:
      "Research and standardization of complementary diagnostic approaches, including traditional assessment techniques and innovative methodologies.",
  },
  {
    title: "Research Publications",
    href: "/publications",
    icon: <FileText className="w-6 h-6" />,
    description:
      "Publication of research data on prevalent methods, specialists, and organizations in international and local country-specific formats. Rating assignments and identification of market leaders and underperformers.",
  },
  {
    title: "Expert Council",
    href: "/council",
    icon: <Users className="w-6 h-6" />,
    description:
      "Recommendations and guidance from the Academy's leading specialists, providing authoritative perspectives on best practices and emerging developments.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-wiki-border bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-6 pl-16">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif text-foreground border-none pb-0 mb-1">
                American Academy of Complementary Medicine
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Advancing the science and practice of complementary medicine through research, education, and professional standards
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 pl-16">
        <div className="wiki-infobox hidden md:block">
          <table className="w-full">
            <thead>
              <tr>
                <th colSpan={2} className="text-base">
                  Academy Overview
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Headquarters</td>
                <td>Hollywood, Florida</td>
              </tr>
              <tr>
                <td className="font-medium">Focus</td>
                <td>Complementary Medicine</td>
              </tr>
              <tr>
                <td className="font-medium">Members</td>
                <td>15,000+</td>
              </tr>
              <tr>
                <td className="font-medium">Affiliated Institutions</td>
                <td>340+</td>
              </tr>
              <tr>
                <td className="font-medium">Countries</td>
                <td>47</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base leading-relaxed mb-6">
          The <strong>American Academy of Complementary Medicine</strong> (AACM) is a
          leading professional organization dedicated to advancing the field of{" "}
          <span className="wiki-link">complementary medicine</span> through rigorous
          research, comprehensive education, and the establishment of professional
          standards. The Academy serves as the primary accrediting
          body and research institution for complementary medical practices in the
          United States and maintains partnerships with institutions across 47 countries.
        </p>

        <p className="text-base leading-relaxed mb-6">
          The Academy's mission encompasses the evaluation of practitioners, the
          certification of educational programs, and the publication of evidence-based
          research. Through its various departments, AACM provides comprehensive
          services including{" "}
          <span className="wiki-link">practitioner accreditation</span>,{" "}
          <span className="wiki-link">market analysis</span>, and{" "}
          <span className="wiki-link">clinical research</span> coordination.
        </p>

        <div className="wiki-toc mb-8">
          <div className="wiki-toc-title">Contents</div>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>
              <span className="wiki-link">Academy Departments</span>
            </li>
            <li>
              <span className="wiki-link">Research Initiatives</span>
            </li>
            <li>
              <span className="wiki-link">Accreditation Process</span>
            </li>
            <li>
              <span className="wiki-link">International Partnerships</span>
            </li>
          </ol>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-serif" id="departments">
            Academy Departments
          </h2>
          <p className="text-base leading-relaxed mb-6">
            The Academy operates through a network of specialized departments, each
            focused on distinct aspects of complementary medicine advancement. These
            departments collaborate to provide comprehensive services to practitioners,
            researchers, and the public.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {departments.map((dept) => (
              <Link
                key={dept.href}
                href={dept.href}
                data-testid={`card-${dept.href.slice(1)}`}
              >
                <div className="department-card p-4 rounded cursor-pointer h-full">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-0.5">{dept.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base font-medium text-primary border-none pb-0 mb-1 hover:underline">
                        {dept.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-serif" id="research">
            Research Initiatives
          </h2>
          <p className="text-base leading-relaxed mb-4">
            The Academy coordinates numerous research initiatives aimed at establishing
            the efficacy and safety of complementary medical practices. Current focus
            areas include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-4 mb-4">
            <li>Clinical outcome studies for integrative treatment protocols</li>
            <li>Comparative effectiveness research across modalities</li>
            <li>Patient safety monitoring and adverse event reporting</li>
            <li>Cost-effectiveness analysis for healthcare integration</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-serif" id="accreditation">
            Accreditation Process
          </h2>
          <p className="text-base leading-relaxed mb-4">
            The Academy's accreditation process represents the gold standard for
            professional certification in complementary medicine. The multi-stage
            evaluation includes:
          </p>
          <div className="bg-blue-50/50 border border-wiki-border rounded p-4 mb-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Educational Verification</p>
                  <p className="text-xs text-muted-foreground">
                    Review of academic credentials and training certifications
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Clinical Assessment</p>
                  <p className="text-xs text-muted-foreground">
                    Evaluation of practical skills and patient outcomes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Peer Review</p>
                  <p className="text-xs text-muted-foreground">
                    Assessment by established practitioners in the field
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Continuing Education</p>
                  <p className="text-xs text-muted-foreground">
                    Ongoing professional development requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-serif" id="international">
            International Partnerships
          </h2>
          <p className="text-base leading-relaxed">
            The Academy maintains collaborative relationships with complementary
            medicine organizations across 47 countries, facilitating the exchange of
            research data, educational resources, and professional standards. Key
            partnership regions include the European Union, Asia-Pacific, and Latin
            America, with regional offices supporting local certification programs
            aligned with AACM standards.
          </p>
        </section>

        <footer className="border-t border-wiki-border pt-6 mt-8 text-xs text-muted-foreground">
          <p className="mb-2">
            This page was last edited on January 11, 2026.
          </p>
          <p>
            Content is available under the Academy's publication guidelines unless
            otherwise noted.
          </p>
        </footer>
      </main>
    </div>
  );
}
