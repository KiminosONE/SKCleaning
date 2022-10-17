export default function CardTestimonial({
  id,
  className,
  onClick,
  nameUser,
  location,
}) {
  return (
    <>
      <div className={className} onClick={onClick}>
        <div className="CUT_contImg">
          <img src="/images/happyMan.jpg" />
        </div>

        <div>
          <h3>{nameUser}</h3>
          <span>{location}</span>
        </div>
      </div>

      <style jsx>{`
        .card_usu_testi {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 5% 6%;
          border-radius: 8px;
          transition: all 0.4s;
        }

        .activo {
          box-shadow: 1px 6px 35px #e8e8e8;
        }

        .CUT_contImg {
          overflow: hidden;
          border-radius: 100px;
          width: 60px;
          height: 60px;
          margin: 0 8% 0 0;
        }

        .CUT_contImg > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        h3 {
          color: var(--color-primary);
          font-size: 20px;
          font-weight: 400;
        }

        span {
          font-weight: 500;
        }
      `}</style>
    </>
  )
}
