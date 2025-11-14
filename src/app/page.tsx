import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon, ArrowUpRightIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto p-8 space-y-12">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Card Demo</h1>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input id="name" placeholder="name@example.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Password</Label>
                  <Input id="framework" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button className="w-full">Login</Button>
            <CardAction className="w-full" asChild>
              <Button variant="outline">Login with Google</Button>
            </CardAction>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Button Demo</h1>
        <div className="flex items-center gap-2">
          <Button>
            <ArrowUpIcon className="mr-2 h-4 w-4" /> Click me
          </Button>
          <Button>Button</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">
            <ArrowUpRightIcon className="w-4 h-4 mr-2" /> Small
          </Button>
          <Button>
            <ArrowUpRightIcon className="w-4 h-4 mr-2" /> Default
          </Button>
          <Button size="lg">
            <ArrowUpRightIcon className="w-4 h-4 mr-2" /> Large
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Badge Demo</h1>
        <div className="flex items-center gap-2">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge>Verified</Badge>
          <Badge>8</Badge>
          <Badge>99</Badge>
          <Badge>20+</Badge>
        </div>
      </div>
    </div>
  )
}