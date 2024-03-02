
import { useState } from 'react'
import './App.css'

function App() {
  // типізація стейту
  // якщо стейт не типізувати, він автоматично запам'ятає тип при ініціалізації, тобто мжна не вказувати тип
  // або ж вказати, тим паче якщо треба типізувати декілька значень
  const [input, setInput] = useState<string | number>()
  // типізацію івенту(події)
  // пожний івент треба типізувати - e:React.FormEvent<HTMLFormElement> (кожен по своєму)
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    
    setInput(e.currentTarget[0].value);
    
    e.currentTarget.reset()
  }
  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }
  const handleButtonClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChangeInput}/>
        <button>Click</button>
        </form>
        <button onClick={handleButtonClick}>Login</button>
      </div>
    </>
  )
}

export default App
