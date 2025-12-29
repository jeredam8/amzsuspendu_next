import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Lightbulb,
  LineChart,
  Network,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive consulting services including strategy, digital transformation, operations excellence, and growth strategy.",
};

const services = [
  {
    id: "strategy",
    icon: Target,
    title: "Strategy Consulting",
    description:
      "Develop winning strategies that align with your vision and drive sustainable competitive advantage in rapidly evolving markets.",
    features: [
      "Corporate strategy development",
      "Market entry and expansion planning",
      "Competitive positioning analysis",
      "Strategic planning facilitation",
      "M&A strategy and due diligence",
    ],
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Unlock new revenue streams and accelerate growth through market expansion, product innovation, and customer acquisition strategies.",
    features: [
      "Revenue growth acceleration",
      "Customer segmentation and targeting",
      "Pricing optimization",
      "Go-to-market strategy",
      "Partnership and alliance development",
    ],
  },
  {
    id: "digital",
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Modernize your operations with cutting-edge technology solutions, automation, and data-driven decision making capabilities.",
    features: [
      "Digital strategy roadmapping",
      "Technology assessment and selection",
      "Process automation and AI integration",
      "Data analytics and business intelligence",
      "Cloud migration strategy",
    ],
  },
  {
    id: "operations",
    icon: Building2,
    title: "Operations Excellence",
    description:
      "Optimize processes, reduce costs, and improve efficiency across your organization with lean methodologies and best practices.",
    features: [
      "Process optimization and reengineering",
      "Supply chain transformation",
      "Cost reduction programs",
      "Performance management systems",
      "Quality improvement initiatives",
    ],
  },
  {
    id: "organization",
    icon: Users,
    title: "Organization Design",
    description:
      "Build high-performing teams and create cultures that attract, develop, and retain top talent in competitive markets.",
    features: [
      "Organizational structure design",
      "Change management programs",
      "Leadership development",
      "Talent strategy and workforce planning",
      "Culture transformation",
    ],
  },
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovation Labs",
    description:
      "Foster innovation and develop new products and services that disrupt markets and create new growth opportunities.",
    features: [
      "Innovation strategy development",
      "Design thinking workshops",
      "New product development",
      "Startup incubation programs",
      "R&D strategy and portfolio management",
    ],
  },
];

const process = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We start by deeply understanding your business, challenges, and objectives through comprehensive stakeholder interviews and data analysis.",
  },
  {
    step: 2,
    title: "Analysis",
    description:
      "Our team conducts rigorous analysis using proven frameworks and methodologies to identify opportunities and develop insights.",
  },
  {
    step: 3,
    title: "Strategy",
    description:
      "We develop tailored recommendations and a clear roadmap with prioritized initiatives and measurable success metrics.",
  },
  {
    step: 4,
    title: "Implementation",
    description:
      "We work alongside your team to execute the strategy, providing hands-on support and ensuring sustainable results.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              data-testid="text-services-hero-title"
            >
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Comprehensive consulting solutions designed to address your most
              pressing business challenges and unlock new opportunities for
              growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="overflow-hidden"
                data-testid={`card-service-detail-${service.id}`}
              >
                <CardHeader className="pb-4">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              data-testid="text-process-title"
            >
              Our Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven methodology that delivers consistent, measurable results.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.step}
                className="relative"
                data-testid={`process-step-${step.step}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Industries We Serve
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our consultants bring deep expertise across a wide range of
                industries, enabling us to deliver tailored solutions that
                address sector-specific challenges.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: LineChart, label: "Financial Services" },
                  { icon: Building2, label: "Manufacturing" },
                  { icon: Network, label: "Technology" },
                  { icon: Users, label: "Healthcare" },
                  { icon: Rocket, label: "Retail & Consumer" },
                  { icon: TrendingUp, label: "Energy & Utilities" },
                ].map((industry) => (
                  <div
                    key={industry.label}
                    className="flex items-center gap-3 rounded-lg border bg-card p-4"
                    data-testid={`industry-${industry.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <industry.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{industry.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Network className="h-24 w-24 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            data-testid="text-services-cta-title"
          >
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Contact us today to discuss how our services can help you achieve
            your business objectives.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="xl"
              variant="secondary"
              data-testid="button-services-cta"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
