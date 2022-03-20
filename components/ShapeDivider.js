export default function ShapeDivider() {
  return (
    <>
      <div className="banner-waves">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.28 2.17"
          preserveAspectRatio="none"
        >
          <path
            className="shape-fill"
            d="M35.28 1.67c-3.07-.55-9.27.41-16.15 0-6.87-.4-13.74-.58-19.13.1v.4h35.28z"
            fill="%23ffffff"
          />
          <path
            className="shape-fill"
            d="M35.28 1.16c-3.17-.8-7.3.4-10.04.56-2.76.17-9.25-1.47-12.68-1.3-3.42.16-4.64.84-7.04.86C3.12 1.31 0 .4 0 .4v1.77h35.28z"
            opacity=".5"
            fill="%23ffffff"
          />
          <path
            className="shape-fill"
            d="M35.28.31c-2.57.84-7.68.3-11.8.43-4.1.12-6.85.61-9.57.28C11.18.69 8.3-.16 5.3.02 2.3.22.57.85 0 .87v1.2h35.28z"
            opacity=".5"
            fill="%23ffffff"
          />
        </svg>
      </div>

      <style jsx>{`
        .banner-waves {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          /* transform: rotate(180deg); */
        }

        .banner-waves svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 100px;
          transform: rotateY(180deg);
        }

        .banner-waves .shape-fill {
          fill: #ffffff;
        }
      `}</style>
    </>
  )
}
