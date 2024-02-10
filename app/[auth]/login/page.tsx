import { Metadata } from "next"
import { LoginForm } from "@/components/AuthForm"
import { DarkMode } from "@/components/ui/dark-mode"

export const metadata: Metadata = {
  title: "Giriş Yap",
  description: "Authentication forms built using the components.",
}

export default function Login() {
  return (
    <>
      <div className="h-screen flex-col items-center justify-center md:grid lg:grid">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Giriş Yap
            </h1>
            <p className="text-sm text-muted-foreground">
              E-posta adresi ve parola ile giriş yap.
            </p>
          </div>
          <LoginForm />
          <div className="text-center">
            <DarkMode/>
          </div>
        </div>
      </div>
    </>
  )
}