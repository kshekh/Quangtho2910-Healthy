// import './globals.css'
import "@fontsource/zen-kaku-gothic-antique";
import './index.scss'
// import { Zen_Kaku_Gothic_Antique } from '@next/font/google'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body >{children}</body>
    </html>
  )
}
