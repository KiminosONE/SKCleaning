import ShapeDivider from "components/ShapeDivider"

export default function BannerInternal({ image }) {
  return (
    <>
      <section>
        <div className="cont_img_banner">
          <img src={image} />
          <ShapeDivider />
        </div>

        <div className="container">
          <div className="container cont_banner_internal">
            <article>
              <span className="onTitle">8 Years of Experience</span>

              <h1>About Our Company</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quod iusto itaque eum numquam rem dolore officiis iure dolor.
              </p>
            </article>

            <div className="img_banner_top">
              <img src="/images/pexels-cottonbro-4107278.jpg" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cont_banner_internal {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          position: absolute;
          top: 30%;
        }

        section {
          height: 550px;
          position: relative;
        }

        .cont_img_banner {
          width: 100%;
          height: 99%;
        }

        .cont_img_banner > img:first-child {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        article {
          width: 50%;
          margin: 10% 0 0 0;
        }

        .img_banner_top {
          width: 28%;
          margin: 3% 10% 0 0;
          height: 420px;
          border-radius: 20px;
          overflow: hidden;
        }

        span {
          font-size: 14px;
          line-height: 21px;
          font-weight: 700;
          color: #ffff;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          margin: 0 0 2% 0;
        }

        p {
          line-height: 24px;
          font-weight: 400;
          color: #ffff;
        }

        h1 {
          font-size: 52px;
          line-height: 60px;
          font-weight: 700;
          color: #ffff;
          letter-spacing: -2px;
          text-align: left;
          margin: 0 0 2% 0;
        }
      `}</style>
    </>
  )
}