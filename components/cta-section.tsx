import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const features = [
  "100% Natural Ingredients",
  "No Chemicals or Preservatives",
  "Safe for All Skin Types",
  "Free Shipping on Orders Above ₹499",
]

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-8 my-8 h-[calc(100%-4rem)]">
                <Image
                  src="/images/tulasi-powder.jpg"
                  alt="Tulasi Natural Skincare Powder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-balance">
              Ready to Transform{" "}
              <span className="text-accent">Your Skin?</span>
            </h2>
            
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Join thousands of happy customers who have discovered the power of 
              natural skincare with Tulasi powder. Your journey to glowing, 
              tan-free skin starts here.
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price & CTA */}
            <div className="pt-4">
              <div className="flex items-baseline gap-3 justify-center lg:justify-start mb-6">
                <span className="text-4xl font-serif font-bold">₹299</span>
                <span className="text-xl text-primary-foreground/60 line-through">₹499</span>
                <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  40% OFF
                </span>
              </div>
              
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10">
                Order Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <p className="mt-4 text-sm text-primary-foreground/60">
                Limited time offer. Order now and get free shipping!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
