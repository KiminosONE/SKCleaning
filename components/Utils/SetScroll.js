import { useRouter } from "next/router"
import { useEffect } from "react"

export default function SetScroll() {
  const router = useRouter()

  useEffect(() => {
    if (router.query.position) {
      window.scrollTo({
        top: parseInt(router.query.position),
        behavior: "smooth",
      })
    }
  }, [])
}
