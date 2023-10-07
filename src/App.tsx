import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './components/Toggle'
import Timer from './components/Timer'
import Counter from './components/Counter'
import Filterer from './components/Filterer'

function App() {
  const [count, setCount] = useState(0)
  const [options, setOptions] = useState<string[]>([])

  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!options.includes(e.target.value)){
      setOptions([e.target.value])
    }
    
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
      <Toggle>
        {(isOpen, toggle) => (
          <div>
            <button onClick={toggle}>Toggle</button>
            {isOpen? <p>Open</p> : <p>Closed</p>}
          </div>
        )}
      </Toggle>
      </div>
      <div>
        <Timer>
          {(time, startTimer, stopTimer)=>(
            <>
            <p>Time elapsed: {time}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            </>
          )}
        </Timer>
      </div>
      <div>
        <h1>Function As a Child Counter</h1>
        <Counter>
          {(count,  incrementCount)=>{
            return (
              <>
              <button onClick={incrementCount}>Clicked {count} times!</button>
              </>
            )
          }}
        </Counter>
      </div>
      <div>
        <select onChange={(e) => selectChangeHandler(e)}>
          <option value="all">all</option>
          <option value="active">active</option>
          <option value="completed">completed</option>
        </select>
        <Filterer options={options}>
          {(data) => {
            return data.map((item) => <p key={item.id}>{item.task}</p>)
          }}
        </Filterer>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
