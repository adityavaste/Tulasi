import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-90" />
              <div className="absolute inset-8 bg-accent/20 rounded-full" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-8 my-8 h-[calc(100%-4rem)]">
                <Image
                  src="/images/tulasi-powder.jpg"
                  alt="Tulasi skincare powder with natural ingredients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Our Story
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
              The Ancient Secret to{" "}
              <span className="text-primary">Radiant Skin</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tulasi, named after the sacred holy basil plant revered in Ayurvedic tradition, 
              brings you the purest form of natural skincare. Our powder is crafted from 
              time-tested herbal ingredients that have been used for centuries to enhance 
              skin&apos;s natural beauty.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unlike soaps and chemical-laden products that strip your skin of its natural oils, 
              Tulasi powder works in harmony with your skin. It gently removes tan, dead skin cells, 
              and impurities while nourishing and revitalizing from within.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <p className="text-3xl font-serif font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Natural Ingredients</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <p className="text-3xl font-serif font-bold text-primary">0%</p>
                <p className="text-sm text-muted-foreground mt-1">Chemicals Added</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <p className="text-3xl font-serif font-bold text-primary">5000+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <p className="text-3xl font-serif font-bold text-primary">Zero</p>
                <p className="text-sm text-muted-foreground mt-1">Side Effects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
