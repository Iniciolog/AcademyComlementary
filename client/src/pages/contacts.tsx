import { Link } from "wouter";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

export default function Contacts() {
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
            Contact Us
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 pl-16">
        <p className="text-lg leading-relaxed mb-8">
          The American Academy of Complementary Medicine welcomes inquiries from practitioners, researchers, media, and the public. Please use the contact information below to reach the appropriate department.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-slate-50 border border-wiki-border rounded-lg">
            <h2 className="text-lg font-serif mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Headquarters
            </h2>
            <address className="not-italic text-sm leading-relaxed text-muted-foreground">
              American Academy of Complementary Medicine<br />
              Hollywood, Florida<br />
              United States of America
            </address>
          </div>

          <div className="p-6 bg-slate-50 border border-wiki-border rounded-lg">
            <h2 className="text-lg font-serif mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              General Inquiries
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              For general questions about the Academy, membership, or accreditation:
            </p>
            <a href="mailto:info@aacm.org" className="text-primary hover:underline font-medium">
              info@aacm.org
            </a>
          </div>
        </div>

        <h2 className="text-xl font-serif mb-6">Department Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-wiki-border rounded">
            <h3 className="font-semibold text-sm mb-2">Accreditation Office</h3>
            <a href="mailto:accreditation@aacm.org" className="text-sm text-primary hover:underline">accreditation@aacm.org</a>
          </div>
          <div className="p-4 border border-wiki-border rounded">
            <h3 className="font-semibold text-sm mb-2">Research Department</h3>
            <a href="mailto:research@aacm.org" className="text-sm text-primary hover:underline">research@aacm.org</a>
          </div>
          <div className="p-4 border border-wiki-border rounded">
            <h3 className="font-semibold text-sm mb-2">Media Relations</h3>
            <a href="mailto:media@aacm.org" className="text-sm text-primary hover:underline">media@aacm.org</a>
          </div>
        </div>
      </main>
    </div>
  );
}
