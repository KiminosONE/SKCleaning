import Link from "next/link"

export default function ButtonPrimary({ children, link, style }) {
  return (
    <>
      <Link href={link}>
        <a style={{ ...style }}>{children}</a>
      </Link>

      <style jsx>{`
        a {
          font-size: 14px;
          line-height: 21px;
          font-weight: 700;
          color: rgb(51, 51, 51);
          letter-spacing: 2px;
          background-color: var(--color-primary);
          border-radius: 6px;
          cursor: pointer;
          padding: 12px 30px;
          display: inline-block;
          width: fit-content;
        }
      `}</style>
    </>
  )
}
