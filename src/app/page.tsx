import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Code, Sparkles } from "lucide-react"

const title = "shadcn/ui Components"
const subtitle = "Powered by Base UI"
const description = "Beautifully crafted shadcn/ui components providing a solid foundation to build modern and elegant interfaces with speed."

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

const features = [
  { name: 'Beautifully Crafted', icon: Sparkles },
  { name: 'Fully Accessible', icon: Check },
  { name: 'Customizable', icon: Code },
  { name: 'Open Source', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Powered by Base UI', icon: Code },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mt-4">
              {subtitle}
            </p>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/docs">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/docs/components">
                  Components
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={index} 
                    className="p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors flex items-start gap-4"
                  >
                    {Icon && (
                      <div className="p-2 rounded-md bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-medium text-foreground">
                        {feature.name}
                      </h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Built with ❤️ by the community</p>
        </div>
      </footer>
    </div>
  )
}