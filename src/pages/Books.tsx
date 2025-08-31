import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Coffee, 
  Download, 
  BookOpen,
  Clock,
  ScrollText,
  Mountain,
  ExternalLink,
  HelpCircle,
  Mail
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import bookCover from "@/assets/book-cover.jpg";

// Book data structure for unified template
const books = [
  {
    id: 1,
    title: "Dangerously Overcaffinated",
    subtitle: "A Nicky Blade Adventure",
    status: "available",
    statusLabel: "Available Now",
    statusBadgeClass: "bg-coffee-green text-accent-foreground",
    cover: bookCover,
    icon: Coffee,
    description: "Nicky Blade, a former Army Ranger turned coffee enthusiast, lives a carefree Caribbean life, but when a South American socialist leader funds global terrorism, threatening the US financial system, Nicky's pulled into a high-stakes adventure from Costa Rican coffee fields to a Dead Sea Scrolls plot. Dangerously Overcaffinated blends humor, action, a special field of chaos, and an unforgettable thriller.",
    keyDetails: [
      "Former Army Ranger protagonist",
      "Caribbean adventure setting", 
      "Coffee culture meets thriller",
      "Action-packed storyline"
    ],
    pricing: {
      digital: { price: "$9.99", format: "Kindle Edition" },
      paperback: { price: "$16.99", format: "Paperback" },
      hardback: { price: "$24.99", format: "Hardback" }
    },
    actions: {
      digital: { text: "Buy Digital", link: "#", variant: "default" },
      paperback: { text: "Buy Paperback", link: "#", variant: "outline" },
      hardback: { text: "Buy Hardback", link: "#", variant: "outline" }
    }
  },
  {
    id: 2,
    title: "The Thirteenth Cave",
    subtitle: "A Novel",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    statusBadgeClass: "bg-coffee-gold text-coffee-bean",
    cover: null,
    icon: Mountain,
    description: "The hero, Alexandro St. Claire, believed that the Essenes stored their writings in a series of caves to protect them from the Romans and one such cave contains writings that could impact the world's view of religion. In his quest for the thirteenth cave, St. Claire stumbles upon a mystical power that a wealthy industrialist seeks that would allow him to control commerce in the Middle East.",
    keyDetails: [
      "Ancient mysteries and archaeology",
      "Dead Sea Scrolls connection",
      "Religious historical fiction",
      "Middle East adventure"
    ],
    actions: {
      primary: { text: "Get Updates", link: "#", variant: "outline" }
    }
  }
];

