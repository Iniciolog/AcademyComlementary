import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Association {
  name: string;
  country: string;
  city: string;
  field: string;
  website: string;
  description: string;
}

const associations: Association[] = [
  {
    name: "Parapsychological Association (PA)",
    country: "USA",
    city: "Durham, NC",
    field: "Parapsychology",
    website: "parapsych.org",
    description: "Founded in 1957; promotes parapsychology as a science, integrates findings with other branches; affiliated with AAAS."
  },
  {
    name: "Society for Psychical Research (SPR)",
    country: "UK",
    city: "London",
    field: "Parapsychology",
    website: "spr.ac.uk",
    description: "Investigates psychokinesis, past lives, mediums, psychics, apparitions, poltergeists, near-death and out-of-body experiences."
  },
  {
    name: "Australian Institute of Parapsychological Research",
    country: "Australia",
    city: "—",
    field: "Parapsychology",
    website: "aiprinc.org",
    description: "Non-profit organization (since 1977); research in parapsychology, reincarnation, and anomalous cognition."
  },
  {
    name: "Yoga Alliance",
    country: "USA",
    city: "—",
    field: "Yoga",
    website: "yogaalliance.org",
    description: "Non-profit organization; supports yoga teachers, schools, and supporters; expands access and inclusivity."
  },
  {
    name: "International Yoga Federation (IYF)",
    country: "International",
    city: "—",
    field: "Yoga",
    website: "—",
    description: "Non-profit federation; unites practitioners, teachers, centers, and organizations; highest body is the General Assembly."
  },
  {
    name: "World Yoga Association",
    country: "International",
    city: "—",
    field: "Yoga",
    website: "world-yoga.org",
    description: "Certifies teachers, schools, clubs, associations, and federations; preserves authenticity of yoga, promotes professional development and cultural exchange."
  },
  {
    name: "Yoga Alliance International",
    country: "International",
    city: "—",
    field: "Yoga",
    website: "yogaallianceinternational.org",
    description: "International organization promoting authentic yoga traditions and certification standards globally."
  }
];

export default function Associations() {
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
            <div>
              <h1 className="text-xl md:text-2xl font-serif text-foreground border-none pb-0 mb-1">
                Professional Associations
              </h1>
              <p className="text-sm text-muted-foreground">
                American Academy of Complementary Medicine
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 pl-16">
        <article>
          <p className="text-base leading-relaxed mb-8">
            The following list includes recognized international and regional associations in the fields of parapsychology, yoga, and complementary medicine. These organizations work to maintain professional standards, conduct research, and promote their respective disciplines.
          </p>

          <div className="rounded-md border border-wiki-border overflow-hidden">
            <Table>
              <TableHeader className="bg-[#eeefe8]">
                <TableRow>
                  <TableHead className="font-semibold text-foreground w-[250px]">Organization</TableHead>
                  <TableHead className="font-semibold text-foreground w-[120px]">Location</TableHead>
                  <TableHead className="font-semibold text-foreground w-[120px]">Field</TableHead>
                  <TableHead className="font-semibold text-foreground w-[150px]">Website</TableHead>
                  <TableHead className="font-semibold text-foreground">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {associations.map((assoc, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium align-top">{assoc.name}</TableCell>
                    <TableCell className="align-top">
                      <div className="flex flex-col text-sm">
                        <span className="font-medium">{assoc.country}</span>
                        {assoc.city !== "—" && <span className="text-muted-foreground text-xs">{assoc.city}</span>}
                      </div>
                    </TableCell>
                    <TableCell className="align-top">{assoc.field}</TableCell>
                    <TableCell className="align-top">
                      {assoc.website !== "—" ? (
                        <a 
                          href={`https://${assoc.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:underline text-sm"
                        >
                          {assoc.website} <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell className="align-top text-sm leading-relaxed">{assoc.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </article>

        <footer className="border-t border-wiki-border pt-6 mt-12 text-xs text-muted-foreground">
          <p className="mb-2">This list was last updated on January 23, 2026.</p>
          <p>
            The American Academy of Complementary Medicine is not directly affiliated with these external organizations unless explicitly stated.
          </p>
        </footer>
      </main>
    </div>
  );
}
