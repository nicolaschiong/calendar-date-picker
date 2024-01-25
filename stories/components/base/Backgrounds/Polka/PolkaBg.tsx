import React from "react"
import "./PolkaBg.css"

export interface PolkaBgProps {
  children: any
}

export const PolkaBg = ({ children, ...props }: PolkaBgProps) => {
  return <div className="polka">{children}</div>
}