const BookTemplate = ({ book }: { book: typeof books[0] }) => {
  const IconComponent = book.icon;
  
  return (
    <AnimatedSection animation="fade-in" className="mb-20">
      <div className="text-center mb-12">
        <Badge className={`mb-4 ${book.statusBadgeClass} flex items-center gap-2 mx-auto w-fit`}>
          {book.status === "coming-soon" && <Clock className="h-4 w-4" />}
          {book.statusLabel}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
          {book.title}
        </h2>
        <p className="text-lg text-muted-foreground font-lora">
          {book.subtitle}
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
                      <div className="grid lg:grid-cols-3">
            {/* Book Cover Section */}
            <div className="bg-gradient-subtle p-8 lg:p-12 flex items-center justify-center lg:col-span-1">
              <div className="relative">
                {book.cover ? (
                  <img 
                    src={book.cover} 
                    alt={`${book.title} - Book Cover`} 
                    className="rounded-lg shadow-coffee max-w-sm w-full"
                  />
                ) : (
                  <div className="w-64 h-80 bg-gradient-plantation rounded-lg shadow-coffee flex items-center justify-center">
                    <div className="text-center text-accent-foreground">
                      <ScrollText className="h-16 w-16 mx-auto mb-4" />
                      <p className="font-montserrat font-semibold">Cover Coming Soon</p>
                    </div>
                  </div>
                )}
                <div className="absolute -top-4 -right-4 bg-coffee-gold text-coffee-bean rounded-full p-3">
                  <IconComponent className="h-8 w-8" />
                </div>
              </div>
            </div>

            {/* Book Details Section */}
            <div className="p-8 lg:p-12 space-y-6 flex-1 lg:col-span-2">
              <div>
                <h3 className="text-2xl font-montserrat font-bold mb-4 text-accent">
                  {book.status === "available" ? "The Adventure Begins" : "Ancient Mysteries Await"}
                </h3>
                <p className="text-lg font-lora leading-relaxed mb-6">
                  {book.description}
                </p>
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-2 gap-3">
                {book.keyDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-coffee-gold rounded-full flex-shrink-0" />
                    {detail}
                  </div>
                ))}
              </div>

              {/* Action Section */}
              <div className="pt-6 border-t">
                {book.status === "available" && book.pricing ? (
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold mb-4">
                      Get Your Copy Today
                    </h4>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-6 border rounded-lg">
                        <Download className="h-8 w-8 mx-auto mb-2 text-accent" />
                        <h5 className="font-semibold mb-1">Digital Edition</h5>
                        <p className="text-2xl font-bold text-accent mb-2">{book.pricing.digital.price}</p>
                        <p className="text-sm text-muted-foreground mb-3">{book.pricing.digital.format}</p>
                        <Button asChild className="w-full bg-gradient-coffee min-h-[44px] px-8">
                          <a href={book.actions.digital.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {book.actions.digital.text}
                          </a>
                        </Button>
                      </div>
                      <div className="text-center p-6 border rounded-lg">
                        <BookOpen className="h-8 w-8 mx-auto mb-2 text-accent" />
                        <h5 className="font-semibold mb-1">Paperback</h5>
                        <p className="text-2xl font-bold text-accent mb-2">{book.pricing.paperback.price}</p>
                        <p className="text-sm text-muted-foreground mb-3">{book.pricing.paperback.format}</p>
                        <Button asChild variant="outline" className="w-full border-accent text-accent min-h-[44px] px-8">
                          <a href={book.actions.paperback.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {book.actions.paperback.text}
                          </a>
                        </Button>
                      </div>
                      <div className="text-center p-6 border rounded-lg">
                        <BookOpen className="h-8 w-8 mx-auto mb-2 text-accent" />
                        <h5 className="font-semibold mb-1">Hardback</h5>
                        <p className="text-2xl font-bold text-accent mb-2">{book.pricing.hardback.price}</p>
                        <p className="text-sm text-muted-foreground mb-3">{book.pricing.hardback.format}</p>
                        <Button asChild variant="outline" className="w-full border-accent text-accent min-h-[44px] px-8">
                          <a href={book.actions.hardback.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {book.actions.hardback.text}
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-muted-foreground text-center">
                        Available exclusively on{" "}
                        <a href="#" className="text-accent hover:underline">Amazon</a>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <Clock className="h-12 w-12 mx-auto mb-4 text-coffee-gold" />
                    <h4 className="text-xl font-montserrat font-semibold mb-2">
                      Coming Soon
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      This novel is currently in progress. Sign up for updates to be notified when it's available.
                    </p>
                    <Button variant="outline" className="border-coffee-gold text-coffee-gold hover:bg-coffee-cream">
                      <Mail className="h-4 w-4 mr-2" />
                      {book.actions.primary.text}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <Badge className="mb-4 bg-coffee-gold text-coffee-bean">Books</Badge>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
            Dale Thomas Books
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            From coffee-fueled adventures to ancient mysteries - explore both published and upcoming works
          </p>
        </AnimatedSection>

        {/* Books Grid */}
        {books.map((book) => (
          <BookTemplate key={book.id} book={book} />
        ))}

        {/* Coffee Culture Corner */}
        <AnimatedSection animation="slide-up" className="mb-16">
          <Card>
            <CardContent className="p-8 text-center">
              <Coffee className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-2xl font-montserrat font-bold mb-4">
                Coffee Culture Corner
              </h3>
              <p className="text-lg font-lora mb-2">
                <strong>Macchiato:</strong> A shot of espresso with a teaspoon of hot or foamed milk, 
                considered 'stained' by purists.
              </p>
              <p className="text-muted-foreground">
                In Nicky's world, every coffee tells a story - and every story fuels an adventure.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection animation="fade-in">
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
                  <AccordionTrigger>Where can I buy the books?</AccordionTrigger>
                  <AccordionContent>
                    All books are available exclusively on Amazon. You can purchase both Kindle ebooks and 
                    paperback editions through Amazon's platform for the best reading experience.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>What format are the ebooks?</AccordionTrigger>
                  <AccordionContent>
                    The ebooks are available in Kindle format through Amazon. They're compatible with all 
                    Kindle devices and the free Kindle app for smartphones, tablets, and computers.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Amazon handles all shipping and international delivery. Paperback books are available 
                    worldwide through Amazon's global network, with shipping times varying by location.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>When will The Thirteenth Cave be available?</AccordionTrigger>
                  <AccordionContent>
                    The Thirteenth Cave is currently in progress. Sign up for updates to be notified when 
                    pre-orders become available. We'll also announce the release date on our blog and social media.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I get a refund?</AccordionTrigger>
                  <AccordionContent>
                    Refund policies are handled by Amazon. Kindle books can typically be returned within 7 days, 
                    and physical books follow Amazon's standard return policy. Contact Amazon customer service 
                    for assistance with returns or refunds.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Contact Support */}
        <AnimatedSection animation="fade-in" className="mt-8">
          <Card className="bg-gradient-plantation text-accent-foreground">
            <CardContent className="p-6 text-center">
              <h3 className="font-montserrat font-semibold mb-2">
                Questions About the Books?
              </h3>
              <p className="mb-4 opacity-80">
                Have questions about the stories, characters, or writing process? Dale is here to help personally.
              </p>
              <Button variant="secondary" asChild>
                <a href="mailto:dale@dalethomas.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Dale
                </a>
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Books;