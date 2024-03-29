import ButtonPrimary from "../Utils/ButtonPrimary"
import Image from "next/image"

import { addDocMy } from "../../firebase/client"

export default function AboutUsIndex() {
  const stylesButton = {
    width: "100%",
    "text-align": "center",
  }

  const pasadecosa = () => {
    addDocMy({ name: "juan", lastName: "gomez" })
  }

  return (
    <>
      <section>
        <section className="container">
          <div className="cont_img_aboutus_index">
            <img src="/images/perfil_sandra.png" />
          </div>

          <article>
            <h2>About Us</h2>
            <div className="cont_text_aboutUs_index">
              <p>
                SK Cleaning Services LLC is a woman-owned small business
                founded. Owned and managed by Sandra Cuentas Galvan. Sandra is a
                mother of two with five years of experience working as a full
                time housekeeper for large cleaning providers.
              </p>
              <p>
                She founded SK Cleaning Services to provide quality housekeeping
                and cleaning services in the greater Pennsylvania area.
              </p>
            </div>
            <div>
              <div className="cont_imgTxt_aboutUs_index" onClick={pasadecosa}>
                <Image
                  src="/images/firma.png"
                  layout="responsive"
                  width="1000"
                  height="408"
                />
              </div>
              <span>Sandra Cuentas Galván, CEO</span>
            </div>
          </article>

          <ul>
            <li>
              <ButtonPrimary link="/aboutUs?position=500" style={stylesButton}>
                OUR HISTORY
              </ButtonPrimary>
            </li>
            <li>
              <ButtonPrimary link="/aboutUs?position=1000" style={stylesButton}>
                OUR VALUES
              </ButtonPrimary>
            </li>
            <li>
              <ButtonPrimary link="/aboutUs?position=1500" style={stylesButton}>
                OUR PROCESS
              </ButtonPrimary>
            </li>
          </ul>
        </section>
      </section>

      <style jsx>{`
        section > section {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0 0 5% 0;
          align-items: end;
        }

        .cont_img_aboutus_index {
          width: 34%;
          border-radius: 140px;
          overflow: hidden;
        }

        article {
          width: 40%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        ul {
          width: 19%;
        }

        .behindImage {
          position: absolute;
          content: "";
          top: 50%;
          right: 0;
          width: 300px;
          height: 300px;
        }

        img {
          width: 100%;
          height: 100%;
        }

        .cont_text_aboutUs_index {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        .cont_imgTxt_aboutUs_index {
          width: 55%;
          margin: 5% 0 4% 0;
          display: block;
        }

        article > div > p:first-child {
          margin: 0 4% 0 0;
        }

        p {
          width: 46%;
        }

        h2 {
          margin: 0 0 7% 0;
        }

        span {
          font-weight: 600;
          font-size: 16px;
        }

        li {
          margin: 9% 0 0 0;
        }
      `}</style>
    </>
  )
}
