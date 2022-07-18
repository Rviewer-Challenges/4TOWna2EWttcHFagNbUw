import { Feed } from '../components/Feed'
import { useHome } from '../hooks/useHome'

export const Home = () => {
  const { notices, isLoading } = useHome()

  return (
    <>
      {isLoading
        ? <div>Loading</div>
        : <Feed notices={notices}/>
      }
    </>
  )
}
