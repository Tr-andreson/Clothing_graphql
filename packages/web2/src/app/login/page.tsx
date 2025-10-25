import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div>
      <Button className="absolute top-4 left-4">
        <Link href="/">Back</Link>
      </Button>
      <div className="flex items-center h-screen justify-center flex-col">
        <Card className="min-w-lg">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Select your google Id  </CardDescription>
            <Button variant={"outline"}>Login with Google</Button>
            <div className="flex items-center justify-center">
              <h5>Or</h5>
            </div>
            <Label >Email</Label>
            <Input placeholder="Enter your email" />
            <Button>Submit</Button>
          </CardHeader>

        </Card>
      </div>

    </div>
  )

}

export default LoginPage
