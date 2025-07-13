import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Coffee, 
  ExternalLink, 
  Rss,
  Edit,
  ArrowRight
} from "lucide-react";

const Blog = () => {
  const samplePosts = [
    {
      id: 1,
      title: "Why Coffee Fuels Nicky Blade's Adventures",
      excerpt: "Exploring the deep connection between coffee culture and adventure storytelling, and how the perfect brew can inspire the perfect plot twist.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Writing Process",
      featured: true
    },
    {
      id: 2,
      title: "From Real Estate to Writing: My Journey",
      excerpt: "The unexpected path that led me from engineering and real estate to crafting Nicky Blade's world. Sometimes the best adventures come later in life.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Personal Story",
      featured: false
    },
    {
      id: 3,
      title: "Costa Rica's Coffee Fields: The Inspiration",
      excerpt: "A deep dive into the real Costa Rican coffee culture that inspired Bad Coffee's most vivid scenes. From plantation to cup, every detail matters.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Research",
      featured: false
    },
    {
      id: 4,
      title: "Character Development: Creating Nicky Blade",
      excerpt: "The evolution of Nicky from a fictional golf trip scapegoat to a fully-realized Caribbean adventurer. Character creation insights for aspiring writers.",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Writing Craft",
      featured: false
    }
  ];

  const categories = ["All", "Writing Process", "Personal Story", "Research", "Writing Craft"];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-coffee-gold text-coffee-bean">Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
            Adventures in Writing
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            Stories behind the stories, writing insights, and coffee-fueled inspiration
          </p>
        </div>

        {/* Blog Integration Notice */}
        <Card className="mb-12 bg-gradient-plantation text-accent-foreground">
          <CardContent className="p-8 text-center">
            <Rss className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-montserrat font-bold mb-4">
              Blog Integration Ready
            </h2>
            <p className="mb-6 opacity-90">
              This page is ready to connect with your existing blog or WordPress site. 
              The posts below are sample content to demonstrate the layout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Connect Existing Blog
              </Button>
              <Button variant="outline" className="flex items-center gap-2 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                <Edit className="h-4 w-4" />
                WordPress Integration
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "bg-gradient-coffee" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {samplePosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-12 shadow-coffee">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-plantation aspect-video md:aspect-auto"></div>
                <div className="p-8">
                  <Badge className="mb-4 bg-coffee-gold text-coffee-bean">Featured</Badge>
                  <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground font-lora mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <Button className="bg-gradient-coffee hover:shadow-coffee">
                    Read Full Post
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="hover:shadow-warm transition-shadow duration-300">
              <CardHeader>
                <div className="aspect-video bg-gradient-plantation rounded-lg mb-4 flex items-center justify-center">
                  <Coffee className="h-12 w-12 text-accent-foreground" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                  <Clock className="h-4 w-4 ml-2" />
                  {post.readTime}
                </div>
                <CardTitle className="font-montserrat leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-lora mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{post.category}</Badge>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16">
          <CardContent className="p-8 text-center">
            <Coffee className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Never Miss an Adventure
            </h3>
            <p className="text-muted-foreground mb-6 font-lora max-w-2xl mx-auto">
              Subscribe to get the latest posts about writing, coffee culture, and Nicky Blade's world 
              delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-gradient-coffee hover:shadow-coffee">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;