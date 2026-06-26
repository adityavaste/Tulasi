const steps = [
  {
    number: "01",
    title: "Mix the Powder",
    description: "Take 2-3 tablespoons of Tulasi powder in a clean bowl. Add rose water or plain water to create a smooth paste.",
  },
  {
    number: "02",
    title: "Apply to Skin",
    description: "Gently apply the paste on your face and body in circular motions. Ensure even coverage on tanned areas.",
  },
  {
    number: "03",
    title: "Let it Work",
    description: "Leave the paste on for 15-20 minutes. Allow the natural ingredients to penetrate and nourish your skin.",
  },
  {
    number: "04",
    title: "Rinse & Glow",
    description: "Wash off with lukewarm water using gentle circular motions. Pat dry and admire your radiant, glowing skin!",
  },
]

export function HowToUseSection() {
  return (
    <section id="how-to-use" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Simple Steps
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            How to Use{" "}
            <span className="text-primary">Tulasi Powder</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Getting glowing, tan-free skin is as easy as following these four simple steps. 
            Use 2-3 times a week for best results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative bg-card p-8 rounded-2xl border border-border text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tips */}
        <div className="mt-16 p-8 bg-card rounded-2xl border border-border max-w-3xl mx-auto">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-4 text-center">
            Pro Tips for Best Results
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <span>For dry skin, mix with milk or honey instead of water for extra moisturization.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <span>Apply on clean, slightly damp skin for better absorption of nutrients.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <span>Use consistently for 4 weeks to see significant improvement in skin tone.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
