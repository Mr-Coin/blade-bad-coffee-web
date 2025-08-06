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
  MessageSquare,
  Heart,
  Clock,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// import emailjs from '@emailjs/browser'; // Uncomment when EmailJS is configured

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simple solution: Open default email client with pre-filled message
      const subject = `Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:dethomas3@att.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the default email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email Client Opened!",
        description: "Your default email client should open with a pre-filled message to Dale. Please send the email to complete your message.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Please contact Dale directly at dethomas3@att.net",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* 
  // ADVANCED EMAILJS IMPLEMENTATION (Uncomment when configured)
  // To set up EmailJS:
  // 1. Go to https://www.emailjs.com/ and create an account
  // 2. Create an email service (Gmail, Outlook, etc.)
  // 3. Create an email template
  // 4. Get your service ID, template ID, and public key
  // 5. Replace the placeholders below with your actual credentials
  
  const handleSubmitWithEmailJS = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_name: 'Dale Thomas',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
        to_email: 'dethomas3@att.net'
      };

      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID  
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out! Dale will get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Message Failed",
        description: "Sorry, there was an error sending your message. Please try again or contact Dale directly at dethomas3@att.net",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  */

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
          <Badge className="mb-4 bg-coffee-gold text-coffee-bean">Contact</Badge>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 bg-gradient-coffee bg-clip-text text-transparent">
            Contact Dale Thomas
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            Behind this website, there is no organization or any team. There is only a writer, sitting at his desk in the Midwest, with his dog Zoë keeping watch out the window for joggers, walkers, and mothers pushing babies in strollers.
          </p>
        </div>

        {/* Personal Message */}
        <Card className="mb-12 bg-gradient-plantation text-accent-foreground">
          <CardContent className="p-8 text-center">
            <Heart className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-montserrat font-bold mb-4">
              A Personal Note
            </h2>
            <p className="text-lg font-lora leading-relaxed mb-4">
              Please forgive if I'm a little slow in replies due to a full inbox. Sometimes I'm deep in writing or living life.
            </p>
            <p className="text-lg font-lora leading-relaxed">
              If you are an agent, asking for an interview, seeking a comment, asking permission to use something from one of my books and all other publishing business, contact me directly.
            </p>
          </CardContent>
        </Card>

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
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Opening Email..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
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
                      href="mailto:dethomas3@att.net"
                      className="text-accent hover:underline"
                    >
                      dethomas3@att.net
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      The best way to reach Dale for inquiries or interviews
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-accent">317.374.6876</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Dale's mobile phone number for publishing business inquiries or to chat about coffee
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
                      For fan mail and book signing requests
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Response Time
                </CardTitle>
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
                    <span className="text-sm">Mail: Allow 1-2 weeks for fan mail responses</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Dale personally responds to all messages and loves connecting with readers!
                </p>
              </CardContent>
            </Card>

            {/* Publishing Business */}
            <Card className="border-accent">
              <CardHeader>
                <CardTitle className="font-montserrat text-accent">
                  Publishing Business
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>📚 <strong>Agents:</strong> Direct contact for representation inquiries</p>
                <p>✍️ <strong>Interviews:</strong> Available for media and podcast appearances</p>
                <p>📖 <strong>Book permissions:</strong> Contact for usage rights and quotes</p>
                <p>☕ <strong>Publishing discussions:</strong> Open to industry conversations</p>
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
                      href="https://www.facebook.com/dalethomas3/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Follow on Facebook
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    asChild
                  >
                    <a 
                      href="https://www.instagram.com/dalethomas3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      Follow on Instagram
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    asChild
                  >
                    <a 
                      href="https://x.com/Managed_Mayhem" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Follow on X (Twitter)
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/dale-thomas-6b33025/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  
                  <div className="text-sm text-muted-foreground pt-2">
                    <p>Stay connected for updates on new books, writing insights, and coffee-fueled adventures!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;