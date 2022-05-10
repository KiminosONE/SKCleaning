export default function BannerAlfa({ props }) {
  return (
    <>
      <section>
        <div className="cont_img_banner">
          <img src={props.imgBanner} />
          {props.shapeDivider}
        </div>

        <div className="container">
          <div className="container cont_banner_internal">
            <article style={{ ...props.styleArticle }}>
              <div>
                <span>{props.onTitle}</span>

                <h1>{props.h1Banner}</h1>
                <p>{props.textBanner}</p>
                {props.buttonArticle}
              </div>
              {props.underArticle}
            </article>

            {props.componentOnBanner}
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          height: 550px;
          position: relative;
          margin: 0 0 5% 0;
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

        .cont_banner_internal {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          position: absolute;
          top: 30%;
        }

        article {
          width: 50%;
          margin: 12% 0 0 0;
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
