import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Globe, Zap, Code, Rocket, Star, Users, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4">
          <nav className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center bg-black text-white">
                  ▲
                </div>
                <span className="text-xl font-semibold">vercel</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Products
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Solutions
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Resources
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Star className="h-3 w-3 mr-1" />
              Trusted by leading companies
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Develop. Preview.
              <br />
              Ship.
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Vercel is a platform for frontend developers, providing the speed and reliability 
              innovators need to create at the moment of inspiration.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg">
                Start Deploying
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Github className="h-5 w-5 mr-2" />
                Explore on GitHub
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border p-8 mx-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-500">morrison-shadcn.vercel.app</span>
              </div>
              <div className="bg-gray-900 text-white p-6 rounded-lg">
                <code className="text-sm">
                  <div className="text-green-400">$</div>
                  <div>npm run build</div>
                  <div className="text-blue-400">▲</div>
                  <div className="text-green-400">Build completed successfully</div>
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight">
              Everything you need to go from
              <br />
              idea to global app
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Deploy web projects with the best frontend developer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  The speed you need to create the next big thing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Deploy in seconds with edge functions, optimized builds, and 
                  instant rollbacks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Developer First</CardTitle>
                <CardDescription>
                  Built for developers, loved by teams.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Git integration, preview deployments, and automated CI/CD 
                  with zero configuration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Global Scale</CardTitle>
                <CardDescription>
                  Fastest frontend platform on the planet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Edge network with 300+ locations, automatic image optimization, 
                  and smart caching.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Zero Configuration</CardTitle>
                <CardDescription>
                  Deploy on day one. Scale on day two.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Automatic deployments, custom domains, and environment variables 
                  built in.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Team Ready</CardTitle>
                <CardDescription>
                  Collaboration that just works.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Role-based access, team management, and enterprise-grade 
                  security and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Reliable</CardTitle>
                <CardDescription>
                  Production-grade reliability you can trust.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  99.99% uptime SLA, automatic scaling, and built-in monitoring 
                  and analytics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Start building with
              <br />
              authentic shadcn/ui
            </h2>
            <p className="mt-6 text-xl text-gray-300">
              Create beautiful interfaces with 100% authentic components from 
              the official shadcn/ui registry.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" variant="secondary">
                Get Started
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center bg-black text-white">
                  ▲
                </div>
                <span className="text-xl font-semibold">vercel</span>
              </div>
              <p className="text-sm text-gray-600">
                The best frontend development experience for teams.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Framework</a></li>
                <li><a href="#" className="hover:text-gray-900">Edge Functions</a></li>
                <li><a href="#" className="hover:text-gray-900">Analytics</a></li>
                <li><a href="#" className="hover:text-gray-900">Observability</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900">Templates</a></li>
                <li><a href="#" className="hover:text-gray-900">Community</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2025 Vercel Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">shadcn/ui</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}