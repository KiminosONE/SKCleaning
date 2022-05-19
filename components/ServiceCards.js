export default function ServiceCards() {
  const services = [
    `Clean counters, sinks, faucets
    Clean appliance exteriors
    Clean inside microwaves
    Clean stove top
    Wash floor`,
    `Scour sink, tub and toilet
    Clean tile as needed
    Clean mirrors
    Vacuum throw rugs
    Wash floor`,
    `Dust
    Wash floors
    Vacuum carpets
    Change beds`,
    `Weekly
    Bi-Weekly
    Monthly
    One time
    Move In / Move Out
    Real Estate Turnover
    Special Requests`,
  ]

  return (
    <>
      <section>
        <section className="container">
          <ul className="list_individualServices">
            <li>
              <div>
                <h3>Kitchen</h3>
                <ul>
                  {services[0].split("\n").map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="imgCardService">
                <div>
                  <img src="/images/icons/services/kitchen.png" />
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Bathrooms</h3>
                <ul>
                  {services[1].split("\n").map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="imgCardService">
                <div>
                  <img src="/images/icons/services/bathroom.png" />
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Bedrooms</h3>
                <ul>
                  {services[2].split("\n").map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="imgCardService">
                <div>
                  <img src="/images/icons/services/bedroom.png" />
                </div>
              </div>
            </li>
            <li>
              <div>
                <h3>Living spaces / Dining rooms</h3>
                <ul>
                  {services[2].split("\n").map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="imgCardService">
                <div>
                  <img src="/images/icons/services/room.png" />
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>

      <style jsx>{`
        .list_individualServices {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
        }

        .list_individualServices > li {
          width: 48%;
          min-height: 200px;
          margin: 0 0 4% 0;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
          box-shadow: 1px 6px 35px #e8e8e8;
        }

        .list_individualServices > li > div:first-child {
          /* width: 45%; */
          padding: 4% 0 4% 6%;
        }

        .list_individualServices > li .imgCardService {
          width: 39%;
          background: linear-gradient(
            to bottom right,
            var(--color-primary),
            var(--color-secondary)
          );
          position: relative;
          border-radius: 50%;
          right: -26px;
          bottom: -32px;
        }

        .list_individualServices > li .imgCardService > div {
          width: 53%;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -30% 0 0 -30%;
        }

        h3 {
          font-size: 1.5em;
          font-weight: 400;
          color: var(--color-primary);
        }
      `}</style>
    </>
  )
}
