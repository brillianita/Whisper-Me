import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
  MessageSquareText,
  KeyRound,
  Pointer,
  Users
} from 'lucide-react'


export default function Home() {
  return (
    <>
      {/* Navigation */}
      <NavigationMenu className="fixed left-0 right-0 max-w-full flex justify-between items-center bg-dark-orange/[0.3] text-white hover:bg-dark-orange">
        <NavigationMenuLink className="">
          <a href="/" className="font-semibold flex items-center">
            <p className="m-2 ml-4 text-xl">WhisperMe</p>
            <p className="text-5xl text-navy">!</p>
          </a>
        </NavigationMenuLink>
        <div className="flex">
          <NavigationMenuLink className="p-5 hover:bg-white/[0.2] hover:text-white hover:font-bold">
            <a href="/">
              Home
            </a>
          </NavigationMenuLink>
          <NavigationMenuLink className="p-5  hover:bg-white/[0.2] hover:text-white hover:font-bold">
            <a href="/" className="hover:font-bold">
              SignIn
            </a>
          </NavigationMenuLink >
          <NavigationMenuLink className="p-5 hover:bg-white/[0.2] hover:text-white hover:font-bold">
            <a href="/" className="hover:font-bold">
              SignUp
            </a>
          </NavigationMenuLink>
        </div>
      </NavigationMenu>

      {/* Jumbotron */}
      <div className="relative w-full h-[700px] overflow-hidden-lg">
        <img src="../src/assets/bg-jumbotron-4.png" alt="Jumbotron Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <div className="space-y-4">
            <div className="flex justify-center items-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mr-3">WhisperMe</h1>
              <h1 className="text-8xl font-bold text-white mr-3 text-navy animate-pulse">!</h1>
            </div>
            <p className="text-lg text-white md:text-xl">
              "Whisper Your Secrets, Hear the Unknown – Dive into the World of Anonymous Chats!"
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started
            </a> */}
          </div>
        </div>
      </div>

      {/* Why WhisperMe? */}
      <div>
        <h2 className="text-4xl font-bold text-center">Why Use WhisperMe ?</h2>
        <div className="grid grid-cols-2 gap-2 mt-10">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex bg-dark-orange rounded-full items-center size-16 justify-center mb-3 place-self-center">
              <MessageSquareText color="white" size={30} className="" />
            </div>
            <h6 className="font-bold text-xl">Receive Honest Feedback</h6>
            <p className="m-2 text-lg">Get genuine insights and opinions without biases.</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex bg-dark-orange rounded-full items-center size-16 justify-center mb-3">
              <KeyRound color="white" size={30} className="" />
            </div>
            <h6 className="font-bold text-xl">Maintain Privacy</h6>
            <p className="m-2 text-lg">Your responders stay anonymous, ensuring their complete privacy.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex bg-dark-orange rounded-full items-center size-16 justify-center mb-3">
              <Pointer color="white" size={30} className="" />
            </div>
            <h6 className="font-bold text-xl">Simple to Use</h6>
            <p className="m-2 text-lg">Create a link in seconds, share it, and start receiving messages.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex bg-dark-orange rounded-full items-center size-16 justify-center mb-3">
              <Users color="white" size={30} className="" />
            </div>
            <h6 className="font-bold text-xl">No Sign-Up Needed for Responders</h6>
            <p className="m-2 text-lg">Anyone with your link can message you without the hassle of creating an account.
            </p>
          </div>
        </div>
      </div>

      {/* Get Your Premium */}
      <div className="mt-10 bg-peach p-2">
        <h2 className="bg-dark-orange rounded-3xl text-3xl font-bold text-center text-white mt-5 h-16 w-auto">Choose Your WhisperMe! Experience</h2>
        <div>
          <h5 className="font-bold text-2xl">Free Plan</h5>
          <p className=""><b>Limited Insight: </b>Access up to 100 responses. Perfect for casual users who want a taste of anonymous feedback.</p>
        </div>
        <div>
          <h5>Premium Plan</h5>
          <p> <b>Unlimited Responses: </b>Dive deep with unlimited responses. Ideal for those who seek extensive interactions and full insights without boundaries.</p>
        </div>
      </div>
    </>
  )
}
