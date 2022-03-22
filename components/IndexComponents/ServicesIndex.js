import Carousel from "../Carousel"

export default function ServicesIndex() {
  return (
    <>
      <section>
        <section className="container">
          <article>
            <span className="spanTitle">Our services</span>

            <h2>Professional Cleaning Service</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus
            </p>
          </article>
          <div>
            <Carousel />
          </div>
        </section>
      </section>

      <style jsx>{`
        p {
          color: #333333;
        }

        section {
          background-color: #f6f6f6;
        }

        section > section {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 5% 0;
        }

        article {
          width: 40%;
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }

        .container > div {
          width: 53%;
        }
      `}</style>
    </>
  )
}
