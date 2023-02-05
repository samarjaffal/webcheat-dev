import { Card } from '@components/Card.jsx'
import { chunk } from '@utils/others.js'
import { useListOfCards } from '@hooks/useListOfCards'

export default function ListOfCards ({ tecnhologies }) {
  const { columns } = useListOfCards({ tecnhologies })

  const newTechnologies = chunk(tecnhologies, columns)

  return newTechnologies.map((column, index) => {
    return (
      <div className='w-full mx-auto' key={index}>
        {column.map((tech, index) => {
          return <Card key={`${tech.title}-${index}`} technology={tech} />
        })}
      </div>
    )
  })
}
