import Carousel from "./Carousel"

export default function ServicesIndex() {
  return (
    <>
      <section>
        <div className="container">
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
        </div>
      </section>

      <style jsx>{`
        p {
          color: #333333;
        }

        section {
          background-color: #f6f6f6;
          padding: 4% 0;
        }
        .container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
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
