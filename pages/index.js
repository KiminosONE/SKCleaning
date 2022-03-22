import AboutUsIndex from "components/IndexComponents/AboutUsIndex"
import AppLayout from "components/AppLayout"
import Banners from "components/Banners"
import ServicesIndex from "components/IndexComponents/ServicesIndex"
import TestimonialIndex from "components/IndexComponents/TestimonialIndex"

export default function Home() {
  return (
    <AppLayout
      title="Home"
      description="pagina de inicio del citio web descripcion"
    >
      <Banners image="/images/Banners/revo-img-slider2-update.jpg" />
      <AboutUsIndex />
      <ServicesIndex />
      <TestimonialIndex />
    </AppLayout>
  )
}
