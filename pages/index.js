import AboutUsIndex from "components/AboutUsIndex"
import AppLayout from "components/AppLayout"
import Banner from "components/Banner"
import ServicesIndex from "components/ServicesIndex"
import TestimonialIndex from "components/TestimonialIndex"

export default function Home() {
  return (
    <AppLayout
      title="home"
      description="pagina de inicio del citio web descripcion"
    >
      <Banner />
      <AboutUsIndex />
      <ServicesIndex />
      <TestimonialIndex />
    </AppLayout>
  )
}
