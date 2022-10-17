import AppLayout from "components/AppLayout"
import BannerAlfa from "components/Banners/BannerAlfa"
import ContactCards from "components/Banners/ContactCards"
import FormOnBanner from "components/Banners/FormOnBanner"
import ShapeDivider from "components/Banners/ShapeDivider"
import MapOffice from "components/Utils/MapOffice"
export default function ContactUs() {
  return (
    <AppLayout
      title="Contact Us"
      description="pagina de inicio del citio web descripcion"
      dataHeader={{ "background-color": "#ffff" }}
    >
      <BannerAlfa
        props={{
          imgBanner: "/images/Banners/blurry-gradient-haikei.png",
          shapeDivider: <ShapeDivider />,
          styleArticle: {
            margin: "5% 0 0 0",
          },
          onTitle: "8 Years of Experience",
          h1Banner: "Contact us and let us know what you think",
          textBanner:
            "SK Cleaning Services LLC is a woman-owned small business founded. Owned and managed by Sandra Cuentas Galvan.",

          underArticle: <ContactCards />,
          componentOnBanner: <FormOnBanner />,
        }}
      />

      <MapOffice />
    </AppLayout>
  )
}
