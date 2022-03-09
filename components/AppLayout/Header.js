import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)

  const changeback = () => {
    if (window.scrollY >= 80) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeback)
  }, [])

  return (
    <>
      <header className={isVisible ? "header_small" : ""}>
        <div className="container">
          <div className={isVisible ? "cont_logo small" : "cont_logo"}>
            <Link href="/">
              <img
                src="/images/icons/logoEmpresa/skLogoTexto.png"
                alt="Logo skCleaning"
              />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Contact Us </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <style jsx>{`
        header {
          padding: 1.5% 0;
          background-color: #ffffff00;
          position: fixed;
          z-index: 9;
          width: 100%;
          transition: all 0.3s linear;
        }

        .header_small {
          background-color: #ffff;
          border-bottom: 1px solid #e3e3e3;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        li {
          display: inline-block;
        }

        a {
          padding: 0.5rem 1rem;
          transition: all 0.3s linear;

          display: inline-block;
          color: #323232;
          text-transform: capitalize;
          white-space: normal;
          font-size: 19px;
          font-weight: 700;
          line-height: initial;
        }

        a:hover {
          color: red;
        }

        img {
          display: block;
          width: 100%;
        }

        .cont_logo {
          width: 10%;
          transition: all 0.3s linear;
        }

        .cont_logo.small {
          width: 6%;
        }
      `}</style>
    </>
  )
}
