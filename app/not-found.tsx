import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
        been moved or doesn&apos;t exist.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild variant="outline" data-testid="button-go-back">
          <Link href="javascript:history.back()">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Link>
        </Button>
        <Button asChild data-testid="button-go-home">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
