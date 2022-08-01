
interface Props {
  title: string
}

export const SectionTitle = ({ title }:Props) => {
  return (
    <h2 className='font-bold text-4xl mt-3'>{title}</h2>
  )
}
