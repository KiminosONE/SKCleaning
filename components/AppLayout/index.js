import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

export default function AppLayout({
  children,
  title,
  description,
  dataHeader,
}) {
  return (
    <>
      <Head>
        <title>SK Cleaning - {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/images/icons/logoEmpresa/skLogo.png" />
      </Head>

      <Header style={dataHeader} />

      <main>{children}</main>

      <Footer />
    </>
  )
}

AppLayout.defaultProps = {
  title: "Home",
}
