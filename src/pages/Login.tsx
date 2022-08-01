import { Logo } from '../components/shared/Logo'

export const Login = () => {
  return (
    <div className='flex content-center'>
      <div className='flex flex-col'>
        <Logo/>
        <input type={'text'} placeholder={'Enter your email'}/>
        <input type={'password'} placeholder={'Enter your password'}/>
        <button>Login</button>
      </div>
    </div>
  )
}
