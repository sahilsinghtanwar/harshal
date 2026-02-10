import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cafe.jpg";
import galleryFood1 from "@/assets/gallery-food-1.jpg";
import galleryChai from "@/assets/gallery-chai.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    icon: "🏛️",
    title: "Heritage Setting",
    description: "Dine within 200-year-old haveli walls adorned with original frescoes and carved sandstone.",
  },
  {
    icon: "🍛",
    title: "Authentic Flavors",
    description: "Recipes passed down through five generations, using hand-ground spices from local mandis.",
  },
  {
    icon: "🎶",
    title: "Live Folk Music",
    description: "Nightly performances by Manganiyar and Langa musicians under the open desert sky.",
  },
];

const highlights = [
  { image: galleryFood1, title: "Dal Baati Churma", desc: "Our signature dish" },
  { image: galleryChai, title: "Kulhar Chai", desc: "Brewed the ancient way" },
  { image: galleryInterior, title: "The Haveli", desc: "A timeless setting" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Rangila Dhani café interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Est. 1824 · Jodhpur
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-sand-light mb-6 leading-tight">
            Rangila Dhani
          </h1>
          <p className="font-body text-lg md:text-xl text-sand/90 max-w-xl mx-auto mb-8">
            An ancient café where Rajasthani heritage meets soulful flavors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-block px-8 py-3 bg-gold text-gold-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold/90 transition-colors"
            >
              Explore Menu
            </Link>
            <Link
              to="/about"
              className="inline-block px-8 py-3 border border-gold/60 text-gold font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="The Dhani Experience"
            subtitle="More than a café — a journey through centuries of Rajasthani culture, art, and cuisine."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-lg p-8 text-center shadow-warm hover:shadow-lg transition-shadow border border-border"
              >
                <span className="text-4xl mb-4 block">{f.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{f.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="A Taste of Tradition"
            subtitle="From our kitchen to your soul — glimpses of what awaits you."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={h.image}
                  alt={h.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-sand-light">{h.title}</h3>
                    <p className="font-body text-sm text-sand/70">{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block px-8 py-3 border border-gold/60 text-gold font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Reserve Your Table
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold text-xl">✦</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <p className="font-body text-lg text-muted-foreground max-w-lg mx-auto mb-8">
            Experience the magic of Rajasthan. Join us for an evening of authentic cuisine, folk music, and timeless hospitality.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
