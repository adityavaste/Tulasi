import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "I&apos;ve tried countless products for my tan, but nothing worked like Tulasi powder. Within 3 weeks, my skin looks so much brighter and healthier. Absolutely love it!",
  },
  {
    name: "Ananya Reddy",
    location: "Bangalore",
    rating: 5,
    text: "As someone with sensitive skin, I was hesitant to try new products. But Tulasi is so gentle! No irritation, just beautiful glowing skin. My go-to skincare now.",
  },
  {
    name: "Meera Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "The best part about Tulasi is that it&apos;s completely natural. I can see and feel the difference in my skin. My stubborn tan from years of sun exposure is finally fading!",
  },
  {
    name: "Kavitha Nair",
    location: "Kerala",
    rating: 5,
    text: "Being from Kerala, I appreciate good Ayurvedic products. Tulasi brings back the traditional skincare wisdom our grandmothers used. Pure, effective, and no side effects!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            What Our Customers{" "}
            <span className="text-primary">Say</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Thousands of happy customers have transformed their skin with Tulasi. 
            Here&apos;s what some of them have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                {testimonial.text.replace(/&apos;/g, "'")}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-serif font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-secondary rounded-2xl">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-serif font-bold text-foreground">4.9/5</p>
              <p className="text-sm text-muted-foreground">Based on 5000+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
