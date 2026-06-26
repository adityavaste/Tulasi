import Image from "next/image"
import { Leaf, Check } from "lucide-react"

const ingredients = [
  {
    name: "Tulasi (Holy Basil)",
    benefit: "Antibacterial & skin purifying properties",
  },
  {
    name: "Turmeric",
    benefit: "Natural skin brightening & anti-inflammatory",
  },
  {
    name: "Sandalwood",
    benefit: "Cooling effect & even skin tone",
  },
  {
    name: "Rose Petals",
    benefit: "Natural moisturizing & fragrance",
  },
  {
    name: "Neem",
    benefit: "Deep cleansing & acne prevention",
  },
  {
    name: "Aloe Vera",
    benefit: "Soothing & hydrating properties",
  },
]

export function IngredientsSection() {
  return (
    <section id="ingredients" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Pure Natural Ingredients</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-balance">
              Crafted from Nature&apos;s{" "}
              <span className="text-accent">Finest Herbs</span>
            </h2>
            
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Every ingredient in Tulasi powder is carefully selected from nature&apos;s bounty. 
              We use only pure, organic herbs that have been trusted in Ayurvedic beauty 
              rituals for thousands of years.
            </p>

            {/* Ingredients List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary-foreground/5 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{ingredient.name}</p>
                    <p className="text-sm text-primary-foreground/70">{ingredient.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ingredients.jpg"
                alt="Natural Ayurvedic ingredients - tulasi, turmeric, sandalwood, rose petals"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
              <p className="text-3xl font-serif font-bold">100%</p>
              <p className="text-sm">Organic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
