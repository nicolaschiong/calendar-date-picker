import React, { useEffect, useState, useRef } from 'react'

/**
 * Returns the width and height of the wrapped component.
 */

export const ContainerSize = ({ children }) => {
  const defaultSizes = {
    width: 0,
    height: 0,
  }
  const containerRef = useRef(null)
  const [size, setSize] = useState(defaultSizes)

  useEffect(() => {
    const initialSize =
      (containerRef.current && containerRef.current.getBoundingClientRect()) ||
      defaultSizes
    setSize(initialSize)
  }, [containerRef.current])

  useEffect(() => {
    const newSize = containerRef.current.getBoundingClientRect()
    const handleSize = () => setSize(newSize)

    window.addEventListener('resize', handleSize)

    return () => {
      window.removeEventListener('resize', handleSize, false)
    }
  }, [size])

  return (
    <div style={{ flex: 1 }} ref={containerRef}>
      {children(size)}
    </div>
  )
}
