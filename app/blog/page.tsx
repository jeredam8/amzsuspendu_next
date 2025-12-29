import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts, getFeaturedPost } from "@/lib/dummy-data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, thought leadership, and practical advice from our consulting experts.",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const featuredPost = getFeaturedPost();
  const otherPosts = posts.filter((post) => !post.featured);

  return (
    <>
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              data-testid="text-blog-hero-title"
            >
              Blog & Insights
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Thought leadership and practical guidance from our team of
              experienced consultants.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {featuredPost && (
            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-bold">Featured Article</h2>
              <Card
                className="overflow-hidden"
                data-testid={`card-featured-post-${featuredPost.slug}`}
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-background md:aspect-auto md:min-h-[300px]">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-6xl font-bold text-primary/20">
                        {featuredPost.title.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-8">
                    <Badge variant="secondary" className="w-fit">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="hover:text-primary"
                        data-testid={`link-featured-post-${featuredPost.slug}`}
                      >
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(featuredPost.publishedAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime} min read</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button asChild data-testid="button-read-featured">
                        <Link href={`/blog/${featuredPost.slug}`}>
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          <h2 className="mb-8 text-2xl font-bold">Latest Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Card
                key={post.slug}
                className="overflow-hidden transition-all hover:shadow-md"
                data-testid={`card-blog-post-${post.slug}`}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-4xl font-bold text-primary/20">
                      {post.title.charAt(0)}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit">
                    {post.category}
                  </Badge>
                  <CardTitle className="mt-2 line-clamp-2 text-xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary"
                      data-testid={`link-blog-post-${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
