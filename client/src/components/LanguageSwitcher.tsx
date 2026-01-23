import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 w-8 p-0 rounded-full overflow-hidden ${i18n.language === "en" || i18n.language.startsWith("en-") ? "bg-muted" : ""}`}
        onClick={() => toggleLanguage("en")}
        title="English"
      >
        <span className="text-xl">🇺🇸</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 w-8 p-0 rounded-full overflow-hidden ${i18n.language === "de" ? "bg-muted" : ""}`}
        onClick={() => toggleLanguage("de")}
        title="Deutsch"
      >
        <span className="text-xl">🇩🇪</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 w-8 p-0 rounded-full overflow-hidden ${i18n.language === "ru" ? "bg-muted" : ""}`}
        onClick={() => toggleLanguage("ru")}
        title="Русский"
      >
        <span className="text-xl">🇷🇺</span>
      </Button>
      {/* Dummy flags for visual effect */}
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full overflow-hidden opacity-50 cursor-not-allowed" title="Français (Coming soon)">
        <span className="text-xl">🇫🇷</span>
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full overflow-hidden opacity-50 cursor-not-allowed" title="Español (Coming soon)">
        <span className="text-xl">🇪🇸</span>
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full overflow-hidden opacity-50 cursor-not-allowed" title="Italiano (Coming soon)">
        <span className="text-xl">🇮🇹</span>
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full overflow-hidden opacity-50 cursor-not-allowed" title="中文 (Coming soon)">
        <span className="text-xl">🇨🇳</span>
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full overflow-hidden opacity-50 cursor-not-allowed" title="日本語 (Coming soon)">
        <span className="text-xl">🇯🇵</span>
      </Button>
    </div>
  );
}
