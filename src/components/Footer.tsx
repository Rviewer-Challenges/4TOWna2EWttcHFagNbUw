import { Icon } from './shared/Icon'
import { Logo } from './shared/Logo'

export const Footer = () => {
  return (
    <div className='md:flex justify-center items-center bg-white bottom-0 py-2 px-5 border-b w-full flex-col border-t'>
      <div className='flex justify-center mt-1'>
        <Logo/>
      </div>
      <div className='mt-3 flex flex-col items-center'>
        <span>Created with ❤️ by Jose Rodolfo Rojas</span>
        <span className='font-semibold mt-2'>Follow me</span>
        <div className='flex'>
          <a href='https://www.linkedin.com/in/jrodolforojas/'><Icon prefix='fab' name='linkedin' size='1x'/></a>
          <a href='https://github.com/jrodolforojas'><Icon prefix='fab' name='github' size='1x'/></a>
          <a href='https://www.instagram.com/jrodolforojas/'><Icon prefix='fab' name='instagram' size='1x'/></a>
          <a href='https://twitter.com/jrodolforojas'><Icon prefix='fab' name='twitter' size='1x'/></a>
          <a href='https://jrodolforojas.com/'><Icon prefix='fas' name='link' size='1x'/></a>
        </div>
      </div>
    </div>
  )
}
