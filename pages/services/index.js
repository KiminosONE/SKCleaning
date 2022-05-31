import AppLayout from "components/AppLayout"
import BannerAlfa from "components/Banners/BannerAlfa"
import ImgOnBanner from "components/Banners/ImgOnBanner"
import ShapeDivider from "components/Banners/ShapeDivider"
import ButtonPrimary from "components/ButtonPrimary"
import ServiceCards from "components/ServiceCards"
import ServicePackages from "components/ServicePackages"
export default function Services({ Services }) {
  return (
    <AppLayout
      title="Services"
      description="pagina de inicio del citio web descripcion"
      dataHeader={{ "background-color": "#ffff" }}
    >
      <BannerAlfa
        props={{
          imgBanner: "/images/Banners/blurry-gradient-haikei.png",
          shapeDivider: <ShapeDivider />,
          styleArticle: {
            margin: "8% 0 0 0",
          },
          onTitle: "8 Years of Experience",
          h1Banner: "Our services",
          textBanner:
            "SK Cleaning Services LLC is a woman-owned small business founded. Owned and managed by Sandra Cuentas Galvan.",
          buttonArticle: (
            <ButtonPrimary
              link="/contactUs"
              style={{
                margin: "3% 0 0 0",
                "background-color": "var(--color-tertiary)",
              }}
            >
              contact us
            </ButtonPrimary>
          ),
          componentOnBanner: (
            <ImgOnBanner
              src={"/images/pexels-karolina-grabowska-4239031.jpg"}
              style={{
                "margin-right": "0",
              }}
            />
          ),
        }}
      />

      <ServicePackages Services={Services} />
      <ServiceCards Services={Services} />
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
