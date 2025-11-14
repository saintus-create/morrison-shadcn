import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Globe, Zap, Code, Rocket, Star, Users, ChevronRight, Play, Terminal } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Trust Bar */}
      <div className="border-b border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>12,847 GitHub stars</span>
            </div>
            <span>•</span>
            <span>Used by 50,000+ developers</span>
            <span>•</span>
            <span>Trusted by Netflix, McDonald's, Washington Post</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <nav className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg">
                  S
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Morrison shadcn
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-8">
                <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">
                  Components
                </a>
                <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">
                  Documentation
                </a>
                <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">
                  Examples
                </a>
                <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 hover:scale-105">
                  Blog
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600">
                <Github className="h-4 w-4 mr-2" />
                Star 12.8k
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Deploy in 30s
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 lg:py-40">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            {/* Massive Headline with Strong Typography */}
            <h1 className="text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl leading-none">
              Build
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Beautiful
              </span>
              <br />
              Interfaces.
            </h1>
            
            {/* Minimal Subhead with Better Line Height */}
            <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The only component library that gives you 
              <span className="text-white font-semibold"> 100% authentic</span> shadcn/ui components 
              with zero configuration. Just copy, paste, and deploy.
            </p>
            
            {/* Primary CTA - More Prominent */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 text-lg px-8 py-6 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                <Play className="h-5 w-5 mr-3" />
                Start Building Now
              </Button>
              <Button variant="outline" size="lg" className="text-white border-2 border-gray-600 hover:border-white hover:bg-white hover:text-black text-lg px-8 py-6 backdrop-blur-sm">
                <Terminal className="h-5 w-5 mr-3" />
                View Live Demo
              </Button>
            </div>
            
            {/* Sticky CTA for later sections */}
            <div className="fixed bottom-8 right-8 z-50 lg:hidden">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-2xl">
                Deploy Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Visual - Code Terminal Animation */}
        <div className="mt-32">
          <div className="container mx-auto px-6">
            <div className="relative max-w-4xl mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
              
              {/* Terminal Window */}
              <div className="relative bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-800 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-400 font-mono">morrison-shadcn</span>
                  <div className="ml-auto">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                      ✓ Live
                    </Badge>
                  </div>
                </div>
                
                {/* Terminal Content with Animation */}
                <div className="p-8 font-mono text-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">$</span>
                      <span className="text-white">npx shadcn@latest add button</span>
                      <div className="flex gap-1 ml-2">
                        <div className="w-1 h-4 bg-blue-400 animate-pulse"></div>
                        <div className="w-1 h-4 bg-blue-400 animate-pulse animation-delay-200"></div>
                        <div className="w-1 h-4 bg-blue-400 animate-pulse animation-delay-400"></div>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      → Installing 11 components...
                    </div>
                    <div className="text-purple-400">
                      ✓ Successfully added components to your project
                    </div>
                    <div className="text-green-400">
                      ✓ Built in 2.3s ⚡
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Morrison shadcn - Asymmetrical Layout */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight leading-none">
              Why developers
              <br />
              <span className="text-gray-400">choose us</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Not just another component library. Built by developers, for developers.
            </p>
          </div>

          {/* Asymmetrical Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side - Large Visual Element */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Screenshot/Visual */}
                <div className="relative bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
                  <div className="p-8">
                    {/* Fake Code Editor */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <span>Button.tsx</span>
                      </div>
                      
                      <div className="font-mono text-sm space-y-2">
                        <div><span className="text-purple-400">import</span> <span className="text-blue-400">{'{ Button }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@/components/ui/button'</span></div>
                        <div><span className="text-purple-400">export function</span> <span className="text-yellow-400">MyComponent</span>() {'{}'}</div>
                        <div className="ml-4"><span className="text-purple-400">return</span> (</div>
                        <div className="ml-8"><span className="text-gray-400">{'<'}</span><span className="text-blue-400">Button</span> <span className="text-pink-400">variant</span>=<span className="text-green-400">"default"</span><span className="text-gray-400">{'>'}</span></div>
                        <div className="ml-12">Click me!</div>
                        <div className="ml-8"><span className="text-gray-400">{'</'}</span><span className="text-blue-400">Button</span><span className="text-gray-400">{'>'}</span></div>
                        <div className="ml-4">)</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Components Preview */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg animate-bounce">
                      Primary
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      Secondary
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Key Benefits */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Zero Config Magic</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Copy. Paste. Done. No build tools, no configuration, no headaches. 
                  Pure components that just work.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">100% Authentic</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Every component is identical to the official shadcn/ui registry. 
                  No shortcuts, no compromises.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Production Ready</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  TypeScript, accessibility, and performance baked in. 
                  Built for teams that ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Trust Signals */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">12,847</div>
              <div className="text-gray-400 font-medium">GitHub Stars</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">50K+</div>
              <div className="text-gray-400 font-medium">Developers</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">1M+</div>
              <div className="text-gray-400 font-medium">Components Deployed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">99.9%</div>
              <div className="text-gray-400 font-medium">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold and Compelling */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline with Emotional Impact */}
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-8">
              Ready to build
              <br />
              <span className="text-yellow-300">something amazing?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join 50,000+ developers who are already building faster with our 
              authentic shadcn/ui components. No learning curve, just results.
            </p>
            
            {/* Primary CTA - Multiple Actions */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-xl px-12 py-6 shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 font-bold">
                <Rocket className="h-6 w-6 mr-3" />
                Deploy in 30 Seconds
              </Button>
              <Button size="lg" variant="outline" className="text-white border-2 border-white/50 hover:border-white hover:bg-white/10 text-xl px-12 py-6 backdrop-blur-sm">
                <Github className="h-6 w-6 mr-3" />
                View on GitHub
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Free forever for open source</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span>Deploy to Vercel in one click</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-xl">
                  S
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Morrison shadcn
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                The most authentic shadcn/ui component library for modern web development. 
                Built by developers, for developers.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white">
                  <Github className="h-4 w-4 mr-2" />
                  12.8k stars
                </Button>
                <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white">
                  <Star className="h-4 w-4 mr-2" />
                  Sponsor
                </Button>
              </div>
            </div>
            
            {/* Product Links */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Components</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CLI</a></li>
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Community</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-gray-400 text-sm">
                © 2025 Morrison shadcn. Built with ❤️ for the community.
              </p>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">TypeScript</Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">Next.js 16</Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">shadcn/ui</Badge>
              </div>
            </div>
            
            {/* Final CTA */}
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
              Start Building
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}