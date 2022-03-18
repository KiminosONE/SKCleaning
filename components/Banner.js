import ButtonPrimary from "./ButtonPrimary"

export default function Banner() {
  return (
    <>
      <section>
        <div className="cont_img_banner">
          <img src="/images/revo-img-slider2-update.jpg" />
        </div>

        <div className="container">
          <article>
            <span className="onTitle">
              spanroudly Serving Small to Large Size Facilities{" "}
            </span>

            <h1>SK Cleaning services LLC</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod
              iusto itaque eum numquam rem dolore officiis iure dolor.
            </p>
            <ButtonPrimary link="/">READ MORE</ButtonPrimary>
          </article>
        </div>
      </section>

      <style jsx>{`
        .cont_img_banner {
          width: 100%;
          height: 850px;
          overflow: hidden;
        }

        .cont_img_banner > img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        section {
          position: relative;
        }

        article {
          position: absolute;
          top: 40%;
          /* left: 5%; */
          width: 47%;
        }

        span {
          font-size: 14px;
          line-height: 21px;
          font-weight: 700;
          color: rgb(51, 51, 51);
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          margin: 0 0 2% 0;
        }

        p {
          line-height: 24px;
          font-weight: 400;
          margin: 0 0 4% 0;
        }

        h1 {
          font-size: 52px;
          line-height: 60px;
          font-weight: 700;
          color: rgb(51, 51, 51);
          letter-spacing: -2px;
          text-align: left;
          margin: 0 0 2% 0;
        }
      `}</style>
    </>
  )
}
