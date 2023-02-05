import { useEffect, useState } from 'react'
import { useWindowSize } from '@hooks/useWindowSize'

const DEFAULT_COLUMNS = 3

export function useListOfCards ({ tecnhologies }) {
  const { sizes, windowSize } = useWindowSize()
  const [columns, setColumns] = useState(Math.round(tecnhologies.length / DEFAULT_COLUMNS))

  useEffect(() => {
    let newColumns = DEFAULT_COLUMNS

    if (sizes.isXXL) newColumns = 4
    if (sizes.isXL) newColumns = 3
    if (sizes.isMD) newColumns = 2
    if (sizes.isSM || sizes.isXS) newColumns = 1

    setColumns(Math.round(tecnhologies.length / newColumns))
  }, [windowSize])

  return { columns }
}
