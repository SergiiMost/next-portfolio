import { useState } from "react"

export const useToggleState = (value) => {
  const [state, setState] = useState(value)

  const toggleState = () => {
    setState(!state)
  }

  return [state, toggleState]
}
