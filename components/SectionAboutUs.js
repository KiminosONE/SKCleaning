import { useState } from "react"

export default function SectionAboutUs({ direction, img, data }) {
  const [getdata] = useState(data[0].texts)

  return (
    <>
      <section className="container">
        <div>
          <img src={img} />
        </div>
        <article>
          <h2>{data[0].title}</h2>
          {getdata.map((txt) => (
            // eslint-disable-next-line react/jsx-key
            <p>{txt.txt}</p>
          ))}
        </article>
      </section>

      <style jsx>{`
        .container {
          align-items: center;
          display: flex;
          flex-direction: ${direction};
          justify-content: space-around;
          padding: 4% 0;
        }

        div {
          width: 35%;
          height: 390px;
          border-radius: 20px;
          overflow: hidden;
        }

        article {
          width: 45%;
        }

        article h2 {
          margin: 0 0 5% 0;
        }

        article p {
          margin: 0 0 3% 0;
        }
      `}</style>
    </>
  )
}

SectionAboutUs.defaultProps = {
  direction: "row",
  data: [{ texts: [{}] }],
}
