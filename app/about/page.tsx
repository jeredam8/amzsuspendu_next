import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Apex Consulting's mission, values, and the team of experts dedicated to transforming businesses.",
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, delivering exceptional results that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We operate with the highest ethical standards, building trust through transparency and honesty.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and new ideas, constantly pushing boundaries to find better solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, working closely with clients as true partners.",
  },
  {
    icon: Globe,
    title: "Impact",
    description:
      "We focus on creating lasting, positive impact for our clients, their stakeholders, and society.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description:
      "We take ownership of our work and hold ourselves accountable for delivering on our commitments.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    bio: "20+ years of experience in management consulting and corporate strategy.",
  },
  {
    name: "Michael Roberts",
    role: "Chief Operating Officer",
    bio: "Former Fortune 500 executive with expertise in operations and digital transformation.",
  },
  {
    name: "Emily Thompson",
    role: "Head of Strategy",
    bio: "Strategic advisor to leading global corporations across multiple industries.",
  },
  {
    name: "David Kim",
    role: "Head of Digital",
    bio: "Technology leader specializing in AI, automation, and digital innovation.",
  },
];

const milestones = [
  { year: "2009", event: "Founded in New York City" },
  { year: "2012", event: "Expanded to 50+ consultants" },
  { year: "2015", event: "Opened European headquarters" },
  { year: "2018", event: "Launched Digital Transformation practice" },
  { year: "2021", event: "Reached 500+ client milestone" },
  { year: "2024", event: "Global presence across 3 continents" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              data-testid="text-about-hero-title"
            >
              About Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              We are a team of passionate consultants dedicated to helping
              businesses achieve extraordinary results through strategic insight
              and operational excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                className="text-3xl font-bold tracking-tight md:text-4xl"
                data-testid="text-our-story-title"
              >
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Founded in 2009, Apex Consulting was born from a simple belief:
                  that every organization has the potential to achieve
                  extraordinary things with the right guidance and support.
                </p>
                <p>
                  Our founders, seasoned consultants from leading global firms,
                  saw an opportunity to create a different kind of consulting
                  company—one that combines world-class expertise with a truly
                  client-centric approach.
                </p>
                <p>
                  Today, we are proud to serve clients across industries and
                  geographies, helping them navigate complexity, seize
                  opportunities, and build lasting competitive advantage.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="h-24 w-24 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              data-testid="text-values-title"
            >
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card
                key={value.title}
                data-testid={`card-value-${value.title.toLowerCase()}`}
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              data-testid="text-team-title"
            >
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet the experienced leaders driving our mission forward.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card
                key={member.name}
                className="text-center"
                data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              data-testid="text-journey-title"
            >
              Our Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Key milestones in our growth story.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="relative border-l-2 border-primary/30 pl-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="relative mb-8 last:mb-0"
                  data-testid={`milestone-${milestone.year}`}
                >
                  <div className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="font-bold text-primary">{milestone.year}</div>
                  <div className="mt-1 text-muted-foreground">
                    {milestone.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            data-testid="text-about-cta-title"
          >
            Join Our Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Ready to work with a team that&apos;s as committed to your success as
            you are? Let&apos;s start a conversation.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="xl"
              variant="secondary"
              data-testid="button-about-cta"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
