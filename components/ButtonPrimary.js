import Link from "next/link"

export default function ButtonPrimary({ children, link, style }) {
  return (
    <>
      <Link href={link}>
        <a style={{ ...style }}>{children}</a>
      </Link>

      <style jsx>{`
        a {
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          background-color: var(--color-primary);
          letter-spacing: 1px;
          border-style: solid;
          border-width: 0px 0px 0px 0px;
          border-color: rgba(2, 1, 1, 0);
          border-radius: 6px;
          cursor: pointer;
          padding: 12px 30px;
          display: inline-block;
        }
      `}</style>
    </>
  )
}
