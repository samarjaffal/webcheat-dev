import { useState, useEffect } from 'react'

const XS = 425
const SM = 640
const MD = 768
const LG = 1024
const XL = 1280
const XXL = 1800

const screens = {
  xs: XS,
  sm: SM,
  md: MD,
  lg: LG,
  xl: XL,
  xxl: XXL
}

function between (x, min, max) {
  return x >= min && x <= max
}
const screen = {
  isXS: (value) => between(value, 0, XS - 1),
  isSM: (value) => between(value, XS, SM) || between(value, SM, MD - 1),
  isMD: (value) => between(value, MD, LG - 1),
  isLG: (value) => between(value, LG, XL - 1),
  isXL: (value) => between(value, XL, XXL - 1),
  isXXL: (value) => between(value, XXL, Infinity)
}

const getSizes = (width) => {
  let sizes = {}
  Object.keys(screen).forEach((size, index) => {
    const key = Object.keys(screen)[index]
    const value = screen[key](width)
    sizes = { ...sizes, [key]: value }
  })
  return sizes
}

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  const [sizes, setSizes] = useState({})

  useEffect(() => {
    // Handler to call on window resize
    function handleResize () {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })

      setSizes(getSizes(window.innerWidth))
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return { windowSize, sizes, screens }
}
