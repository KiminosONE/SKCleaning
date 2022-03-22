import { useState, useEffect } from "react"
import CardTestimonial from "../CardTestimonial"

export default function TestimonialIndex() {
  const [isActivo, setActivo] = useState(1)
  const [intervalId, setIntervalId] = useState(0)
  const [testi, setTesti] = useState([
    {
      id: 0,
      name: "",
      location: "",
      img: "",
      testi: "",
    },
  ])

  var cont = 1

  useEffect(() => {
    getStaticProps()

    activateInterval()
  }, [])

  const stopInterval = () => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(0)
    }
  }

  const activateInterval = () => {
    const newIntervalId = setInterval(() => {
      cont >= 3 ? (cont = 1) : cont++
      setActivo(cont)
    }, 3000)
    setIntervalId(newIntervalId)
  }

  const activateTestimonial = (id) => {
    cont = id
    setActivo(id)
    stopInterval()
    setTimeout(activateInterval, 10000)
  }

  const getStaticProps = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/testimonios`)
      const data = await res.json()

      setTesti(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section>
        <section className="container">
          <div>
            <span className="spanTitle">Testimonials</span>
            <h2>Why they love us</h2>
          </div>
          <article>
            <ul>
              {testi.map((testi) => (
                // eslint-disable-next-line react/jsx-key
                <li>
                  <CardTestimonial
                    className={`card_usu_testi ${
                      isActivo === testi.id ? "activo" : ""
                    }`}
                    id={testi.id}
                    nameUser={testi.name}
                    location={testi.location}
                    onClick={() => activateTestimonial(testi.id)}
                  />
                </li>
              ))}
            </ul>

            <div>
              <h3>{testi[isActivo - 1].name}</h3>
              <span>{testi[isActivo - 1].location}</span>

              <p>{testi[isActivo - 1].testi}</p>
            </div>
          </article>
        </section>
      </section>

      <style jsx>{`
        section > section {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 5% 0;
        }

        .container > div:first-child {
          text-align: center;
        }

        article {
          margin: 4% 0 0 0;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        article > div {
          width: 45%;
        }

        ul {
          width: 45%;
        }

        ul li {
          /* margin: 0 0 2% 0; */
        }

        h3 {
          color: var(--color-primary);
          font-size: 20px;
          font-weight: 400;
        }

        span {
          font-weight: 500;
        }
        p {
          margin: 2% 0 0 0;
        }
      `}</style>
    </>
  )
}
