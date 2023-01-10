import type { AppProps } from 'next/app'
import { globslStyles } from '../styles/global'
import { SessionProvider } from "next-auth/react"

globslStyles()

export default function App({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>

      <Component {...pageProps} />
    </SessionProvider>
  )
}
