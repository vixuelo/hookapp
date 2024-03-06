import { memo } from "react"

export const SmallItem = memo(({Counter}) => {
  return (
    <small>{Counter}</small>
  )
})
                      