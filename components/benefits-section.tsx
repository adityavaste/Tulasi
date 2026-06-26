import { Sun, Sparkles, Shield, Droplets, Heart, Zap } from "lucide-react"

const benefits = [
  {
    icon: Sun,
    title: "Removes Tanning",
    description: "Effectively removes sun tan and dark patches, revealing your natural skin tone beneath.",
  },
  {
    icon: Sparkles,
    title: "Glowing Skin",
    description: "Promotes natural radiance and gives your skin a healthy, luminous glow from the first use.",
  },
  {
    icon: Shield,
    title: "No Side Effects",
    description: "Made from 100% natural ingredients with no chemicals, ensuring completely safe daily use.",
  },
  {
    icon: Droplets,
    title: "Deep Cleansing",
    description: "Gently cleanses pores and removes impurities without stripping natural skin moisture.",
  },
  {
    icon: Heart,
    title: "Skin Nourishment",
    description: "Rich in natural vitamins and minerals that deeply nourish and rejuvenate your skin.",
  },
  {
    icon: Zap,
    title: "Quick Results",
    description: "See visible improvement in skin texture and tone within just a few applications.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Why Choose Tulasi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            Benefits That Make Us{" "}
            <span className="text-primary">Different</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Tulasi powder is not just another skincare product. It&apos;s a complete skin transformation 
            experience backed by centuries of Ayurvedic wisdom.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
