import Head from "next/head"
import Header from "./Header"

export default function AppLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>NameApp - {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/images/icons/logoEmpresa/skLogo.png" />
      </Head>

      <Header />

      <main>{children}</main>

      <footer>
        <div className="container">foooter</div>
      </footer>
    </>
  )
}

AppLayout.defaultProps = {
  title: "hlaytftyf",
}
