import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Coffee, BookOpen, Target, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const authorImage = "/lovable-uploads/700ffca9-1090-4561-b75e-8b1a918474ee.png";

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
              alt="Dale Thomas, Author of Dangerously Overcaffinated" 
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
                    <a href="https://www.facebook.com/dalethomas3/" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </a>
                  </Button>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Email:</strong> dethomas3@att.net</p>
                    <p><strong>Phone:</strong> 317.374.6876</p>
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
                  The Journey to Dangerously Overcaffinated
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
                    leading to <em>Dangerously Overcaffinated</em>. Dale's path reflects baby boomers' multi-career 
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
                    <p className="text-muted-foreground">Author of <em>Dangerously Overcaffinated, a Nicky Blade Adventure</em></p>
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

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-coffee-gold text-coffee-bean">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground font-lora max-w-2xl mx-auto">
              Common questions about Dale's writing journey, inspiration, and the world of Nicky Blade
            </p>
          </div>

          <Card className="shadow-coffee">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-montserrat font-semibold text-lg">
                    How did you get started writing?
                  </AccordionTrigger>
                  <AccordionContent className="font-lora text-lg leading-relaxed">
                    <p className="mb-4">
                      I waited until later in life to transition from engineering and real estate to writing because life took major positive turns, allowing me the freedom to work on my long-term goals.
                    </p>
                    <p className="mb-4">
                      I read Ken Dychtwald's book <em>Age Wave</em> in the early 1980s which inspired me to plan not to age like my parents. We now have so many more opportunities late in life than our parents.
                    </p>
                    <p>
                      I was thirty when I married, forty when I had my first child, and began considering writing as a career.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-montserrat font-semibold text-lg">
                    Why coffee?
                  </AccordionTrigger>
                  <AccordionContent className="font-lora text-lg leading-relaxed">
                    <p className="mb-4">
                      In the early 1990s, my wife and I visited Seattle, and I inquired about buying a Starbucks. Since stores are corporately owned, I decided to buy their newly issued stock and ship freshly roasted beans to our home in Indianapolis.
                    </p>
                    <p>
                      Latin American blends are one of my favorite roasts, so the story begins in the coffee fields of Costa Rica.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-montserrat font-semibold text-lg">
                    What was the inspiration for creating the main character Nicky Blade?
                  </AccordionTrigger>
                  <AccordionContent className="font-lora text-lg leading-relaxed">
                    <p className="mb-4">
                      Nicky Blade emerged as a fictional scapegoat created to cover up indiscretions. "Honey, I know it's 2 AM, but Nicky wouldn't leave the casino, and he was the keeper of the keys. Plus, he borrowed five hundred dollars."
                    </p>
                    <p>
                      Nicky traveled with me on golf vacations, to baseball games, drinking at bars, and gulping espresso at coffee houses, which caused his exploits to grow.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-montserrat font-semibold text-lg">
                    How did you become interested in the Dead Sea Scrolls?
                  </AccordionTrigger>
                  <AccordionContent className="font-lora text-lg leading-relaxed">
                    <p className="mb-4">
                      I attended a history class about the Dead Sea Scrolls at my church. Coincidentally, the Scrolls were at Chicago's Field Museum for cleaning.
                    </p>
                    <p className="mb-4">
                      When the British first discovered them, they attached the Scrolls to biology slides with scotch tape. Years later, technicians carefully scraped the gum off the scrolls using electron microscopes.
                    </p>
                    <p>
                      Soon after, I went to a lecture by a Rabbi from Hebrew University about the Dead Sea Scrolls at a nearby university.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-montserrat font-semibold text-lg">
                    Why did you self-publish and not follow mainstream publishing?
                  </AccordionTrigger>
                  <AccordionContent className="font-lora text-lg leading-relaxed">
                    <p className="mb-4">
                      Early in my writing journey, self-publishing wasn't well respected and was often seen as a last resort after agents rejected the author. I pitched my book to a few agents, but was turned down, not because they didn't recognize a good story, but because publishing is a business focused on maximizing profit.
                    </p>
                    <p className="mb-4">
                      I used the agent's feedback to improve my book and added facts about coffee. I planned to write a second book, get it published, and then have the agent ask, "Do you have anything else?"
                    </p>
                    <p>
                      Many authors don't become famous until they write their third book, then revisit and publish their first and second books.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

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
                  <a href="/books">Learn About Dangerously Overcaffinated</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/books">Buy the Book</a>
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