import Link from "next/link"

export default function ButtonPrimary({ children, link, style }) {
  return (
    <>
      <Link href={link}>
        <a className="ButtonPrimary" style={{ ...style }}>
          {children}
        </a>
      </Link>
    </>
  )
}
