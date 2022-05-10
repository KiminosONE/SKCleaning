import Link from "next/link"
import { useRouter } from "next/router"

export default function Footer() {
  const router = useRouter()

  const labelAboutFooter = (texto, position) => {
    if (router.pathname === "/aboutUs") {
      return (
        <>
          <li>
            <a
              onClick={() => {
                moveScroll(position)
              }}
            >
              {texto}
            </a>
          </li>

          <style jsx>{`
            li {
              padding: 8px 0;
            }

            li a {
              transition: all 0.3s linear;
              position: relative;
              left: 0;
            }

            li:hover a {
              left: 15px;
              font-weight: 400;
              color: var(--color-primary);
            }
          `}</style>
        </>
      )
    } else {
      return (
        <>
          <li>
            <Link href={"/aboutUs?position=" + position}>
              <a>{texto}</a>
            </Link>
          </li>

          <style jsx>{`
            li {
              padding: 8px 0;
            }

            li a {
              transition: all 0.3s linear;
              position: relative;
              left: 0;
            }

            li:hover a {
              left: 15px;
              font-weight: 400;
              color: var(--color-primary);
            }
          `}</style>
        </>
      )
    }
  }

  const moveScroll = (position) => {
    window.scrollTo({
      top: parseInt(position),
      behavior: "smooth",
    })
  }

  return (
    <>
      <footer>
        <section className="container">
          <article className="social_footer">
            <div>
              <Link href="/">
                <img
                  src="/images/icons/logoEmpresa/skLogoTexto.png"
                  alt="Logo skCleaning"
                />
              </Link>
            </div>
            <p>
              The goal of SK Cleaning Services is to earn the loyalty of its
              clients through the quality of the work it provides.
            </p>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/skcleaningllc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="512.000000pt"
                    height="512.000000pt"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M2315 5109 c-800 -83 -1501 -517 -1927 -1196 -494 -786 -516 -1810
-56 -2613 243 -423 598 -770 1017 -994 357 -191 751 -296 1121 -300 l135 -1 3
993 2 992 -275 0 -275 0 0 320 0 320 273 2 272 3 6 335 c5 304 7 342 27 415
77 276 260 460 537 537 72 20 104 22 315 22 129 1 279 -3 333 -8 l97 -8 0
-288 0 -288 -237 -4 c-237 -3 -238 -3 -290 -30 -110 -58 -123 -105 -123 -435
l0 -253 315 0 c173 0 315 -3 315 -7 0 -5 -18 -145 -40 -312 -22 -168 -40 -308
-40 -313 0 -4 -124 -8 -275 -8 l-275 0 0 -945 c0 -520 2 -945 4 -945 19 0 257
90 347 131 301 138 534 304 774 550 209 215 338 400 471 674 118 244 199 516
236 795 16 124 16 509 0 625 -84 591 -328 1089 -733 1494 -397 396 -891 644
-1454 727 -123 18 -478 26 -600 13z"
                      />
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="512.000000pt"
                    height="512.000000pt"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M2315 5109 c-800 -83 -1501 -518 -1927 -1196 -604 -960 -491 -2229
272 -3065 423 -463 951 -740 1585 -830 118 -17 511 -16 635 0 579 80 1097 337
1491 739 130 132 157 163 243 277 256 341 423 757 488 1211 17 118 17 512 0
630 -43 303 -122 561 -247 814 -134 268 -270 459 -483 674 -395 400 -889 649
-1457 733 -123 18 -478 26 -600 13z m848 -1089 c288 -19 456 -82 610 -228 156
-149 228 -332 247 -629 13 -195 13 -1006 0 -1204 -19 -300 -93 -485 -253 -636
-149 -141 -321 -205 -604 -223 -192 -12 -1014 -12 -1206 0 -288 19 -456 82
-610 228 -156 149 -228 332 -247 629 -13 194 -12 1028 0 1212 20 293 92 475
247 623 148 140 325 210 582 227 169 12 1061 12 1234 1z"
                      />
                      <path
                        d="M2195 3759 c-300 -6 -349 -9 -416 -27 -213 -58 -334 -178 -391 -391
-18 -67 -21 -117 -27 -429 -3 -193 -3 -511 0 -705 6 -311 9 -361 27 -428 57
-213 178 -334 391 -391 67 -18 117 -21 429 -27 193 -3 511 -3 705 0 313 6 361
9 430 28 207 55 333 180 389 388 18 70 21 116 27 431 3 193 3 511 0 705 -6
312 -9 361 -27 428 -57 213 -179 335 -391 391 -78 20 -98 21 -661 31 -80 1
-298 -1 -485 -4z m1212 -250 c38 -14 83 -57 99 -96 49 -113 -38 -243 -161
-243 -94 0 -175 80 -175 174 0 121 124 208 237 165z m-604 -236 c121 -42 188
-85 283 -178 92 -91 149 -181 191 -300 26 -74 28 -91 28 -235 0 -144 -2 -161
-28 -235 -40 -115 -100 -209 -186 -296 -87 -86 -181 -146 -296 -186 -74 -26
-91 -28 -235 -28 -144 0 -161 2 -235 28 -119 42 -209 99 -300 191 -93 95 -135
162 -179 283 -30 85 -31 94 -31 243 1 141 3 162 28 235 52 155 163 301 297
390 146 97 251 126 440 122 120 -3 144 -7 223 -34z"
                      />
                      <path
                        d="M2442 3034 c-263 -70 -423 -334 -357 -588 48 -183 178 -313 362 -361
344 -90 678 244 588 588 -70 267 -337 430 -593 361z"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </article>

          <article className="list_footer">
            <h6>Menu</h6>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/aboutUs">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/contactUs">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </article>

          <article className="list_footer">
            <h6>About Us</h6>
            <ul>
              {labelAboutFooter("Our history", 500)}
              {labelAboutFooter("Our values", 1000)}
              {labelAboutFooter("Our process", 1500)}
            </ul>
          </article>

          <article className="office_footer">
            <h6>SK Office</h6>
            <p>
              308 Ryers Avenue <br /> Cheltenham, PA 19012, USA
            </p>

            <p>
              <a href="tel:+12159541997">Tel: 215 954 1997</a>
            </p>

            <p>
              <a href="mailto:sandra@skcleaningllc.com">
                sandra@skcleaningllc.com
              </a>
            </p>
          </article>
        </section>
      </footer>

      <style jsx>
        {`
          section {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 5% 0;
          }

          .social_footer {
            width: 26%;
          }

          .social_footer div {
            width: 30%;
            margin: 0 0 10% 0;
          }

          .social_footer p {
            margin: 0 0 9% 0;
          }

          .social_footer li {
            width: 12%;
            display: inline-block;
            margin: 0 3% 0 0;
          }

          svg {
            width: 100%;
            height: auto;
          }

          svg path {
            fill: var(--color-primary);
          }

          article h6 {
            color: var(--color-primary);
            font-weight: 600;
            font-size: 1.2em;
            margin: 0 0 20px 0;
          }

          .list_footer {
            width: 11%;
          }

          .list_footer ul li {
            padding: 8px 0;
          }

          .list_footer ul li a {
            transition: all 0.3s linear;
            position: relative;
            left: 0;
          }

          .list_footer ul li:hover a {
            left: 15px;
            font-weight: 400;
            color: var(--color-primary);
          }

          .office_footer {
            width: 23%;
          }

          .office_footer p {
            margin: 0 0 15px 0;
          }

          .office_footer a {
            color: var(--color-primary);
          }
        `}
      </style>
    </>
  )
}
