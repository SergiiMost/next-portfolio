import { useState, useEffect } from "react"

export const useGetWindowWidth = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", updateWidth)
    updateWidth()
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return width
}
