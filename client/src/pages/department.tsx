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
import Autoplay from "embla-carousel-autoplay";
import lazarenkoImage from "@assets/lazarenko_v2.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function Department() {
  const [, params] = useRoute("/:slug");
  const slug = params?.slug || "";
  const { t } = useTranslation();

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
      title: t("departments.analytics.title"),
      icon: <BarChart3 className="w-8 h-8" />,
      description: t("departments.analytics.long_desc"),
      sections: [
        {
          title: t("departments.analytics.sections.mission_title"),
          content: t("departments.analytics.sections.mission_content"),
        },
        {
          title: t("departments.analytics.sections.activities_title"),
          content: t("departments.analytics.sections.activities_content"),
        },
        {
          title: t("departments.analytics.sections.methodology_title"),
          content: t("departments.analytics.sections.methodology_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.marketing.title"), href: "/marketing" },
        { title: t("departments.publications.title"), href: "/publications" },
        { title: t("departments.ratings.title"), href: "/ratings" },
      ],
    },
    marketing: {
      title: t("departments.marketing.title"),
      icon: <Search className="w-8 h-8" />,
      description: t("departments.marketing.long_desc"),
      sections: [
        {
          title: t("departments.marketing.sections.focus_title"),
          content: t("departments.marketing.sections.focus_content"),
        },
        {
          title: t("departments.marketing.sections.segmentation_title"),
          content: t("departments.marketing.sections.segmentation_content"),
        },
        {
          title: t("departments.marketing.sections.analysis_title"),
          content: t("departments.marketing.sections.analysis_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.analytics.title"), href: "/analytics" },
        { title: t("departments.ratings.title"), href: "/ratings" },
        { title: t("departments.council.title"), href: "/council" },
      ],
    },
    accreditation: {
      title: t("departments.accreditation.title"),
      icon: <Building2 className="w-8 h-8" />,
      description: t("departments.accreditation.long_desc"),
      sections: [
        {
          title: t("departments.accreditation.sections.standards_title"),
          content: t("departments.accreditation.sections.standards_content"),
        },
        {
          title: t("departments.accreditation.sections.monitoring_title"),
          content: t("departments.accreditation.sections.monitoring_content"),
        },
        {
          title: t("departments.accreditation.sections.verification_title"),
          content: t("departments.accreditation.sections.verification_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.education.title"), href: "/education" },
        { title: t("departments.ratings.title"), href: "/ratings" },
        { title: t("departments.council.title"), href: "/council" },
      ],
    },
    ratings: {
      title: t("departments.ratings.title"),
      icon: <TrendingUp className="w-8 h-8" />,
      description: t("departments.ratings.long_desc"),
      sections: [
        {
          title: t("departments.ratings.sections.methodology_title"),
          content: t("departments.ratings.sections.methodology_content"),
        },
        {
          title: t("departments.ratings.sections.updates_title"),
          content: t("departments.ratings.sections.updates_content"),
        },
        {
          title: t("departments.ratings.sections.transparency_title"),
          content: t("departments.ratings.sections.transparency_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.accreditation.title"), href: "/accreditation" },
        { title: t("departments.publications.title"), href: "/publications" },
        { title: t("departments.awards.title"), href: "/awards" },
      ],
    },
    awards: {
      title: t("departments.awards.title"),
      icon: <Award className="w-8 h-8" />,
      description: t("departments.awards.long_desc"),
      sections: [
        {
          title: t("departments.awards.sections.categories_title"),
          content: t("departments.awards.sections.categories_content"),
        },
        {
          title: t("departments.awards.sections.selection_title"),
          content: t("departments.awards.sections.selection_content"),
        },
        {
          title: t("departments.awards.sections.lifetime_title"),
          content: t("departments.awards.sections.lifetime_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.ratings.title"), href: "/ratings" },
        { title: t("departments.council.title"), href: "/council" },
        { title: t("departments.education.title"), href: "/education" },
      ],
    },
    education: {
      title: t("departments.education.title"),
      icon: <GraduationCap className="w-8 h-8" />,
      description: t("departments.education.long_desc"),
      sections: [
        {
          title: t("departments.education.sections.curriculum_title"),
          content: t("departments.education.sections.curriculum_content"),
        },
        {
          title: t("departments.education.sections.special_title"),
          content: t("departments.education.sections.special_content"),
        },
        {
          title: t("departments.education.sections.higher_title"),
          content: t("departments.education.sections.higher_content"),
        },
        {
          title: t("departments.education.sections.accreditation_title"),
          content: t("departments.education.sections.accreditation_content"),
        },
        {
          title: t("departments.education.sections.continuing_title"),
          content: t("departments.education.sections.continuing_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.accreditation.title"), href: "/accreditation" },
        { title: t("departments.research.title"), href: "/research" },
        { title: t("departments.council.title"), href: "/council" },
      ],
    },
    research: {
      title: t("departments.research.title"),
      icon: <FlaskConical className="w-8 h-8" />,
      description: t("departments.research.long_desc"),
      sections: [
        {
          title: t("departments.research.sections.trials_title"),
          content: t("departments.research.sections.trials_content"),
        },
        {
          title: t("departments.research.sections.reviews_title"),
          content: t("departments.research.sections.reviews_content"),
        },
        {
          title: t("departments.research.sections.grants_title"),
          content: t("departments.research.sections.grants_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.publications.title"), href: "/publications" },
        { title: t("departments.education.title"), href: "/education" },
        { title: t("departments.diagnostics.title"), href: "/diagnostics" },
      ],
    },
    diagnostics: {
      title: t("departments.diagnostics.title"),
      icon: <Stethoscope className="w-8 h-8" />,
      description: t("departments.diagnostics.long_desc"),
      sections: [
        {
          title: t("departments.diagnostics.sections.validation_title"),
          content: t("departments.diagnostics.sections.validation_content"),
        },
        {
          title: t("departments.diagnostics.sections.standardization_title"),
          content: t("departments.diagnostics.sections.standardization_content"),
        },
        {
          title: t("departments.diagnostics.sections.tech_title"),
          content: t("departments.diagnostics.sections.tech_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.research.title"), href: "/research" },
        { title: t("departments.accreditation.title"), href: "/accreditation" },
        { title: t("departments.education.title"), href: "/education" },
      ],
    },
    publications: {
      title: t("departments.publications.title"),
      icon: <FileText className="w-8 h-8" />,
      description: t("departments.publications.long_desc"),
      sections: [
        {
          title: t("departments.publications.sections.types_title"),
          content: t("departments.publications.sections.types_content"),
        },
        {
          title: t("departments.publications.sections.editions_title"),
          content: t("departments.publications.sections.editions_content"),
        },
        {
          title: t("departments.publications.sections.reports_title"),
          content: t("departments.publications.sections.reports_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.analytics.title"), href: "/analytics" },
        { title: t("departments.ratings.title"), href: "/ratings" },
        { title: t("departments.research.title"), href: "/research" },
      ],
    },
    council: {
      title: t("departments.council.title"),
      icon: <Users className="w-8 h-8" />,
      description: t("departments.council.long_desc"),
      sections: [
        {
          title: t("departments.council.sections.composition_title"),
          content: t("departments.council.sections.composition_content"),
        },
        {
          title: t("departments.council.sections.advisory_title"),
          content: t("departments.council.sections.advisory_content"),
        },
        {
          title: t("departments.council.sections.public_title"),
          content: t("departments.council.sections.public_content"),
        },
      ],
      relatedLinks: [
        { title: t("departments.accreditation.title"), href: "/accreditation" },
        { title: t("departments.awards.title"), href: "/awards" },
        { title: t("departments.education.title"), href: "/education" },
      ],
    },
  };

  const data = departmentData[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Department Not Found</h1>
          <Link href="/" className="wiki-link">
            {t("common.back_home")}
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
            {t("common.back_home")}
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
                {t("common.academy_name")}
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
              <div className="wiki-toc-title">{t("home.contents")}</div>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                {slug === "awards" && (
                  <li>
                    <a href="#faces-of-year" className="wiki-link">
                      {t("departments.awards.faces_title")}
                    </a>
                  </li>
                )}
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
                    {t("departments.related_departments")}
                  </a>
                </li>
              </ol>
            </div>

            {slug === "awards" && (
              <section id="faces-of-year" className="mb-8">
                <h2 className="text-lg font-serif mb-4">{t("departments.awards.faces_title")}</h2>
                <div className="px-12">
                  <Carousel 
                    className="w-full max-w-xl mx-auto"
                    plugins={[
                      Autoplay({
                        delay: 3000,
                      }),
                    ]}
                  >
                    <CarouselContent>
                      {[
                        "https://i.ebayimg.com/00/s/OTUwWDk2Ng==/z/r-cAAOSwRJli1lIq/$_57.PNG?set_id=880000500F",
                        "https://avatars.mds.yandex.net/i?id=a6a5a1e2ffb8eaa1827eb699f1f09c2f829a9470-8261187-images-thumbs&n=13",
                        "https://avatars.dzeninfra.ru/get-zen_doc/9555919/pub_640d8046c7e3736a233175ed_640d8e5f0c912a32a1d7889f/scale_1200",
                        lazarenkoImage
                      ].map((src, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <Card className="border-none shadow-none">
                              <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-md bg-muted/20">
                                <img 
                                  src={src} 
                                  alt={`Face of the Year 2026 - ${index + 1}`} 
                                  className="w-full h-full object-contain"
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </section>
            )}

            {data.sections.map((section, idx) => (
              <section key={idx} className="mb-6" id={`section-${idx}`}>
                <h2 className="text-lg font-serif">{section.title}</h2>
                <p className="text-sm leading-relaxed">{section.content}</p>
              </section>
            ))}

            <section id="related" className="mb-6">
              <h2 className="text-lg font-serif">{t("departments.related_departments")}</h2>
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
                      {t("departments.department_info")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-xs">{t("common.status")}</td>
                    <td className="text-xs">{t("common.active")}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-xs">{t("common.staff")}</td>
                    <td className="text-xs">{t("common.professionals")}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-xs">{t("common.reports_to")}</td>
                    <td className="text-xs">{t("common.executive_director")}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-blue-50/50 border border-wiki-border rounded text-xs">
              <p className="font-medium mb-2">{t("common.quick_links")}</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="wiki-link inline-flex items-center gap-1">
                    {t("departments.contact_dept")} <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="wiki-link inline-flex items-center gap-1">
                    {t("departments.submit_inquiry")} <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="wiki-link inline-flex items-center gap-1">
                    {t("departments.view_reports")} <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <footer className="border-t border-wiki-border pt-6 mt-12 text-xs text-muted-foreground">
          <p className="mb-2">{t("common.last_edited")}</p>
          <p>
            {t("common.copyright")}
          </p>
        </footer>
      </main>
    </div>
  );
}