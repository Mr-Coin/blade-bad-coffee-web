import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Download, 
  BookOpen, 
  ShoppingCart, 
  Check,
  HelpCircle,
  ExternalLink,
  Star
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bookCover from "@/assets/book-cover.jpg";

const Shop = () => {
  const [selectedFormat, setSelectedFormat] = useState<'ebook' | 'paperback' | null>(null);

  const handlePurchase = (format: 'ebook' | 'paperback') => {
    // Placeholder for payment integration
    alert(`Redirecting to purchase ${format === 'ebook' ? 'ebook' : 'paperback'} - Payment integration to be implemented with Gumroad/Shopify`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-coffee-gold text-coffee-bean">Shop</Badge>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
            Get Your Copy of Bad Coffee
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            Choose your preferred format and join Nicky Blade's coffee-fueled adventure today!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Book Preview */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <img 
                  src={bookCover} 
                  alt="Bad Coffee, a Nicky Blade Adventure" 
                  className="w-full rounded-lg shadow-coffee mb-4"
                />
                <h3 className="font-montserrat font-bold text-lg mb-2">
                  Bad Coffee, a Nicky Blade Adventure
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  By Dale Thomas
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-coffee-gold text-coffee-gold" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(Reviews coming soon)</span>
                </div>
                <Badge variant="secondary" className="w-full justify-center">
                  New Release
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Purchase Options */}
          <div className="lg:col-span-2 space-y-8">
            {/* Format Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Ebook Option */}
              <Card 
                className={`cursor-pointer transition-all duration-300 ${
                  selectedFormat === 'ebook' 
                    ? 'ring-2 ring-accent shadow-warm' 
                    : 'hover:shadow-warm'
                }`}
                onClick={() => setSelectedFormat('ebook')}
              >
                <CardHeader className="text-center">
                  <Download className="h-12 w-12 mx-auto mb-2 text-accent" />
                  <CardTitle className="font-montserrat">Digital Edition</CardTitle>
                  <div className="text-3xl font-bold text-accent">$4.99</div>
                  <Badge variant="outline">Instant Download</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      EPUB format
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      DRM-free
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      Instant delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      Read on any device
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-gradient-coffee hover:shadow-coffee"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePurchase('ebook');
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Ebook Now
                  </Button>
                </CardContent>
              </Card>

              {/* Paperback Option */}
              <Card 
                className={`cursor-pointer transition-all duration-300 ${
                  selectedFormat === 'paperback' 
                    ? 'ring-2 ring-accent shadow-warm' 
                    : 'hover:shadow-warm'
                }`}
                onClick={() => setSelectedFormat('paperback')}
              >
                <CardHeader className="text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-2 text-accent" />
                  <CardTitle className="font-montserrat">Print Edition</CardTitle>
                  <div className="text-3xl font-bold text-accent">$14.99</div>
                  <Badge variant="outline">Print-on-Demand</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      Premium paper quality
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      Perfect bound
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      Ships within 3-5 days
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" />
                      Collectible edition
                    </li>
                  </ul>
                  <Button 
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePurchase('paperback');
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Paperback
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Alternative Purchase Options */}
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Also Available On
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Amazon Kindle
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Amazon Paperback
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How will I receive my ebook?</AccordionTrigger>
                    <AccordionContent>
                      After completing your purchase, you'll receive an email with a download link for your EPUB file. 
                      The ebook is DRM-free and can be read on any device that supports EPUB format, including 
                      most e-readers, tablets, and smartphones.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What is print-on-demand?</AccordionTrigger>
                    <AccordionContent>
                      Print-on-demand means your book is printed specifically for your order, ensuring you receive 
                      a fresh, high-quality copy. This also means it takes 3-5 business days to print and ship, 
                      but you're guaranteed a pristine book that hasn't been sitting in a warehouse.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I get a refund?</AccordionTrigger>
                    <AccordionContent>
                      We offer a 30-day satisfaction guarantee on all purchases. If you're not completely satisfied 
                      with your book, contact us at dale@dalethomas.com for a full refund.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                    <AccordionContent>
                      Yes! Our print-on-demand service ships worldwide. International shipping times may vary 
                      (typically 7-14 business days), and additional customs fees may apply depending on your location.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>What format is the ebook?</AccordionTrigger>
                    <AccordionContent>
                      The ebook comes in EPUB format, which is compatible with most e-readers and reading apps. 
                      It's DRM-free, so you can read it on multiple devices and transfer it between your devices freely.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="bg-gradient-plantation text-accent-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="font-montserrat font-semibold mb-2">
                  Need Help with Your Purchase?
                </h3>
                <p className="mb-4 opacity-80">
                  Have questions? Dale is here to help personally.
                </p>
                <Button variant="secondary" asChild>
                  <a href="mailto:dale@dalethomas.com">Contact Dale</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;