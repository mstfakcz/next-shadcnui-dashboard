import { DarkMode } from "@/components/ui/dark-mode"

export default function Dashboard() {
  return (
    <>
      <DarkMode/>
      <h1 className="font-bold text-[30px]">Gösterge Paneli</h1>
      <ul>
        <li><a className="text-xs" href="/">Anasayfa</a></li>
        <li><a className="text-xs" href="/auth/login">Giriş Yap</a></li>
        <li><a className="text-xs" href="/auth/register">Kayıt Ol</a></li>
        <li><a className="text-xs" href="/dashboard">Gösterge Paneli</a></li>
      </ul>
    </>
  );
}
