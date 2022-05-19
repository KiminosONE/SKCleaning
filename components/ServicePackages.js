export default function ServicePackages() {
  const goldPack = [
    `Clean counters, sinks, faucets
    - Clean inside cabinets 
    - Clean appliance exteriors
    - Clean inside refrigerator 
    - Clean inside microwaves
    - Clean stove top
    - Inside oven
    - Wash floor
    - Windows
    - Baseboards`,
    `Scour sink, tub and toilet
    - Clean tile 
    - Clean mirrors
    - Vacuum throw rugs
    - Wash floor
    - Windows 
    - Baseboards
    - Clean inside cabinets`,
    `Dust
    - Wash floors
    - Vacuum carpets
    - Change beds
    - Windows
    - Baseboards`,
  ]

  const silverPack = [
    `Clean counters, sinks, faucets
    - Clean appliance exteriors
    - Clean inside microwaves
    - Clean stove top
    - Wash floor
    - Windows
    - Baseboards`,
    `Scour sink, tub and toilet
    - Clean tile 
    - Clean mirrors
    - Vacuum throw rugs
    - Wash floor
    -  Windows 
    - Baseboards`,
    `Dust
    - Wash floors
    - Vacuum carpets
    - Change beds
    - Windows
    - Baseboards`,
  ]

  return (
    <>
      <section>
        <section className="container">
          <div>
            <h2>Choose your web hosting plan</h2>
            <p>
              SK Cleaning Services LLC is a woman-owned small business founded.
              Owned and managed by Sandra Cuentas Galvan.
            </p>
            <div>
              <article className="silverPack">
                <div>
                  <div>
                    <img src="/svg/Icons/packServices/silverPack.svg" />
                  </div>
                  <h3>Silver package</h3>
                </div>
                <div>
                  <h4>KITCHEN</h4>
                  <ul>
                    {silverPack[0].split("-").map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <li>{item}</li>
                    ))}
                  </ul>
                  <h4>BATHROOMS</h4>
                  <ul>
                    {silverPack[1].split("-").map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <li>{item}</li>
                    ))}
                  </ul>
                  <h4>BEDROOMS / LIVING SPACES DINING ROOMS</h4>
                  <ul>
                    {silverPack[2].split("-").map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
              <article className="goldPack">
                <div>
                  <div>
                    <img src="/svg/Icons/packServices/goldPack.svg" />
                  </div>
                  <h3>Gold package</h3>
                </div>
                <div>
                  <h4>KITCHEN</h4>
                  <ul>
                    {goldPack[0].split("-").map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <li>{item}</li>
                    ))}
                  </ul>
                  <h4>BATHROOMS</h4>
                  <ul>
                    {goldPack[1].split("-").map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <li>{item}</li>
                    ))}
                  </ul>
                  <h4>BEDROOMS / LIVING SPACES DINING ROOMS</h4>
                  <ul>
                    {goldPack[2].split("-").map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
              <article className="bronzePack">
                <div>
                  <div>
                    <img src="/svg/Icons/packServices/bronzePack.svg" />
                  </div>
                  <h3>Bronze package</h3>
                </div>
                <div>
                  <h4>KITCHEN</h4>
                  <ul>
                    {silverPack[0].split("-").map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <li>{item}</li>
                    ))}
                  </ul>
                  <h4>BATHROOMS</h4>
                  <ul>
                    {silverPack[1].split("-").map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>
      </section>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          padding: 5% 0;
        }

        h2 {
          margin: 0 0 2% 0;
          font-size: 2.1em;
        }

        .container div {
          text-align: center;
          width: 100%;
        }

        .container div p {
          width: 57%;
          display: inline-block;
          margin: 0 0 4% 0;
        }

        article {
          width: 32%;
          display: inline-block;
          vertical-align: top;
          margin: 3% 0 0 0;
          border-radius: 8px;
          overflow: hidden;
        }

        article > div:first-child {
          padding: 12% 7%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        article > div > div {
          width: 24%;
          margin: 0 0 2% 0;
        }

        article > div > h3 {
          font-size: 1.7em;
          color: #333;
          font-weight: 400;
        }

        article div:nth-child(2n) {
          padding: 8% 10%;
          text-align: center;
        }

        article div:nth-child(2n) h4 {
          color: var(--color-primary);
          font-weight: 400;
        }

        article div:nth-child(2n) ul {
          margin: 0 0 5% 0;
        }

        .bronzePack {
          box-shadow: 8px 6px 35px #e8e8e8;
        }

        .bronzePack div:first-child {
          /* color original #c66e47*/
          background-color: #c69e8c;
        }

        .goldPack {
          margin: 0;
          box-shadow: 1px 6px 35px #e8e8e8;
        }

        .goldPack div:first-child {
          /* color original #edaf3b*/
          background-color: #edb856;
        }

        .goldPack > div > div {
          width: 31%;
        }

        .silverPack {
          box-shadow: -8px 6px 35px #e8e8e8;
        }

        .silverPack div:first-child {
          background-color: #d4e1e8;
        }
      `}</style>
    </>
  )
}
