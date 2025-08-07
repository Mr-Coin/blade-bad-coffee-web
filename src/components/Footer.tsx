import { Coffee, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-coffee text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Newsletter */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8" />
              <span className="font-montserrat font-bold text-xl">Dale Thomas</span>
            </div>
            <p className="text-primary-foreground/80 font-lora">
              Author of Dangerously Overcaffinated, a Nicky Blade Adventure
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-2">
              <h4 className="font-montserrat font-semibold">Stay Caffeinated</h4>
              <p className="text-sm text-primary-foreground/70">
                Get the latest updates on Nicky Blade's adventures
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="secondary" size="sm" className="shrink-0">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Dale
              </Link>
              <Link to="/books" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Books
              </Link>
              <Link to="/blog" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold">Connect</h4>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://www.facebook.com/dalethomas3/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://x.com/Managed_Mayhem" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://www.instagram.com/dalethomas3" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="text-sm text-primary-foreground/70 space-y-1">
              <p>Dale Thomas</p>
              <p>3710 Zuker Court</p>
              <p>Carmel, IN 46032</p>
              <p>317.374.6876</p>
              <p>dethomas3@att.net</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Dale Thomas. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
              "If I don't remember you, I'll make something nice up."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;