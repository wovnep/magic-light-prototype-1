import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Why } from "@/components/site/Why";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Magic Light Photography — Sri Lanka's Premier Graduation Photographers" },
      {
        name: "description",
        content:
          "30+ years capturing graduations, convocations and milestone ceremonies across Sri Lanka. Cinematic, premium, unforgettable imagery by Benil Marcus.",
      },
      { property: "og:title", content: "Magic Light Photography" },
      {
        property: "og:description",
        content: "Sri Lanka's most trusted graduation & convocation photographers. Est. 1994.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Why />
      <Clients />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
