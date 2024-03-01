
import './App.css'

function App() {
  // типізацію івенту(події)
  // пожний івент треба типізувати - e:React.FormEvent<HTMLFormElement> (кожен по своєму)
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
