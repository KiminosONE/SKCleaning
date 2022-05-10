export default function ImgOnBanner({ src, style }) {
  return (
    <>
      <div className="img_banner_top" style={{ ...style }}>
        <img src={src} />
      </div>

      <style jsx>
        {`
          div {
            width: 33%;
            margin: 1% 6% 0 0;
            height: 420px;
            border-radius: 20px;
            overflow: hidden;
          }
        `}
      </style>
    </>
  )
}
