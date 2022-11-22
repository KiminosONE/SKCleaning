import AppLayout from "components/AppLayout"
import BannerAlfa from "components/Banners/BannerAlfa"
import ImgOnBanner from "components/Banners/ImgOnBanner"
import ShapeDivider from "components/Banners/ShapeDivider"

export default function Testimonials({ Services }) {
  return (
    <AppLayout
      title="Testimonials"
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

      <section>
        <section className="container">
          <div></div>
          <article>
            <form></form>
          </article>
        </section>
      </section>

      <style jsx>{``}</style>
    </AppLayout>
  )
}
