import React from "react"
import StickyBox from "react-sticky-box"

export interface StickyProps {
  offsetTop?: number
  offsetBottom?: number
  disabled?: boolean
  children: any
}

export const Sticky = ({
  offsetTop,
  offsetBottom,
  disabled,
  children,
  ...props
}: StickyProps) => {
  const renderSticky = () => {
    return (
      <StickyBox offsetTop={offsetTop} offsetBottom={offsetBottom} {...props}>
        {children}
      </StickyBox>
    )
  }

  const renderWithoutSticky = () => {
    return <div {...props}>{children}</div>
  }

  if (!disabled) {
    return renderSticky()
  } else {
    return renderWithoutSticky()
  }
}
