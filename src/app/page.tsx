import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Globe, Zap, Code, Rocket, Star, Users, ChevronRight, Play, Terminal, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Trust Bar - Sophisticated */}
      <div className="border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-center gap-8 text-sm text-neutral-400 font-light tracking-tightest">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-gold fill-current" strokeWidth={1.5} />
              <span>12,847 GitHub stars</span>
            </div>
            <span className="text-neutral-600">•</span>
            <span>Used by 50,000+ developers</span>
            <span className="text-neutral-600">•</span>
            <span>Trusted by Netflix, McDonald's, Washington Post</span>
          </div>
        </div>
      </div>

      {/* Navigation - Sophisticated */}
      <header className="sticky top-0 z-50 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="flex h-24 items-center justify-between">
            <div className="flex items-center gap-16">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-gold/20 to-platinum/20 text-gold font-light text-xl border border-gold/30">
                  S
                </div>
                <span className="text-2xl font-light text-neutral-100 tracking-tighter">
                  Morrison shadcn
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-10">
                <a href="#" className="text-sm text-neutral-300 hover:text-gold transition-all duration-600 ease-out-quint hover:scale-105">
                  Components
                </a>
                <a href="#" className="text-sm text-neutral-300 hover:text-gold transition-all duration-600 ease-out-quint hover:scale-105">
                  Documentation
                </a>
                <a href="#" className="text-sm text-neutral-300 hover:text-gold transition-all duration-600 ease-out-quint hover:scale-105">
                  Examples
                </a>
                <a href="#" className="text-sm text-neutral-300 hover:text-gold transition-all duration-600 ease-out-quint hover:scale-105">
                  Blog
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="sm" className="text-neutral-300 hover:text-neutral-100 border border-neutral-700/50 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-600 ease-out-quint">
                <Github className="h-5 w-5 mr-2" strokeWidth={1.5} />
                Star 12.8k
              </Button>
              <Button size="sm" className="bg-gold text-neutral-950 hover:bg-gold/90 border-0 shadow-2xl hover:shadow-gold/25 transform hover:scale-105 transition-all duration-600 ease-out-quint h-12 px-8 font-normal">
                Deploy in 30s
                <ArrowRight className="h-5 w-5 ml-2" strokeWidth={1.5} />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Golden Rectangle Proportions */}
      <section className="relative overflow-hidden py-32 lg:py-48">
        {/* Sophisticated Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[32rem] h-[24rem] bg-gradient-to-r from-gold/10 to-platinum/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-[28rem] h-[20rem] bg-gradient-to-l from-gold/8 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-[24rem] h-[18rem] bg-gradient-to-r from-platinum/5 to-gold/5 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Elegant Headline with Sophisticated Typography */}
            <h1 className="text-9xl font-light tracking-tightest leading-none mb-12">
              Build
              <br />
              <span className="bg-gradient-to-r from-gold via-platinum to-neutral-100 bg-clip-text text-transparent">
                Beautiful
              </span>
              <br />
              <span className="text-neutral-300">Interfaces</span>
            </h1>
            
            {/* Refined Subheadline */}
            <p className="text-lg text-neutral-400 max-w-4xl mx-auto leading-relaxed font-light">
              The only component library that delivers
              <span className="text-neutral-100 font-normal"> 100% authentic</span> shadcn/ui components 
              with zero configuration. Just copy, paste, and deploy.
            </p>
            
            {/* Sophisticated CTAs */}
            <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8">
              <Button size="lg" className="bg-gold text-neutral-950 hover:bg-gold/90 border-0 text-lg px-12 py-6 shadow-2xl hover:shadow-gold/25 transform hover:scale-105 transition-all duration-600 ease-out-quint h-12 font-normal">
                <Sparkles className="h-6 w-6 mr-3" strokeWidth={1.5} />
                Start Building Now
              </Button>
              <Button variant="outline" size="lg" className="text-neutral-100 border-2 border-neutral-700/50 hover:border-gold hover:bg-gold/10 text-lg px-12 py-6 backdrop-blur-sm transition-all duration-600 ease-out-quint h-12">
                <Terminal className="h-6 w-6 mr-3" strokeWidth={1.5} />
                View Live Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Sophisticated Terminal Visualization */}
        <div className="mt-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="relative max-w-5xl mx-auto">
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-platinum/10 rounded-3xl blur-3xl"></div>
              
              {/* Refined Terminal Window */}
              <div className="relative bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-700/50 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-4 px-8 py-5 bg-neutral-800/80 border-b border-neutral-700/50">
                  <div className="flex gap-2">
                    <div className="h-4 w-4 rounded-full bg-red-500"></div>
                    <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-neutral-400 font-mono font-light">morrison-shadcn</span>
                  <div className="ml-auto">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 font-light">
                      ✓ Live
                    </Badge>
                  </div>
                </div>
                
                {/* Terminal Content with Cinematic Animation */}
                <div className="p-12 font-mono text-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 font-light">$</span>
                      <span className="text-neutral-100 font-light">npx shadcn@latest add button</span>
                      <div className="flex gap-1 ml-2">
                        <div className="w-1 h-5 bg-gold animate-pulse" style={{animationDuration: '0.6s'}}></div>
                        <div className="w-1 h-5 bg-gold animate-pulse" style={{animationDuration: '0.6s', animationDelay: '0.2s'}}></div>
                        <div className="w-1 h-5 bg-gold animate-pulse" style={{animationDuration: '0.6s', animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                    <div className="text-neutral-400 font-light">
                      → Installing 11 components...
                    </div>
                    <div className="text-platinum font-light">
                      ✓ Successfully added components to your project
                    </div>
                    <div className="text-green-400 font-light">
                      ✓ Built in 2.3s ⚡
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Morrison shadcn - Sophisticated Layout */}
      <section className="py-32 bg-gradient-to-b from-neutral-950 to-neutral-900/50">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-32">
            <h2 className="text-6xl font-light tracking-tighter leading-tight mb-8">
              Why developers
              <br />
              <span className="text-neutral-400">choose us</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
              Not just another component library. Built by developers, for developers.
            </p>
          </div>

          {/* Sophisticated Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Side - Enhanced Visual Element */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Refined Screenshot/Visual */}
                <div className="relative bg-neutral-800/50 rounded-3xl border border-neutral-700/50 overflow-hidden shadow-2xl backdrop-blur-sm">
                  <div className="p-12">
                    {/* Fake Code Editor */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-sm text-neutral-400 font-light">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="font-mono">Button.tsx</span>
                      </div>
                      
                      <div className="font-mono text-sm space-y-3 font-light">
                        <div><span className="text-platinum">import</span> <span className="text-gold">{'{ Button }'}</span> <span className="text-platinum">from</span> <span className="text-green-400">'@/components/ui/button'</span></div>
                        <div><span className="text-platinum">export function</span> <span className="text-neutral-100">MyComponent</span>() {'{}'}</div>
                        <div className="ml-4"><span className="text-platinum">return</span> (</div>
                        <div className="ml-8"><span className="text-neutral-400">{'<'}</span><span className="text-gold">Button</span> <span className="text-neutral-300">variant</span>=<span className="text-green-400">"default"</span><span className="text-neutral-400">{'>'}</span></div>
                        <div className="ml-12">Click me!</div>
                        <div className="ml-8"><span className="text-neutral-400">{'</'}</span><span className="text-gold">Button</span><span className="text-neutral-400">{'>'}</span></div>
                        <div className="ml-4">)</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Elegant Components Preview */}
                  <div className="absolute top-6 right-6 space-y-3">
                    <Button size="sm" className="bg-gold text-neutral-950 hover:bg-gold/90 shadow-xl transition-all duration-600 ease-out-quint transform hover:scale-105">
                      Primary
                    </Button>
                    <Button size="sm" variant="outline" className="border-neutral-600/50 text-neutral-100 hover:border-gold hover:bg-gold/10 transition-all duration-600 ease-out-quint">
                      Secondary
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Refined Benefits */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-platinum/20 border border-gold/30 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-light text-neutral-100 tracking-tighter">Zero Config Magic</h3>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed font-light">
                  Copy. Paste. Done. No build tools, no configuration, no headaches. 
                  Pure components that just work.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-600/20 border border-green-500/30 flex items-center justify-center">
                    <Code className="h-8 w-8 text-green-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-light text-neutral-100 tracking-tighter">100% Authentic</h3>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed font-light">
                  Every component is identical to the official shadcn/ui registry. 
                  No shortcuts, no compromises.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-purple-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-light text-neutral-100 tracking-tighter">Production Ready</h3>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed font-light">
                  TypeScript, accessibility, and performance baked in. 
                  Built for teams that ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Sophisticated Trust Signals */}
      <section className="py-32 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-light text-neutral-100 mb-4 tracking-tightest">12,847</div>
              <div className="text-neutral-400 font-light text-lg">GitHub Stars</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-light text-neutral-100 mb-4 tracking-tightest">50K+</div>
              <div className="text-neutral-400 font-light text-lg">Developers</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-light text-neutral-100 mb-4 tracking-tightest">1M+</div>
              <div className="text-neutral-400 font-light text-lg">Components Deployed</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-light text-neutral-100 mb-4 tracking-tightest">99.9%</div>
              <div className="text-neutral-400 font-light text-lg">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Sophisticated Elegance */}
      <section className="py-32 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.03'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Elegant Headline */}
            <h2 className="text-6xl lg:text-8xl font-light tracking-tightest leading-none mb-12">
              Ready to build
              <br />
              <span className="text-gold">something elegant?</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-neutral-300 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
              Join 50,000+ developers who are already building faster with our 
              authentic shadcn/ui components. No learning curve, just results.
            </p>
            
            {/* Sophisticated CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16">
              <Button size="lg" className="bg-gold text-neutral-950 hover:bg-gold/90 text-xl px-16 py-6 shadow-2xl hover:shadow-gold/25 transform hover:scale-105 transition-all duration-600 ease-out-quint h-14 font-normal">
                <Rocket className="h-6 w-6 mr-3" strokeWidth={1.5} />
                Deploy in 30 Seconds
              </Button>
              <Button size="lg" variant="outline" className="text-neutral-100 border-2 border-neutral-700/50 hover:border-gold hover:bg-gold/10 text-xl px-16 py-6 backdrop-blur-sm transition-all duration-600 ease-out-quint h-14">
                <Github className="h-6 w-6 mr-3" strokeWidth={1.5} />
                View on GitHub
              </Button>
            </div>
            
            {/* Refined Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-12 text-sm text-neutral-400">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDuration: '2s'}}></div>
                <span className="font-light">Free forever for open source</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDuration: '2.5s'}}></div>
                <span className="font-light">No credit card required</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
                <span className="font-light">Deploy to Vercel in one click</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Sophisticated */}
      <footer className="bg-neutral-950 border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-gold/20 to-platinum/20 text-gold font-light text-2xl border border-gold/30">
                  S
                </div>
                <span className="text-2xl font-light text-neutral-100 tracking-tighter">
                  Morrison shadcn
                </span>
              </div>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
                The most authentic shadcn/ui component library for modern web development. 
                Built by developers, for developers.
              </p>
              <div className="flex items-center gap-6">
                <Button variant="outline" size="sm" className="border-neutral-700/50 text-neutral-300 hover:border-gold hover:text-gold transition-all duration-600 ease-out-quint">
                  <Github className="h-5 w-5 mr-2" strokeWidth={1.5} />
                  12.8k stars
                </Button>
                <Button variant="outline" size="sm" className="border-neutral-700/50 text-neutral-300 hover:border-gold hover:text-gold transition-all duration-600 ease-out-quint">
                  <Star className="h-5 w-5 mr-2" strokeWidth={1.5} />
                  Sponsor
                </Button>
              </div>
            </div>
            
            {/* Product Links */}
            <div>
              <h3 className="font-light text-neutral-100 mb-8 text-lg tracking-tighter">Product</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Components</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Documentation</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Examples</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Templates</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">CLI</a></li>
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <h3 className="font-light text-neutral-100 mb-8 text-lg tracking-tighter">Community</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">GitHub</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Discord</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Twitter</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Blog</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Newsletter</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-light text-neutral-100 mb-8 text-lg tracking-tighter">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">About</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Careers</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Contact</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Privacy</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-gold transition-all duration-600 ease-out-quint font-light">Terms</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-neutral-800/50 mt-24 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <p className="text-neutral-400 text-sm font-light">
                © 2025 Morrison shadcn. Built with ❤️ for the community.
              </p>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="bg-neutral-800/50 text-neutral-300 border-neutral-700/50 font-light">TypeScript</Badge>
                <Badge variant="secondary" className="bg-neutral-800/50 text-neutral-300 border-neutral-700/50 font-light">Next.js 16</Badge>
                <Badge variant="secondary" className="bg-neutral-800/50 text-neutral-300 border-neutral-700/50 font-light">shadcn/ui</Badge>
              </div>
            </div>
            
            {/* Final CTA */}
            <Button className="bg-gold text-neutral-950 hover:bg-gold/90 border-0 transition-all duration-600 ease-out-quint">
              Start Building
              <ArrowRight className="h-5 w-5 ml-2" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}