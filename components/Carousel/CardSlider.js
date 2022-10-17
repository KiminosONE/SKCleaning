import Image from "next/image"
import ButtonPrimary from "../Utils/ButtonPrimary"

export default function CardSlider({ srcImg, title, content }) {
  return (
    <>
      <div className="cardSlider">
        <div>
          <div className="cajaImg">
            <Image src={srcImg} layout="responsive" width="512" height="512" />
          </div>

          <h5>{title}</h5>

          <ul>
            {content.split("\n").map((item, index) =>
              // eslint-disable-next-line react/jsx-key
              index < 5 ? <li>{item}</li> : <></>
            )}
          </ul>

          <ButtonPrimary
            link="/services?position=550"
            style={{ padding: "12px 20px" }}
          >
            GET STARTED
          </ButtonPrimary>
        </div>
      </div>

      <style jsx>{`
        .cardSlider {
          width: 100%;
          display: inline-block;
        }

        .cardSlider > div {
          margin: 0 3%;
          background-color: white;
          padding: 8% 7%;
        }

        .cajaImg {
          width: 45%;
        }

        .cardSlider > div > ul {
          list-style: disc;
          padding: 0 0 0 9%;
          margin: 0 0 6% 0;
        }

        h5 {
          margin: 3% 0 0 0;
          font-size: 1.3em;
          color: var(--color-primary);
          font-weight: 400;
        }

        p {
          margin: 9% 0;
        }
      `}</style>
    </>
  )
}
