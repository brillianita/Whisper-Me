import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SignIn() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="flex items-center mx-auto">
            <p className="mr-2 text-2xl font-bold">WhisperMe</p>
            <p className="text-5xl text-navy">!</p>
          </CardTitle>
          <CardDescription className="text-center">Log in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button variant="outline" className="w-11/12 border-2 text-left mr-0"><img src="../src/assets/google.png" className="w-5 mr-3" alt="" />Sign In With Google</Button>
        </CardContent>
      </Card>
    </div>
  )
}