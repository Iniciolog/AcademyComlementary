import { Link, useRoute } from "wouter";
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
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

const departmentData: Record<
  string,
  {
    title: string;
    icon: React.ReactNode;
    description: string;
    sections: { title: string; content: string }[];
    relatedLinks: { title: string; href: string }[];
  }
> = {
  analytics: {
    title: "Industry Analytics Department",
    icon: <BarChart3 className="w-8 h-8" />,
    description:
      "The Industry Analytics Department conducts comprehensive analysis of the complementary medicine sector, providing stakeholders with actionable insights into market dynamics, growth trends, and emerging opportunities.",
    sections: [
      {
        title: "Mission",
        content:
          "To provide accurate, timely, and actionable market intelligence that supports strategic decision-making across the complementary medicine industry. Our analyses inform practitioners, investors, policymakers, and educational institutions.",
      },
      {
        title: "Core Activities",
        content:
          "The department maintains ongoing surveillance of market conditions including practitioner demographics, service utilization patterns, consumer spending trends, and regulatory developments. Quarterly reports synthesize data from multiple sources to produce comprehensive industry overviews.",
      },
      {
        title: "Research Methodology",
        content:
          "Our analytical framework combines quantitative market data with qualitative assessments from industry experts. Primary data collection includes practitioner surveys, consumer panels, and institutional reporting. Secondary analysis incorporates regulatory filings, academic publications, and international datasets.",
      },
    ],
    relatedLinks: [
      { title: "Marketing & Market Research", href: "/marketing" },
      { title: "Research Publications", href: "/publications" },
      { title: "Rating Monitoring", href: "/ratings" },
    ],
  },
  marketing: {
    title: "Marketing & Market Research Department",
    icon: <Search className="w-8 h-8" />,
    description:
      "The Marketing & Market Research Department specializes in understanding consumer behavior, practitioner positioning, and service delivery models within the complementary medicine ecosystem.",
    sections: [
      {
        title: "Research Focus",
        content:
          "Our research examines how patients discover and select complementary medicine practitioners, the factors influencing treatment adherence, and the communication strategies that build trust between practitioners and patients.",
      },
      {
        title: "Market Segmentation",
        content:
          "The department maintains detailed segmentation models covering geographic markets, practice specialties, patient demographics, and service delivery formats. These models support targeted outreach and resource allocation decisions.",
      },
      {
        title: "Competitive Analysis",
        content:
          "Regular competitive intelligence reports track market share dynamics, pricing trends, and differentiation strategies across the industry. Benchmarking studies help practitioners understand their positioning relative to peers.",
      },
    ],
    relatedLinks: [
      { title: "Industry Analytics", href: "/analytics" },
      { title: "Rating Monitoring", href: "/ratings" },
      { title: "Expert Council", href: "/council" },
    ],
  },
  accreditation: {
    title: "Expertise & Accreditation Department",
    icon: <Building2 className="w-8 h-8" />,
    description:
      "The Expertise & Accreditation Department serves as the Academy's primary credentialing body, establishing and maintaining standards for practitioner qualification, institutional accreditation, and outcome verification.",
    sections: [
      {
        title: "Credentialing Standards",
        content:
          "We maintain comprehensive standards covering educational requirements, clinical competencies, ethical conduct, and continuing education. These standards are developed through collaboration with practitioners, educators, and regulatory bodies.",
      },
      {
        title: "Outcome Monitoring",
        content:
          "The department operates an outcome tracking system that collects data on treatment results, patient satisfaction, and adverse events. This information supports both individual practitioner evaluation and aggregate quality improvement initiatives.",
      },
      {
        title: "Verification Processes",
        content:
          "Our verification protocols confirm the accuracy of reported credentials, validate claimed outcomes, and authenticate patient testimonials. This rigorous approach ensures the integrity of the Academy's accreditation.",
      },
    ],
    relatedLinks: [
      { title: "Educational Programs", href: "/education" },
      { title: "Rating Monitoring", href: "/ratings" },
      { title: "Expert Council", href: "/council" },
    ],
  },
  ratings: {
    title: "Rating Monitoring Department",
    icon: <TrendingUp className="w-8 h-8" />,
    description:
      "The Rating Monitoring Department maintains dynamic rating systems for practitioners, services, organizations, and methodologies, providing transparent quality indicators for patients and stakeholders.",
    sections: [
      {
        title: "Rating Methodology",
        content:
          "Our multi-dimensional rating system incorporates objective measures (credentials, outcomes, experience) and subjective assessments (peer evaluations, patient feedback). Algorithmic weighting ensures fair representation across diverse practice types.",
      },
      {
        title: "Continuous Updates",
        content:
          "Ratings are updated continuously as new information becomes available. Real-time data feeds capture credential changes, new outcome reports, and emerging reviews. Quarterly comprehensive reviews ensure accuracy and relevance.",
      },
      {
        title: "Transparency Standards",
        content:
          "The department publishes detailed documentation of rating criteria, calculation methods, and data sources. Practitioners receive notification of rating changes with detailed explanations and appeals processes.",
      },
    ],
    relatedLinks: [
      { title: "Expertise & Accreditation", href: "/accreditation" },
      { title: "Research Publications", href: "/publications" },
      { title: "Awards & Honors", href: "/awards" },
    ],
  },
  awards: {
    title: "Awards & Honors Department",
    icon: <Award className="w-8 h-8" />,
    description:
      "The Awards & Honors Department administers recognition programs that celebrate excellence in complementary medicine practice, research, education, and service.",
    sections: [
      {
        title: "Recognition Categories",
        content:
          "Annual awards recognize outstanding achievement in clinical practice, research innovation, educational excellence, and community service. Specialized categories honor contributions to specific modalities and populations.",
      },
      {
        title: "Selection Process",
        content:
          "Award recipients are selected through a rigorous process involving peer nomination, documentation review, and committee evaluation. Selection committees include leading practitioners, researchers, and patient advocates.",
      },
      {
        title: "Lifetime Achievement",
        content:
          "The Academy's highest honor, the Lifetime Achievement Award, recognizes individuals whose sustained contributions have significantly advanced the field. Recipients have typically demonstrated excellence across multiple decades and domains.",
      },
    ],
    relatedLinks: [
      { title: "Rating Monitoring", href: "/ratings" },
      { title: "Expert Council", href: "/council" },
      { title: "Educational Programs", href: "/education" },
    ],
  },
  education: {
    title: "Educational Programs Department",
    icon: <GraduationCap className="w-8 h-8" />,
    description:
      "The Educational Programs Department develops, accredits, and delivers comprehensive training curricula for complementary medicine practitioners at all career stages.",
    sections: [
      {
        title: "Curriculum Development",
        content:
          "Our curriculum specialists work with subject matter experts to create evidence-based educational content. Programs cover foundational knowledge, clinical skills, business practices, and specialized modalities.",
      },
      {
        title: "Special Initiology",
        content:
          "The Special Initiology program includes advanced energy channel training. Key components include the Artra Ven block, a multichannel amplifier of the main Metatron block, designed for enhanced energetic alignment and therapeutic efficacy.",
      },
      {
        title: "Higher Initiology",
        content:
          "Following Special Initiology, the Higher Initiology curriculum offers mastery-level instruction in advanced energetic channels. This program represents the pinnacle of initiological training, focusing on complex multidimensional healing modalities.",
      },
      {
        title: "Institutional Accreditation",
        content:
          "The department evaluates educational institutions seeking Academy accreditation. Assessment criteria include faculty qualifications, curriculum rigor, clinical training facilities, and graduate outcomes.",
      },
      {
        title: "Continuing Education",
        content:
          "Mandatory continuing education requirements ensure practitioners maintain current knowledge and skills. The department offers diverse learning formats including conferences, online courses, and clinical intensives.",
      },
    ],
    relatedLinks: [
      { title: "Expertise & Accreditation", href: "/accreditation" },
      { title: "Scientific Research", href: "/research" },
      { title: "Expert Council", href: "/council" },
    ],
  },
  research: {
    title: "Scientific Research Department",
    icon: <FlaskConical className="w-8 h-8" />,
    description:
      "The Scientific Research Department coordinates clinical trials, basic science investigations, and systematic reviews that advance the evidence base for complementary medicine.",
    sections: [
      {
        title: "Clinical Trials",
        content:
          "The department sponsors and coordinates randomized controlled trials examining the efficacy and safety of complementary interventions. Trial design follows international standards for scientific rigor and ethical conduct.",
      },
      {
        title: "Systematic Reviews",
        content:
          "Regular systematic reviews synthesize existing research on specific modalities and conditions. These reviews inform clinical guidelines, educational content, and regulatory submissions.",
      },
      {
        title: "Research Grants",
        content:
          "Competitive grant programs support investigator-initiated research addressing priority questions. Funding categories include pilot studies, full-scale trials, and methodological development projects.",
      },
    ],
    relatedLinks: [
      { title: "Research Publications", href: "/publications" },
      { title: "Educational Programs", href: "/education" },
      { title: "Diagnostic Methods", href: "/diagnostics" },
    ],
  },
  diagnostics: {
    title: "Diagnostic Methods Department",
    icon: <Stethoscope className="w-8 h-8" />,
    description:
      "The Diagnostic Methods Department researches, standardizes, and validates complementary diagnostic approaches used in patient assessment and treatment planning.",
    sections: [
      {
        title: "Diagnostic Validation",
        content:
          "The department conducts reliability and validity studies for diagnostic techniques used in complementary medicine. Research examines inter-rater agreement, test-retest stability, and correlation with conventional measures.",
      },
      {
        title: "Standardization Efforts",
        content:
          "Working groups develop standardized protocols for commonly used diagnostic procedures. These protocols ensure consistency in application and interpretation across practitioners and settings.",
      },
      {
        title: "Technology Integration",
        content:
          "Emerging diagnostic technologies are evaluated for potential integration into complementary medicine practice. Assessment criteria include accuracy, accessibility, and compatibility with existing approaches.",
      },
    ],
    relatedLinks: [
      { title: "Scientific Research", href: "/research" },
      { title: "Expertise & Accreditation", href: "/accreditation" },
      { title: "Educational Programs", href: "/education" },
    ],
  },
  publications: {
    title: "Research Publications Department",
    icon: <FileText className="w-8 h-8" />,
    description:
      "The Research Publications Department disseminates research findings, market analyses, and rating data in formats accessible to diverse stakeholders across international and regional markets.",
    sections: [
      {
        title: "Publication Types",
        content:
          "The department produces peer-reviewed research articles, industry reports, rating summaries, and educational materials. Publications range from technical scientific papers to accessible summaries for general audiences.",
      },
      {
        title: "International Editions",
        content:
          "Country-specific editions adapt global data for local contexts. Regional publications incorporate local regulatory frameworks, cultural considerations, and market conditions while maintaining consistency with international standards.",
      },
      {
        title: "Market Leader Reports",
        content:
          "Quarterly reports identify market leaders and underperformers across practitioner categories, service types, and geographic regions. These analyses support benchmarking and strategic planning.",
      },
    ],
    relatedLinks: [
      { title: "Industry Analytics", href: "/analytics" },
      { title: "Rating Monitoring", href: "/ratings" },
      { title: "Scientific Research", href: "/research" },
    ],
  },
  council: {
    title: "Expert Council",
    icon: <Users className="w-8 h-8" />,
    description:
      "The Expert Council comprises distinguished leaders who provide strategic guidance, authoritative recommendations, and oversight for Academy initiatives.",
    sections: [
      {
        title: "Council Composition",
        content:
          "The Council includes recognized authorities from clinical practice, academic research, healthcare policy, and patient advocacy. Members serve rotating terms and represent diverse modalities and geographic regions.",
      },
      {
        title: "Advisory Functions",
        content:
          "Council members advise on strategic priorities, evaluate proposed initiatives, and resolve complex accreditation cases. Regular meetings address emerging issues and long-term planning.",
      },
      {
        title: "Public Recommendations",
        content:
          "The Council issues public statements on matters of significance to the field. Recommendations address clinical practices, professional ethics, regulatory matters, and research priorities.",
      },
    ],
    relatedLinks: [
      { title: "Expertise & Accreditation", href: "/accreditation" },
      { title: "Awards & Honors", href: "/awards" },
      { title: "Educational Programs", href: "/education" },
    ],
  },
};

