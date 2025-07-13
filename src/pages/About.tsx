import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Coffee, BookOpen, Target } from "lucide-react";
import authorImage from "@/assets/author-headshot.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-coffee-gold text-coffee-bean">Author Spotlight</Badge>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
            About Dale Thomas
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            From Engineering to Storytelling: A Journey of Imagination
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <img 
              src={authorImage} 
              alt="Dale Thomas, Author of Bad Coffee" 
              className="rounded-lg shadow-coffee w-full max-w-md mx-auto md:mx-0"
            />
            
            {/* Social & Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold mb-4 flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-accent" />
                  Connect with Dale
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </a>
                  </Button>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Email:</strong> dale@dalethomas.com</p>
                    <p><strong>Phone:</strong> 317.216.3785</p>
                    <p><strong>Location:</strong> Carmel, Indiana</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Biography */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-montserrat font-semibold mb-6 text-accent">
                  The Journey to Bad Coffee
                </h2>
                <div className="space-y-4 font-lora text-lg leading-relaxed">
                  <p>
                    Born in Louisville, Kentucky, now in Carmel, Indiana, Dale Thomas, 55, 
                    transitioned from engineering and real estate to writing. Inspired by 
                    Ken Dychtwald's <em>Age Wave</em> and Napoleon Hill's <em>Think and Grow Rich</em>, 
                    he set a goal to write a novel.
                  </p>
                  <p>
                    His technical writing for healthcare and real estate fueled his creativity, 
                    leading to <em>Bad Coffee</em>. Dale's path reflects baby boomers' multi-career 
                    journeys, tapping imagination to craft Nicky Blade's world.
                  </p>
                  <p>
                    The character of Nicky Blade emerged from a fictional scapegoat created 
                    during golf trips and coffee house conversations, evolving into the 
                    Caribbean adventurer readers meet today.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Career Highlights */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-montserrat font-semibold mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Career Highlights
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">Engineering Background</h4>
                    <p className="text-muted-foreground">Technical expertise in problem-solving and systems thinking</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">Real Estate Broker</h4>
                    <p className="text-muted-foreground">Understanding people and market dynamics</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">Technical Writer</h4>
                    <p className="text-muted-foreground">Healthcare and real estate documentation</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold">Debut Novelist</h4>
                    <p className="text-muted-foreground">Author of <em>Bad Coffee, a Nicky Blade Adventure</em></p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Philosophy */}
            <Card className="bg-gradient-plantation text-accent-foreground">
              <CardContent className="p-8">
                <h3 className="text-xl font-montserrat font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Writing Philosophy
                </h3>
                <blockquote className="font-lora text-lg italic">
                  "Imagination is the vehicle that transforms life experiences into compelling stories. 
                  At 50+, I discovered that the best adventures are the ones we create, 
                  blending real-world knowledge with the boundless possibilities of fiction."
                </blockquote>
                <p className="mt-4 text-sm opacity-80">
                  - Dale Thomas, on crafting Nicky Blade's world
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-montserrat font-semibold mb-4">
                Ready for Nicky Blade's Adventure?
              </h3>
              <p className="text-muted-foreground mb-6 font-lora">
                Discover the world Dale has created - where coffee culture meets Caribbean adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-coffee hover:shadow-coffee">
                  <a href="/book">Learn About Bad Coffee</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/shop">Buy the Book</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;