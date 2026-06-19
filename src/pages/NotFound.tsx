import Seo from "@/components/Seo";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <>
      <Seo
        title="404 | Page not found"
        description="Requested page was not found."
        path={location.pathname}
        noindex
      />
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
}
