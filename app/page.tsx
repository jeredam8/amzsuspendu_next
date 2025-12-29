import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Lightbulb,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Target,
    title: "Strategy Consulting",
    description:
      "Develop winning strategies that align with your vision and drive sustainable competitive advantage.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Unlock new revenue streams and accelerate growth through market expansion and innovation.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Modernize your operations with cutting-edge technology and data-driven decision making.",
  },
  {
    icon: Building2,
    title: "Operations Excellence",
    description:
      "Optimize processes, reduce costs, and improve efficiency across your organization.",
  },
  {
    icon: Users,
    title: "Organization Design",
    description:
      "Build high-performing teams and create cultures that attract and retain top talent.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Labs",
    description:
      "Foster innovation and develop new products and services that disrupt markets.",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "15+", label: "Years Experience" },
  { value: "$2B+", label: "Value Created" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <h1
              className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              data-testid="text-hero-title"
            >
              Transform Your Business{" "}
              <span className="text-primary">Vision</span> Into Reality
            </h1>
            <p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              data-testid="text-hero-subtitle"
            >
              We partner with ambitious leaders to solve their most complex
              challenges and achieve extraordinary results through data-driven
              insights and proven methodologies.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="xl" data-testid="button-hero-get-started">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                data-testid="button-hero-view-services"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
              data-testid="text-services-title"
            >
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Comprehensive consulting solutions designed to address your most
              pressing business challenges.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group transition-all hover:shadow-md"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" data-testid="button-view-all-services">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                className="text-3xl font-bold tracking-tight md:text-4xl"
                data-testid="text-why-title"
              >
                Why Choose Apex Consulting?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We combine deep industry expertise with innovative thinking to
                deliver transformative results. Our approach is collaborative,
                data-driven, and focused on sustainable impact.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Proven track record with Fortune 500 companies",
                  "Industry-leading methodologies and frameworks",
                  "Dedicated team of experienced consultants",
                  "Measurable results and ROI-focused outcomes",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                    data-testid={`text-benefit-${index + 1}`}
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BarChart3 className="h-3.5 w-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild data-testid="button-learn-more">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Rocket className="h-32 w-32 text-primary/40" />
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
            data-testid="text-cta-title"
          >
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Schedule a free consultation with our experts and discover how we
            can help you achieve your goals.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="xl"
              variant="secondary"
              data-testid="button-cta-schedule"
            >
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
