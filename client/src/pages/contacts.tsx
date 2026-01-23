import { Link } from "wouter";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-wiki-border bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-6 pl-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("common.back_home")}
          </Link>
          <h1 className="text-2xl md:text-3xl font-serif text-foreground">
            {t("contacts.title")}
          </h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-8 pl-16">
        <p className="text-lg leading-relaxed mb-8">
          {t("contacts.intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-slate-50 border border-wiki-border rounded-lg">
            <h2 className="text-lg font-serif mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              {t("contacts.headquarters")}
            </h2>
            <address className="not-italic text-sm leading-relaxed text-muted-foreground">
              {t("common.academy_name")}<br />
              {t("home.florida_usa")}<br />
              United States of America
            </address>
          </div>

          <div className="p-6 bg-slate-50 border border-wiki-border rounded-lg">
            <h2 className="text-lg font-serif mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              {t("contacts.general_inquiries")}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              {t("contacts.general_desc")}
            </p>
            <a href="mailto:support@aacmedinc.org" className="text-primary hover:underline font-medium">support@aacmedinc.org. americanacademyinc@gmail.com                                           Tel. +1(786)789-9632</a>
          </div>
        </div>

        <h2 className="text-xl font-serif mb-6">{t("contacts.dept_contacts")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-wiki-border rounded">
            <h3 className="font-semibold text-sm mb-2">{t("contacts.accreditation_office")}</h3>
            <a href="mailto:accreditation@aacm.org" className="text-sm text-primary hover:underline">accreditation@aacmedinc.org</a>
          </div>
          <div className="p-4 border border-wiki-border rounded">
            <h3 className="font-semibold text-sm mb-2">{t("contacts.research_dept")}</h3>
            <a href="mailto:research@aacm.org" className="text-sm text-primary hover:underline">research@aacmedinc.org</a>
          </div>
          <div className="p-4 border border-wiki-border rounded">
            <h3 className="font-semibold text-sm mb-2">{t("contacts.media_relations")}</h3>
            <a href="mailto:media@aacm.org" className="text-sm text-primary hover:underline">media@aacmedinc.org</a>
          </div>
        </div>
      </main>
    </div>
  );
}
