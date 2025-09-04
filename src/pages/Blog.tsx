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
  ArrowRight,
  Globe,
  BookOpen
} from "lucide-react";

const Blog = () => {
  // WordPress blog URL
  const wordpressUrl = "https://dalethomas3.wordpress.com";

  // Sample posts from Dale's WordPress blog (based on the actual content)
  const wordpressPosts = [
    {
      id: 1,
      title: "He's a Cheatin' you Laddie",
      excerpt: "A golf adventure at Turnberry Golf Course in Scotland, featuring caddies Billy and Sandy, and the challenges of playing a links-style course after years of Central Indiana golf.",
      date: "2016-02-17",
      readTime: "8 min read",
      category: "Golf",
      featured: true,
      url: `${wordpressUrl}/2016/02/17/hes-a-cheatin-you-laddie/`
    },
  ];

  const categories = ["All", "Golf", "Travel", "Raising Boys", "Life Advice", "Lighthouses"];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-coffee-gold text-coffee-bean">Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
            Things That Make You Go Hmmm
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            Life's funny sometimes - stories, adventures, and insights from Dale Thomas
          </p>
        </div>

        {/* WordPress Integration Notice */}
        <Card className="mb-12 bg-gradient-plantation text-accent-foreground">
          <CardContent className="p-8 text-center">
            <Globe className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-montserrat font-bold mb-4">
              Connected to WordPress Blog
            </h2>
            <p className="mb-6 opacity-90">
              This page is connected to Dale's WordPress blog at{" "}
              <a 
                href={wordpressUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-coffee-gold transition-colors"
              >
                dalethomas3.wordpress.com
              </a>
              . Click on any post to read the full article on the WordPress site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="flex items-center gap-2">
                <a href={wordpressUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Visit WordPress Blog
                </a>
              </Button>
              <Button asChild variant="outline" className="flex items-center gap-2 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                <a href={`${wordpressUrl}/feed/`} target="_blank" rel="noopener noreferrer">
                  <Rss className="h-4 w-4" />
                  RSS Feed
                </a>
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
        {wordpressPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-12 shadow-coffee">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-plantation aspect-video md:aspect-auto flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-accent-foreground" />
                </div>
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
                  <Button asChild className="bg-gradient-coffee hover:shadow-coffee">
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read Full Post
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wordpressPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="hover:shadow-warm transition-shadow duration-300">
              <CardHeader>
                <div className="aspect-video bg-gradient-plantation rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-accent-foreground" />
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
                  <Button asChild variant="ghost" size="sm" className="text-accent hover:text-accent">
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* WordPress Integration CTA */}
        <Card className="mt-16 bg-gradient-plantation text-accent-foreground">
          <CardContent className="p-8 text-center">
            <Rss className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              More Stories on WordPress
            </h3>
            <p className="text-muted-foreground mb-6 font-lora max-w-2xl mx-auto">
              Discover more posts about golf adventures, travel stories, raising boys, and life's funny moments on Dale's WordPress blog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-coffee-gold text-coffee-bean hover:bg-coffee-gold/90">
                <a href={wordpressUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  Visit Full Blog
                </a>
              </Button>
              <Button asChild variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                <a href={`${wordpressUrl}/feed/`} target="_blank" rel="noopener noreferrer">
                  <Rss className="h-4 w-4 mr-2" />
                  Subscribe to RSS
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;