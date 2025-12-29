"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              data-testid="text-contact-hero-title"
            >
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Ready to transform your business? Get in touch with our team to
              schedule a consultation and discover how we can help you achieve
              your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div
                      className="flex flex-col items-center justify-center py-12 text-center"
                      data-testid="contact-success-message"
                    >
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Send className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold">
                        Message Sent Successfully!
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Thank you for reaching out. We&apos;ll be in touch shortly.
                      </p>
                      <Button
                        className="mt-6"
                        onClick={() => setIsSubmitted(false)}
                        data-testid="button-send-another"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            required
                            data-testid="input-first-name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            required
                            data-testid="input-last-name"
                          />
                        </div>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            required
                            data-testid="input-email"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (optional)</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            data-testid="input-phone"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company name"
                          required
                          data-testid="input-company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help you?"
                          required
                          data-testid="input-subject"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or inquiry..."
                          rows={5}
                          required
                          data-testid="input-message"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full md:w-auto"
                        disabled={isSubmitting}
                        data-testid="button-submit-contact"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="mr-2">Sending...</span>
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <Card data-testid="card-contact-info">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                        data-testid="link-contact-email"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                        data-testid="link-contact-phone"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-sm text-muted-foreground">
                        {siteConfig.contact.address}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-business-hours">
                <CardHeader>
                  <CardTitle className="text-xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm">
                        <div className="font-medium">
                          {siteConfig.businessHours.weekdays}
                        </div>
                        <div className="text-muted-foreground">
                          {siteConfig.businessHours.weekend}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                <div className="flex h-full items-center justify-center">
                  <MapPin className="h-12 w-12 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
