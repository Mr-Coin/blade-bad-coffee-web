import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Coffee, Star, Mail, Quote, BookOpen, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import hawaiiCoffeeField1 from "@/assets/hawaii-coffee-field.jpeg";
// Import the JPG file with explicit typing
import hawaiiCoffeeField2 from "@/assets/hawaii-coffee-field2.JPG";
const authorImage = "/lovable-uploads/dale-headshot.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hawaiiCoffeeField1})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-coffee-gold text-coffee-bean border-none">
            New Release
          </Badge>
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
            From Engineering to{" "}
            <span className="text-coffee-gold">Storytelling</span>{" "}
            A Journey of Imagination
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-lora text-white/90 max-w-3xl mx-auto">
            Dale Thomas, from Carmel, Indiana, a former healthcare engineer and real estate broker, 
            turned his love for coffee and imagination into his debut novel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-coffee-gold text-coffee-bean hover:bg-coffee-gold/90 shadow-warm text-lg px-8">
              <Link to="/books">Buy Now - $4.99</Link>
            </Button>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Mail className="h-5 w-5" />
              <Input 
                placeholder="Join the adventure newsletter" 
                className="bg-transparent border-white/30 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Journey Section */}
        <AnimatedSection className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
              A Journey of Imagination
            </h2>
            <p className="text-lg text-muted-foreground font-lora max-w-2xl mx-auto">
              From healthcare engineering to real estate, and finally to storytelling - Dale's path reflects the power of following your passion
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-montserrat font-semibold mb-4 text-accent">
                The Path to Publishing
              </h3>
              <p className="text-lg font-lora leading-relaxed mb-6">
                Dale Thomas chose self-publishing to get his debut novel out in the world more quickly than with mainstream publishing. 
                This decision reflects his practical approach to life - when you have a story to tell, you tell it.
              </p>
              <p className="text-lg font-lora leading-relaxed mb-6">
                Find his novel on Amazon, where readers can discover the coffee-fueled adventures of Nicky Blade, 
                a character born from Dale's imagination and love for the perfect brew.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gradient-coffee">
                  <Link to="/books">Find on Amazon</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/about">Read Full Story</Link>
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={hawaiiCoffeeField2} 
                alt="Hawaii Coffee Field" 
                className="rounded-lg shadow-coffee w-full"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Book Teaser */}
        <AnimatedSection animation="slide-up" delay={200} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
              Meet Nicky Blade
            </h2>
            <p className="text-lg text-muted-foreground font-lora max-w-2xl mx-auto">
              One part pirate, one part businessman, shaken like a margarita
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-coffee">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-accent mb-6 mx-auto" />
              <p className="text-lg md:text-xl font-lora leading-relaxed text-center mb-8">
                "Meet Nicky Blade, one part pirate, one part businessman, shaken like a margarita. 
                In <strong>Dangerously Overcaffinated, a Nicky Blade Adventure</strong>, a South American socialist leader 
                funds global terrorism, threatening the U.S. financial system. From Costa Rican coffee 
                fields to a Dead Sea Scrolls mystery, Nicky's carefree Caribbean lifestyle meets 
                high-stakes action."
              </p>
              <div className="text-center">
                <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Link to="/books">Discover the Adventure</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Author Spotlight */}
        <AnimatedSection animation="scale-in" delay={300} className="mb-20">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            About the Author
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-montserrat font-semibold mb-4 text-accent">
                Dale Thomas
              </h3>
              <p className="text-lg font-lora leading-relaxed mb-6">
                From Carmel, Indiana, Dale's journey spans healthcare engineering, real estate brokerage, 
                and now storytelling. His debut novel represents the culmination of a life lived with 
                imagination and a love for coffee culture.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>Carmel, Indiana</span>
              </div>
              <Button asChild variant="outline">
                <Link to="/about">Read Full Bio</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={authorImage} 
                alt="Dale Thomas, Author" 
                className="rounded-lg shadow-warm w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Publishing Choice */}
        <AnimatedSection animation="fade-in" delay={400} className="mb-20">
          <Card className="bg-gradient-plantation text-accent-foreground hover-lift">
            <CardContent className="p-8 md:p-12 text-center">
              <BookOpen className="h-16 w-16 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
                Why Self-Publishing?
              </h3>
              <p className="text-lg font-lora mb-4">
                Dale chose self-publishing to get his debut novel out in the world more quickly than with mainstream publishing. 
                This decision reflects his practical approach to life - when you have a story to tell, you tell it.
              </p>
              <p className="text-sm opacity-80">
                Find his novel on Amazon, where readers can discover the coffee-fueled adventures of Nicky Blade.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Social Proof */}
        <AnimatedSection animation="slide-up" delay={500} className="mb-20">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            What Readers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, star) => (
                      <Star key={star} className="h-5 w-5 fill-coffee-gold text-coffee-gold" />
                    ))}
                  </div>
                  <p className="font-lora italic mb-4">
                    "A thrilling coffee-fueled adventure that kept me turning pages all night!"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Review coming soon...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Coffee Culture Callout */}
        <AnimatedSection animation="scale-in" delay={600}>
          <Card className="bg-gradient-plantation text-accent-foreground hover-lift">
            <CardContent className="p-8 md:p-12 text-center">
              <Coffee className="h-16 w-16 mx-auto mb-6 text-accent-foreground" />
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
                Coffee Culture Corner
              </h3>
              <p className="text-lg font-lora mb-2">
                <strong>Macchiato:</strong> A shot of espresso with a teaspoon of hot or foamed milk, 
                considered 'stained' by purists.
              </p>
              <p className="text-sm opacity-80">
                Just like Nicky Blade's adventures - pure, bold, with just the right touch of complexity.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;