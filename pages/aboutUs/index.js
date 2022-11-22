import AppLayout from "components/AppLayout"
import BannerAlfa from "components/Banners/BannerAlfa"
import ImgOnBanner from "components/Banners/ImgOnBanner"
import ShapeDivider from "components/Banners/ShapeDivider"
import AboutUsSections from "components/AboutUsSections"
import SetScroll from "components/Utils/SetScroll"

export default function AboutUs() {
  SetScroll()

  return (
    <AppLayout
      title="About Us"
      description="pagina de inicio del citio web descripcion"
    >
      <BannerAlfa
        props={{
          imgBanner: "/images/Banners/blurry-gradient-haikei.png",
          shapeDivider: <ShapeDivider />,
          onTitle: "8 Years of Experience",
          h1Banner: "About Our Company",
          textBanner:
            "SK Cleaning Services LLC is a woman-owned small business founded. Owned and managed by Sandra Cuentas Galvan.",
          componentOnBanner: (
            <ImgOnBanner src={"/images/pexels-liliana-drew-9462220.jpg"} />
          ),
        }}
      />

      <AboutUsSections
        img="/images/pexels-polina-tankilevitch-4440627.jpg"
        data={[
          {
            title: "A little bit of our history",
            texts: [
              {
                txt: `Sandra is a mother of two with five years of experience working as a
            full time housekeeper for large cleaning providers.`,
              },
              {
                txt: `She founded SK Cleaning Services to provide quality housekeeping and
            cleaning services in the greater Pennsylvania area.`,
              },
              {
                txt: `The goal of  SK Cleaning Services is to earn the loyalty of its clients through the quality of the work it provides.`,
              },
              {
                txt: `Sandra understands that the success of her business depends upon the satisfaction of her clients.`,
              },
            ],
          },
        ]}
      />
      <AboutUsSections
        img="/images/pexels-andrea-piacquadio-3768910.jpg"
        data={[
          {
            title: "8 Years of Experience",
            texts: [
              {
                txt: `SK Cleaning Services provides reliable and thorough residential and commercial cleaning services.`,
              },
              {
                txt: `We are a woman-owned, fully licensed and insured company.`,
              },
              {
                txt: "We are located in Cheltenham, Pennsylvania and service Philadelphia and surrounding suburbs.",
              },
              {
                txt: "Our goals are to provide superior service and to earn the loyalty of our clients through the quality of our work.",
              },
            ],
          },
        ]}
        direction="row-reverse"
      />

      <AboutUsSections
        img="/images/pexels-cottonbro-4107278.jpg"
        data={[
          {
            title: "How do we do our work?",
            texts: [
              {
                txt: `SK Cleaning Services has developed its general can COVID-19 specific safety protocols in collaboration with Hernando Perez, PhD.`,
              },
              {
                txt: `Dr. Perez is an environmental and occupational health professional with expertise in the area of biological health and safety.`,
              },
              {
                txt: "You can read more about Dr. Perez on his website: www.perezihconsulting.com",
              },
              {
                txt: "Our health and safety protocols are based on science and include hygienic practices as well as the use of N95 Respirators.",
              },
            ],
          },
        ]}
      />
    </AppLayout>
  )
}
