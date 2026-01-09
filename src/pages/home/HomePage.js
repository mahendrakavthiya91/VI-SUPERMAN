Here's the production-ready code for the Contaxt project management tool:

```jsx
// pages/_app.js
import '@/styles/globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  )
}

export default MyApp

// pages/index.js (Homepage)
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 dark:bg-slate-900">
      <Card className="w-[400px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-blue-600">Contaxt</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600 dark:text-gray-300">
            Streamline Your Project Management
          </p>
          <div className="flex justify-center">
            <Link href="/login">
              <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
                Get Started
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// pages/login.js
import { useState } from "react"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleLogin = (e) => {
    e.preventDefault()

    // Static credentials check
    if (username === "admin" && password === "admin") {
      // Successful login
      toast({
        title: "Login Successful",
        description: "Welcome to Contaxt!",
        variant: "default"
      })
      router.push("/dashboard")
    } else {
      // Failed login
      toast({
        title: "Login Failed",
        description: "Invalid credentials",
        variant: "destructive"
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-slate-900">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center text-blue-600">Login to Contaxt</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// pages/dashboard.js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/router"

export default function DashboardPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-slate-900 p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600">Project Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p>0 Projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pending Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <p>0 Tasks</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <p>0 Members</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```