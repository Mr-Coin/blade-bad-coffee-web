import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Coffee, 
  Star, 
  ShoppingCart, 
  Download, 
  BookOpen,
  MapPin,
  Compass,
  Anchor
} from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";

const Book = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-coffee-gold text-coffee-bean">New Release</Badge>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
            Bad Coffee, a Nicky Blade Adventure
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            Also known as "Over-Caffeinated" - A high-octane thriller that will keep you buzzing
          </p>
        </div>

        {/* Main Book Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Book Cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={bookCover} 
                alt="Bad Coffee, a Nicky Blade Adventure - Book Cover" 
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
              <h2 className="text-3xl font-montserrat font-bold mb-4 text-accent">
                The Adventure Begins
              </h2>
              <p className="text-lg font-lora leading-relaxed mb-6">
                Nicky Blade, a former Army Ranger turned coffee enthusiast, lives a carefree 
                Caribbean life. But when a South American socialist leader funds global terrorism, 
                threatening the U.S. financial system, Nicky's pulled into a high-stakes adventure.
              </p>
              <p className="text-lg font-lora leading-relaxed">
                From Costa Rican coffee fields to a Dead Sea Scrolls subplot, <em>Bad Coffee</em> 
                blends humor, action, and espresso-fueled chaos in an unforgettable thriller.
              </p>
            </div>

            {/* Pricing & Buy Buttons */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-4">
                  Get Your Copy Today
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Download className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <h4 className="font-semibold mb-1">Digital Edition</h4>
                    <p className="text-2xl font-bold text-accent mb-2">$4.99</p>
                    <p className="text-sm text-muted-foreground mb-3">EPUB format</p>
                    <Button asChild className="w-full bg-gradient-coffee">
                      <Link to="/shop">Buy Ebook</Link>
                    </Button>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <h4 className="font-semibold mb-1">Print Edition</h4>
                    <p className="text-2xl font-bold text-accent mb-2">$14.99</p>
                    <p className="text-sm text-muted-foreground mb-3">Print-on-demand</p>
                    <Button asChild variant="outline" className="w-full border-accent text-accent">
                      <Link to="/shop">Buy Paperback</Link>
                    </Button>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-muted-foreground text-center">
                    Also available on{" "}
                    <a href="#" className="text-accent hover:underline">Amazon KDP</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Character Spotlight */}
        <section className="mb-20">
          <Card className="bg-gradient-plantation text-accent-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Anchor className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
                  Meet Nicky Blade
                </h2>
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
        <section>
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
      </div>
    </div>
  );
};

export default Book;