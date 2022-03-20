import AppLayout from "components/AppLayout"
import BannerInternal from "components/Banners/BannerInternal"

export default function AboutUs() {
  return (
    <AppLayout
      title="About Us"
      description="pagina de inicio del citio web descripcion"
      dataHeader={{ "background-color": "#ffff" }}
    >
      <BannerInternal image="/images/Banners/blurry-gradient-haikei.png" />
    </AppLayout>
  )
}
