import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-primary"></div>
              <span className="font-semibold">shadcn/ui</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Components</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Examples</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Github className="h-4 w-4 mr-2" />
              Star
            </Button>
            <Button size="sm">
              <ArrowRight className="h-4 w-4 mr-2" />
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="container px-4 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Now supporting React 19
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Beautiful components built with Radix UI and Tailwind CSS
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Accessible and customizable components that you can copy and paste into your apps. 
              Fully customizable with no vendor lock-in.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg">
                <ArrowRight className="mr-2 h-4 w-4" />
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                View Components
              </Button>
            </div>
          </div>
        </section>

        <section className="container px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need</h2>
            <p className="mt-4 text-muted-foreground">
              Beautiful, accessible, and customizable React components that you can copy and paste into your apps.
            </p>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Button</CardTitle>
                <CardDescription>
                  Accessible button component with multiple variants and sizes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button>Default</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>
                  Flexible card container with header, content, and footer.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge>Badge</Badge>
                  <p className="text-sm text-muted-foreground">Card description</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form</CardTitle>
                <CardDescription>
                  Accessible form components built with React Hook Form.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Submit</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Input</CardTitle>
                <CardDescription>
                  Flexible input component with validation states.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-10 rounded-md border px-3 py-2 text-sm">Input field</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dialog</CardTitle>
                <CardDescription>
                  Accessible dialog component with focus management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Open Dialog</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Navigation Menu</CardTitle>
                <CardDescription>
                  Accessible navigation menu with keyboard support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">Home</Button>
                  <Button variant="ghost" size="sm">About</Button>
                  <Button variant="ghost" size="sm">Contact</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm">
                  <div className="text-muted-foreground">$</div>
                  <div className="text-foreground">npx shadcn-ui@latest init</div>
                  <div className="text-muted-foreground">✔ Would you like to use TypeScript? (recommended)</div>
                  <div className="text-muted-foreground">✔ Which style would you like to use?</div>
                  <div className="text-muted-foreground">✔ Setting up configuration.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Start building today</h2>
            <p className="mt-4 text-muted-foreground">
              Copy and paste components into your projects. No vendor lock-in, fully customizable.
            </p>
            <div className="mt-8">
              <Button size="lg">
                <ArrowRight className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}