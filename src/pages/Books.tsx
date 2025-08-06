import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Coffee, 
  Star, 
  ShoppingCart, 
  Download, 
  BookOpen,
  MapPin,
  Compass,
  Anchor,
  Clock,
  AlertCircle,
  ScrollText,
  Mountain,
  ExternalLink,
  HelpCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bookCover from "@/assets/book-cover.jpg";

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-coffee-gold text-coffee-bean">Books</Badge>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
            Dale Thomas Books
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            From coffee-fueled adventures to ancient mysteries - explore both published and upcoming works
          </p>
        </div>

        {/* Dangerously Overcaffinated - Available Now */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500 text-white">Available Now</Badge>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Dangerously Overcaffinated
            </h2>
            <p className="text-lg text-muted-foreground font-lora">
              A Nicky Blade Adventure
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={bookCover} 
                  alt="Dangerously Overcaffinated, a Nicky Blade Adventure - Book Cover" 
                  className="rounded-lg shadow-coffee max-w-md w-full"
                />
                <div className="absolute -top-4 -right-4 bg-coffee-gold text-coffee-bean rounded-full p-3">
                  <Coffee className="h-8 w-8" />
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-montserrat font-bold mb-4 text-accent">
                  The Adventure Begins
                </h3>
                <p className="text-lg font-lora leading-relaxed mb-6">
                  Nicky Blade, a former Army Ranger turned coffee enthusiast, lives a carefree 
                  Caribbean life, but when a South American socialist leader funds global terrorism, 
                  threatening the US financial system, Nicky's pulled into a high-stakes adventure 
                  from Costa Rican coffee fields to a Dead Sea Scrolls plot.
                </p>
                <p className="text-lg font-lora leading-relaxed">
                  <em>Dangerously Overcaffinated</em> blends humor, action, a special field of chaos, 
                  and an unforgettable thriller.
                </p>
              </div>

              {/* Purchase Options */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-montserrat font-semibold mb-4">
                    Get Your Copy Today
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <Download className="h-8 w-8 mx-auto mb-2 text-accent" />
                      <h5 className="font-semibold mb-1">Digital Edition</h5>
                      <p className="text-2xl font-bold text-accent mb-2">$4.99</p>
                      <p className="text-sm text-muted-foreground mb-3">Kindle Edition</p>
                      <Button asChild className="w-full bg-gradient-coffee">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Buy on Amazon
                        </a>
                      </Button>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 text-accent" />
                      <h5 className="font-semibold mb-1">Print Edition</h5>
                      <p className="text-2xl font-bold text-accent mb-2">$14.99</p>
                      <p className="text-sm text-muted-foreground mb-3">Paperback</p>
                      <Button asChild variant="outline" className="w-full border-accent text-accent">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Buy on Amazon
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
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Character Spotlight */}
          <Card className="bg-gradient-plantation text-accent-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Anchor className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
                  Meet Nicky Blade
                </h3>
                <Badge className="bg-accent-foreground/20 text-accent-foreground border-accent-foreground/30">
                  Character Spotlight
                </Badge>
              </div>
              
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl md:text-2xl font-lora leading-relaxed mb-6">
                  "One part pirate, one part businessman. His life's shaken like a margarita, 
                  but he's always a gentleman."
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <Compass className="h-8 w-8 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Former Army Ranger</h4>
                    <p className="text-sm opacity-80">Trained for high-stakes situations</p>
                  </div>
                  <div className="text-center">
                    <Coffee className="h-8 w-8 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Coffee Connoisseur</h4>
                    <p className="text-sm opacity-80">Passionate about the perfect brew</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <h4 className="font-semibold mb-2">Caribbean Spirit</h4>
                    <p className="text-sm opacity-80">"No Problems" lifestyle advocate</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Thirteenth Cave - In Progress */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-500 text-white flex items-center gap-2 mx-auto">
              <Clock className="h-4 w-4" />
              Coming Soon
            </Badge>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              The Thirteenth Cave
            </h2>
            <p className="text-lg text-muted-foreground font-lora">
              A Novel
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Book Cover Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-plantation rounded-lg shadow-coffee flex items-center justify-center">
                  <div className="text-center text-accent-foreground">
                    <ScrollText className="h-16 w-16 mx-auto mb-4" />
                    <p className="font-montserrat font-semibold">Cover Coming Soon</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-500 text-white rounded-full p-3">
                  <Mountain className="h-8 w-8" />
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-montserrat font-bold mb-4 text-accent">
                  Ancient Mysteries Await
                </h3>
                <p className="text-lg font-lora leading-relaxed mb-6">
                  The Essenes led a life based on Christian principles but without knowing Jesus or 
                  the teachings of the early Christian church. They were scholars and excellent researchers. 
                  It was initially thought that the Essenes wrote from about 150 BC to 70 AD, but now 
                  we know their writings stretched to 100 AD.
                </p>
                <p className="text-lg font-lora leading-relaxed mb-6">
                  After the Romans' destruction of the temple in 70 AD, the Sadducees tried in vain to 
                  locate any missing caves before disappearing into history. Rabbinic Jews, taking the 
                  place of the Pharisees, also tried in vain to locate any additional caves. In total, 
                  twelve caves (the twelfth cave was discovered in 2017) have been discovered, and 
                  scholars have logged, translated, and documented their fragments.
                </p>
                <p className="text-lg font-lora leading-relaxed">
                  Many scholars and researchers believe that there could be many more caves due to the 
                  Dead Sea's periodic fluctuations.
                </p>
              </div>

              {/* Story Preview */}
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="p-6">
                  <h4 className="text-xl font-montserrat font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    Story Preview
                  </h4>
                  <p className="text-lg font-lora leading-relaxed mb-4">
                    The hero, Alexandro St. Claire, believed that the Essenes stored their writings in 
                    a series of caves to protect them from the Romans and one such cave contains writings 
                    that could impact the world's view of religion.
                  </p>
                  <p className="text-lg font-lora leading-relaxed">
                    In his quest for the thirteenth cave, St. Claire stumbles upon a mystical power that 
                    a wealthy industrialist seeks that would allow him to control commerce in the Middle East.
                  </p>
                </CardContent>
              </Card>

              {/* Coming Soon Notice */}
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                  <h4 className="text-xl font-montserrat font-semibold mb-2">
                    Coming Soon
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    This novel is currently in progress. Sign up for updates to be notified when it's available.
                  </p>
                  <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                    Get Updates
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coffee Culture Callout */}
        <section className="mb-20">
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
        </section>

        {/* Reviews Placeholder */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            Early Praise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, star) => (
                      <Star key={star} className="h-5 w-5 fill-coffee-gold text-coffee-gold" />
                    ))}
                  </div>
                  <p className="font-lora italic mb-4">
                    "Coming soon - readers are already buzzing about Nicky Blade's debut adventure!"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Review pending
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
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
        </section>

        {/* Contact Support */}
        <Card className="bg-gradient-plantation text-accent-foreground mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="font-montserrat font-semibold mb-2">
              Questions About the Books?
            </h3>
            <p className="mb-4 opacity-80">
              Have questions about the stories, characters, or writing process? Dale is here to help personally.
            </p>
            <Button variant="secondary" asChild>
              <a href="mailto:dale@dalethomas.com">Contact Dale</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Books; 