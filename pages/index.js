import AboutUsIndex from "components/IndexComponents/AboutUsIndex"
import AppLayout from "components/AppLayout"
import Banners from "components/Banners"
import ServicesIndex from "components/IndexComponents/ServicesIndex"
import TestimonialIndex from "components/IndexComponents/TestimonialIndex"

export default function Home({ Services }) {
  console.log(Services)
  return (
    <AppLayout
      title="Home"
      description="pagina de inicio del citio web descripcion"
    >
      <Banners image="/images/Banners/revo-img-slider2-update.jpg" />
      <AboutUsIndex />
      <ServicesIndex Services={Services} />
      <TestimonialIndex />
    </AppLayout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch(`http://localhost:3000/api/servicesList`)
    const data = await res.json()

    return {
      props: {
        Services: data,
      },
    }
  } catch (error) {
    console.log(error)
  }
}