export default function Department() {
  const [, params] = useRoute("/:slug");
  const slug = params?.slug || "";
  const data = departmentData[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Department Not Found</h1>
          <Link href="/" className="wiki-link">
            Return to Main Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-wiki-border bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-5xl mx-auto px-6 py-4 pl-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-3"
            data-testid="back-link"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Main Page
          </Link>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 text-primary">
              {data.icon}
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif text-foreground border-none pb-0 mb-1">
                {data.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                American Academy of Complementary Medicine
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 pl-16">
        <div className="md:flex md:gap-8">
          <article className="flex-1">
            <p className="text-base leading-relaxed mb-6">{data.description}</p>

            <div className="wiki-toc mb-6">
              <div className="wiki-toc-title">Contents</div>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                {data.sections.map((section, idx) => (
                  <li key={idx}>
                    <a
                      href={`#section-${idx}`}
                      className="wiki-link"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#related" className="wiki-link">
                    Related Departments
                  </a>
                </li>
              </ol>
            </div>

            {data.sections.map((section, idx) => (
              <section key={idx} className="mb-6" id={`section-${idx}`}>
                <h2 className="text-lg font-serif">{section.title}</h2>
                <p className="text-sm leading-relaxed">{section.content}</p>
              </section>
            ))}

            <section id="related" className="mb-6">
              <h2 className="text-lg font-serif">Related Departments</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {data.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="wiki-link">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="wiki-infobox float-none m-0 w-full">
              <table className="w-full">
                <thead>
                  <tr>
                    <th colSpan={2} className="text-sm">
                      Department Info
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-xs">Status</td>
                    <td className="text-xs">Active</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-xs">Staff</td>
                    <td className="text-xs">24 professionals</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-xs">Reports to</td>
                    <td className="text-xs">Executive Director</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-blue-50/50 border border-wiki-border rounded text-xs">
              <p className="font-medium mb-2">Quick Links</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="wiki-link inline-flex items-center gap-1">
                    Contact Department <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="wiki-link inline-flex items-center gap-1">
                    Submit Inquiry <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="wiki-link inline-flex items-center gap-1">
                    View Reports <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <footer className="border-t border-wiki-border pt-6 mt-8 text-xs text-muted-foreground">
          <p className="mb-2">This page was last edited on January 11, 2026.</p>
          <p>
            Content is available under the Academy's publication guidelines
            unless otherwise noted.
          </p>
        </footer>
      </main>
    </div>
  );
}
