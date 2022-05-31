export default function ServicePackages({ Services }) {
  function ItemList(tipe, text) {
    this.tipe = tipe
    this.text = text
  }

  const printListServices = (arrayServices, serviceLevel = false) => {
    const htmlInsert = []

    const touringServices = (element, tipe) => {
      element
        .split("\n")
        .map((item) => htmlInsert.push(new ItemList(tipe, item)))
    }

    if (serviceLevel) {
      arrayServices.forEach((element, index) => {
        touringServices(element, index)
      })
    } else {
      touringServices(arrayServices[0], 0)
    }

    return htmlInsert.map((item) =>
      item.tipe === 0 ? (
        <li>{item.text}</li>
      ) : (
        <li style={{ color: "var(--color-tertiary)" }}>+ {item.text}</li>
      )
    )
  }

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
                  <ul>{printListServices(Services.Kitchen)}</ul>
                  <h4>BATHROOMS</h4>
                  <ul>{printListServices(Services.Bathrooms)}</ul>
                  <h4>BEDROOMS / LIVING SPACES DINING ROOMS</h4>
                  <ul>{printListServices(Services.LivingSpaces)}</ul>
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
                  <ul>{printListServices(Services.Kitchen, true)}</ul>
                  <h4>BATHROOMS</h4>
                  <ul>{printListServices(Services.Bathrooms, true)}</ul>
                  <h4>BEDROOMS / LIVING SPACES DINING ROOMS</h4>
                  <ul>{printListServices(Services.LivingSpaces, true)}</ul>
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
                  <ul>{printListServices(Services.Kitchen)}</ul>
                  <h4>BATHROOMS</h4>
                  <ul>{printListServices(Services.Bathrooms)}</ul>
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
