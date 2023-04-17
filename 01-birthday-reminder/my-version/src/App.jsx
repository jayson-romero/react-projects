import { useState } from 'react'
import style from './style'
import data from './data'
import List from './components/List'

function App() {

  const [person, setPerson ] = useState(data)

  return (
    <main className="App">
      <div className='container w-[450px] px-[1.5rem] py-[2rem] bg-primary'>
        <h1 className={`${style.heading} mb-[20px]`}>{person.length} Birthday{`${person.length === 0 ? "": "s"}`} today</h1>
        <List person={person}/>
        <button className='btn' onClick={() => setPerson([])}>
            Clear
        </button>
      </div>
      
    </main>
  )
}

export default App
