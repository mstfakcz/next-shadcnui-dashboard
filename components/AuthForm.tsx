"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Input
              id="email"
              name="email"
              placeholder="E-Posta Adresi"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="password"
              name="password"
              placeholder="Parola"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Giriş Yap
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            yada devam et
          </span>
        </div>
      </div>
      <div className="relative flex justify-center">
      <Button className="mr-4" variant="outline" size="icon" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="h-4 w-4" />
        )}{" "}
      </Button>
      <Button variant="outline" size="icon" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="h-4 w-4" />
        )}{" "}
      </Button>
      </div>
      <div className="text-sm text-center">
        <span className="mr-2">Henüz bir hesaba sahip değil misin?</span>
        <a className="font-bold" href="/auth/register">Kayıt Ol</a>
      </div>
    </div>
  )
}

export function RegisterForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }
  
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Hata</AlertTitle>
        <AlertDescription>
          Bu e-posta adresi zaten kayıtlı!
        </AlertDescription>
      </Alert>
      <form onSubmit={onSubmit}>
        <div className="grid gap-3">
          <div className="grid grid-cols-2 gap-3">
            <Input
              id="name"
              name="name"
              placeholder="Ad"
              type="name"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
            <Input
              id="surname"
              name="surname"
              placeholder="Soyad"
              type="surname"
              autoCapitalize="none"
              autoComplete="surname"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-3">
            <Input
              id="email"
              name="email"
              placeholder="E-Posta Adresi"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-3">
            <Input
              id="password"
              name="password"
              placeholder="Parola"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-3">
            <Input
              id="re-password"
              name="re-password"
              placeholder="Parola Tekrarı"
              type="password"
              autoCapitalize="none"
              autoComplete="re-password"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Kayıt Ol
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            yada devam et
          </span>
        </div>
      </div>
      <div className="relative flex justify-center">
      <Button className="mr-4" variant="outline" size="icon" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="h-4 w-4" />
        )}{" "}
      </Button>
      <Button variant="outline" size="icon" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="h-4 w-4" />
        )}{" "}
      </Button>
      </div>
      <div className="text-sm text-center">
        <span className="mr-2">Zaten bir hesaba sahip misin?</span>
        <a className="font-bold" href="/auth/login">Giriş Yap</a>
      </div>
    </div>
  )
}