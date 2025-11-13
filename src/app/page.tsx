import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Authentic shadcn/ui Project
          </h1>
          <p className="text-xl text-muted-foreground">
            All components installed via CLI from official registry
          </p>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Next.js 16</Badge>
          <Badge variant="secondary">shadcn/ui</Badge>
        </div>

        {/* Button Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Button Component</CardTitle>
            <CardDescription>
              Installed via: npx shadcn@latest add button
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">★</Button>
            </div>
          </CardContent>
        </Card>

        {/* Card Component */}
        <Card>
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>
              Installed via: npx shadcn@latest add card
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This card demonstrates the shadcn/ui Card component with proper
              CardHeader, CardTitle, CardDescription, and CardContent structure.
            </p>
          </CardContent>
        </Card>

        {/* Form Components */}
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <CardDescription>
              Input, Label installed via CLI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </CardContent>
        </Card>

        {/* Avatar Component */}
        <Card>
          <CardHeader>
            <CardTitle>Avatar Component</CardTitle>
            <CardDescription>
              Installed via: npx shadcn@latest add avatar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Skeleton Component */}
        <Card>
          <CardHeader>
            <CardTitle>Skeleton Component</CardTitle>
            <CardDescription>
              Installed via: npx shadcn@latest add skeleton
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>
            ✅ All components verified as authentic shadcn/ui
          </p>
          <p>
            ✅ Installed via CLI: npx shadcn@latest add [component]
          </p>
          <p>
            ✅ components.json properly configured
          </p>
        </div>
      </div>
    </div>
  )
}