import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Coffee, 
  Send,
  Facebook,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! Dale will get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-coffee-gold text-coffee-bean">Get in Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
            Contact Dale Thomas
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            Whether you have questions about Bad Coffee, want to discuss writing, or just say hello - 
            Dale would love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-coffee">
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-accent" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell Dale what's on your mind..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-coffee hover:shadow-coffee"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Fun Quote */}
            <Card className="mt-8 bg-gradient-plantation text-accent-foreground">
              <CardContent className="p-6 text-center">
                <Coffee className="h-8 w-8 mx-auto mb-3" />
                <p className="font-lora italic text-lg">
                  "If I don't remember you, I'll make something nice up."
                </p>
                <p className="text-sm opacity-80 mt-2">- Dale Thomas</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:dale@dalethomas.com"
                      className="text-accent hover:underline"
                    >
                      dale@dalethomas.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Best way to reach Dale for inquiries, interviews, or just to chat about coffee!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone & Fax</h4>
                    <p className="text-accent">317.216.3785</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Voice and fax line for business inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Mailing Address</h4>
                    <div className="text-muted-foreground">
                      <p>Dale Thomas</p>
                      <p>3710 Zuker Court</p>
                      <p>Carmel, IN 46032</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      For fan mail, book signing requests, or coffee samples!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat">Connect on Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    asChild
                  >
                    <a 
                      href="http://www.facebook.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Follow on Facebook
                    </a>
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    <p>More social media profiles coming soon!</p>
                    <p>Stay tuned for Twitter, Instagram, and LinkedIn updates.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Email: Usually within 24-48 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm">Phone: Best reached during business hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Social Media: Check regularly</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Dale personally responds to all messages and loves connecting with readers!
                </p>
              </CardContent>
            </Card>

            {/* Book Inquiries */}
            <Card className="border-accent">
              <CardHeader>
                <CardTitle className="font-montserrat text-accent">
                  Book-Related Inquiries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>📚 <strong>Book clubs:</strong> Dale loves joining book club discussions!</p>
                <p>✍️ <strong>Interviews:</strong> Available for podcasts, blogs, and media</p>
                <p>📖 <strong>Book signings:</strong> Inquire about virtual or in-person events</p>
                <p>☕ <strong>Coffee chats:</strong> Always up for discussing writing over coffee</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;