import { Property } from '@components/Property.jsx'

export function Card ({ technology }) {
  const { title, description, properties, color } = technology
  return (
    <article className='border border-gray-300 rounded-xl p-6 h-min overflow-hidden break-inside-avoid mt-4 mx-auto'>
      <header>
        <h3 className={`text-2xl font-extrabold text-[${color}]`}>{title}</h3>
        <div className='' />
        <p className='text-base text-gray-700'>{description}</p>
      </header>
      <hr className='color-gray-200 my-4' />
      <div className='content'>
        {
          properties.map((property, index) =>
            <Property
              name={property.name}
              description={property.description}
              usage={property.usage}
              url={property.url}
              color={color}
              key={`${property.name}-${index}`}
            />
          )
        }
      </div>
    </article>
  )
}
