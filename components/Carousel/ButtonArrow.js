export default function ButtonArrow(props) {
  const { className, style, onClick } = props

  return (
    <>
      <button
        onClick={onClick}
        className={className + " cambio"}
        style={{ ...style }}
      ></button>

      <style jsx>{`
        .cambio::before {
          color: #717171;
        }
      `}</style>
    </>
  )
}
