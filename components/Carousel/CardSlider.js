import Image from "next/image"
import ButtonPrimary from "../ButtonPrimary"

export default function CardSlider({ srcImg, title }) {
  return (
    <>
      <div className="cardSlider">
        <div>
          <div className="cajaImg">
            <Image src={srcImg} layout="responsive" width="512" height="512" />
          </div>

          <h5>{title}</h5>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          </p>

          <ButtonPrimary link="/" style={{ padding: "12px 20px" }}>
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
          margin: 0 5%;
          background-color: white;
          padding: 10% 8%;
        }

        .cajaImg {
          width: 45%;
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
