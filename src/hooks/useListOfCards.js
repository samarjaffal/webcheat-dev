import { useEffect, useState } from 'react'
import { useWindowSize } from '@hooks/useWindowSize'

const DEFAULT_COLUMNS = 3

export function useListOfCards ({ tecnhologies }) {
  const { sizes, windowSize } = useWindowSize()
  const [columns, setColumns] = useState(setColumnsByWindowSize())

  function setColumnsByWindowSize () {
    let newColumns = DEFAULT_COLUMNS

    if (sizes.isXXL) newColumns = 4
    if (sizes.isXL) newColumns = DEFAULT_COLUMNS
    if (sizes.isMD) newColumns = 2
    if (sizes.isSM || sizes.isXS) newColumns = 1

    const columns = tecnhologies.length < newColumns
      ? newColumns
      : Math.round(tecnhologies.length / newColumns)

    return columns
  }

  useEffect(() => {
    const columnsToSet = setColumnsByWindowSize()
    setColumns(columnsToSet)
  }, [windowSize])

  return { columns }
}
