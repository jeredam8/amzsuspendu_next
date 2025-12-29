import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBlogPost, getBlogPosts, getRelatedPosts } from "@/lib/dummy-data";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug, 3);

  return (
    <>
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Button
            asChild
            variant="ghost"
            className="mb-6"
            data-testid="button-back-to-blog"
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>

          <h1
            className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            data-testid="text-blog-post-title"
          >
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <User className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium text-foreground">
                  {post.author.name}
                </div>
                <div className="text-xs">{post.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground"
            data-testid="blog-post-content"
          >
            {post.content.split("\n").map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-foreground">
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }

              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-foreground">
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }

              if (trimmed.startsWith("- ")) {
                return <li key={index}>{trimmed.replace("- ", "")}</li>;
              }

              return <p key={index}>{trimmed}</p>;
            })}
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-2xl font-bold" data-testid="text-related-posts-title">
              Related Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.slug}
                  className="overflow-hidden transition-all hover:shadow-md"
                  data-testid={`card-related-post-${relatedPost.slug}`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-4xl font-bold text-primary/20">
                        {relatedPost.title.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit">
                      {relatedPost.category}
                    </Badge>
                    <CardTitle className="mt-2 line-clamp-2 text-lg">
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="hover:text-primary"
                        data-testid={`link-related-post-${relatedPost.slug}`}
                      >
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-2 text-sm">
                      {relatedPost.excerpt}
                    </CardDescription>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{formatDate(relatedPost.publishedAt)}</span>
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Want to Learn More?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Connect with our experts to discuss how these insights can be
            applied to your business.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="xl"
              variant="secondary"
              data-testid="button-blog-cta"
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
