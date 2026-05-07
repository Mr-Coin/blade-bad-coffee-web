import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check, Loader2 } from "lucide-react";

// TODO: Phase 2 — Replace Google Sheets with Mailchimp integration.
//
// SETUP INSTRUCTIONS (Google Sheets — Phase 1):
// 1. Create a Google Sheet with column A header "email" and column B header "timestamp".
// 2. Go to Extensions > Apps Script and paste this code:
//
//    function doPost(e) {
//      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//      var data = JSON.parse(e.postData.contents);
//      sheet.appendRow([data.email, new Date().toISOString()]);
//      return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
//        .setMimeType(ContentService.MimeType.JSON);
//    }
//
// 3. Deploy as Web App (Execute as: Me, Access: Anyone).
// 4. Copy the deployment URL and paste it below.

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyjc-w9aXnmp2jlS4jvttvPgyE8ucovprk0CkVZ2lgYWLkpqXNbbZSm4CKuJVX0eqOU/exec";

interface NewsletterSignupProps {
  variant?: "hero" | "footer";
  className?: string;
}

const NewsletterSignup = ({ variant = "hero", className = "" }: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "submitting") return;

    if (!GOOGLE_SHEETS_URL) {
      console.warn("Newsletter signup: No Google Sheets URL configured.");
      // Still show success so the user isn't confused — the email just won't be stored
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
      setEmail("");
      return;
    }

    setStatus("submitting");
    try {
      const formData = new FormData();
      formData.append("email", email);
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className={`flex space-x-2 ${className}`}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
        />
        <Button variant="secondary" size="sm" type="submit" className="shrink-0" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : status === "success" ? (
            <Check className="h-4 w-4" />
          ) : (
            <Mail className="h-4 w-4" />
          )}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 w-full max-w-lg ${className}`}>
      <Mail className="h-5 w-5 text-white flex-shrink-0" />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Join Dale's mailing list for posts and updates..."
        required
        className="bg-transparent border-white/30 text-white placeholder:text-white/70 min-w-0"
      />
      <Button variant="secondary" size="sm" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : status === "success" ? (
          <>
            <Check className="h-4 w-4 mr-1" />
            Done
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  );
};

export default NewsletterSignup;
