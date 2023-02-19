import { getRandomColor } from '@utils/getRandomColor'

export const getTechnologiesHome = ({ paths = [], technologies = [] }) => {
  const newTechs = paths.map((file) => {
    const [category, technology] = file.split('/').slice(-2)
    const { config: technologyData } = technologies.find((tech) => tech.config?.name === technologyName)
    const technologyName = technology.replace('.js', '')
    const description = technologyData.description
    const color = getRandomColor()
    const colorFormatted = `bg-[${color}4D]`
    return {
      name: technologyName,
      color: colorFormatted,
      url: `/${category}/${technologyName}`,
      description
    }
  })
  return newTechs
}
