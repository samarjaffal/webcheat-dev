import { useState } from 'react'

export function Property ({ name, description, usage, url, color }) {
  const [showContent, setShowContent] = useState(false)

  const colorDefault = '#EDEDEE'
  const colorActive = `${color}4D`

  const handleClick = () => setShowContent(!showContent)

  return (
    <div className='my-3'>
      <button
        className={`button-property bg-[${showContent ? colorActive : colorDefault}] hover:bg-[${color}4D] p-2 rounded-xl w-full text-left transition ease-in-out duration-300`}
        onClick={handleClick}
      >
        <p className='font-semibold text-md'>{name}</p>
      </button>
      {
        showContent && (
          <div className='content bg-[#EDEDEE] p-3 rounded-xl mt-3'>
            <p className='text-base text-gray-700 my-2'>{description}</p>
            <p className='font-semibold text-md mb-2'>Usage</p>
            <div className='bg-gray-200 rounded-md p-4'>
              <code className='text-sm break-words'>{usage}</code>
            </div>
            <a
              href={url}
              target='_blank'
              className={`text-[${color}] font-bold text-xs hover:underline`} rel='noreferrer'
            >
              Go to documentation
            </a>
          </div>
        )
      }
    </div>
  )
}
