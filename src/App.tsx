import { NewCard } from './components/NewCard'
import { notices } from './utils/data'

function App () {
  return (
    <div className="flex flex-1 flex-row mx-20 mt-10">
      {notices.map((notice, key) =>
        <NewCard notice={notice} key={key}/>
      )}
    </div>
  )
}

export default App
