import { chunk } from '@utils/others.js'
import { useState } from 'react'
import { Card } from '@components/Card.jsx'

const DEFAULT_COLUMNS = 3

export default function ListOfCards ({ tecnhologies }) {
  const [columns, setColumns] = useState(Math.round(tecnhologies.length / DEFAULT_COLUMNS))

  const newTechnologies = chunk(tecnhologies, columns)

  return newTechnologies.map((column, index) => {
    return (
      <div className='w-2/6' key={index}>
        {column.map((tech, index) => {
          return <Card key={`${tech.title}-${index}`} technology={tech} />
        })}
      </div>
    )
  })
}
