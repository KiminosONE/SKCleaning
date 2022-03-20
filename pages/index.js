import AboutUsIndex from "components/AboutUsIndex"
import AppLayout from "components/AppLayout"
import Banners from "components/Banners"
import ServicesIndex from "components/ServicesIndex"
import TestimonialIndex from "components/TestimonialIndex"

export default function Home() {
  return (
    <AppLayout
      title="home"
      description="pagina de inicio del citio web descripcion"
    >
      <Banners image="/images/Banners/revo-img-slider2-update.jpg" />
      <AboutUsIndex />
      <ServicesIndex />
      <TestimonialIndex />
    </AppLayout>
  )
}
