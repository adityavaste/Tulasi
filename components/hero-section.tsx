"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Sparkles, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,85,51,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">100% Natural &amp; Chemical Free</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
              Unlock Your Skin&apos;s{" "}
              <span className="text-primary">Natural Glow</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the ancient wisdom of Ayurveda with Tulasi skincare powder. 
              Remove tanning, reveal radiance, and embrace skin that glows from within — 
              all without any chemicals or side effects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">No Side Effects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Visible Results</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[2rem] -rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-[2rem] rotate-3" />
              
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Woman with glowing, radiant skin holding tulasi leaves"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Product Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden relative">
                    <Image
                      src="/images/tulasi-powder.jpg"
                      alt="Tulasi Powder Product"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-foreground">Tulasi Powder</p>
                    <p className="text-sm text-muted-foreground">Pure &amp; Natural</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
