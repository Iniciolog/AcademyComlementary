import { Link } from "wouter";
import { ArrowLeft, CheckCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  features?: string[];
  link: string;
}

const products: Product[] = [
  {
    title: "1 - 2 levels",
    description: "12 video practical lessons that activate the body's energy system",
    price: "$250",
    oldPrice: "$300",
    link: "https://interpay.iain.su/store#order"
  },
  {
    title: "3 level of Initiology",
    description: "A professional level for healing sessions of organs and body systems",
    price: "$2000",
    link: "https://interpay.iain.su/store#order"
  },
  {
    title: "4 level of Initiology",
    description: "The level of the Master of Initiology. Workshops on wellness and energy Security Technologies",
    price: "$2500",
    link: "https://interpay.iain.su/store#order"
  },
  {
    title: "5 level of Initiology",
    description: "10 video practical lessons Teacher level",
    price: "$3500",
    oldPrice: "$5000",
    link: "https://interpay.iain.su/store#order"
  },
  {
    title: "Special level",
    description: "A professional level for healing sessions of organs and body systems",
    price: "$7000",
    link: "https://interpay.iain.su/store#order"
  }
];

export default function Price() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-wiki-border bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-6 pl-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Main Page
          </Link>
          <h1 className="text-2xl md:text-3xl font-serif text-foreground">
            Educational Programs Pricing
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mt-2">
            Distance learning training programs and energy practice of complementary medicine
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 pl-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col h-full border border-wiki-border rounded-lg bg-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-wiki-border">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through decoration-destructive/50">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="w-full block">
                    <Button className="w-full gap-2 font-semibold">
                      <ShoppingCart className="w-4 h-4" />
                      Buy Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-slate-50 border border-wiki-border rounded-lg text-sm text-muted-foreground">
          <h4 className="font-semibold text-foreground mb-2">Note regarding payments</h4>
          <p>
            You will be redirected to our secure payment partner to complete your transaction. 
            After purchase, you will receive access instructions via email.
          </p>
        </div>
      </main>
    </div>
  );
}
