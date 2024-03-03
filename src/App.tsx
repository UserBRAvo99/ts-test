
import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard/UserCard'
import { UserList } from './components/UserList/UserList'

function App() {
  // типізація стейту
  // якщо стейт не типізувати, він автоматично запам'ятає тип при ініціалізації, тобто мжна не вказувати тип
  // або ж вказати, тим паче якщо треба типізувати декілька значень
  const [input, setInput] = useState<string | number>('')

  // типізацію івенту(події)
  // пожний івент треба типізувати - e:React.FormEvent<HTMLFormElement> (кожен по своєму)
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(input);



    // setInput(e.currentTarget[0].value);
    
    e.currentTarget.reset()
  }
  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  const handleButtonClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
  }
  const handleButtonClickButton = (id:number) => {
    console.log(id);
  }
  // просто змінна для прикладу типізації
  interface IUser {
    name: string,
    age: number
}
  const user:IUser = {
    name: 'Roma',
    age: 30
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
      <div>
        <UserCard user={user} message={'message'}  />
      </div>
      <div>
        {/* розпилюю об'єкт в масив для штучної імітацію масиву юзеів(тут має бути масив різних данних для циклу і рендерингу) */}
        <UserList user={[{...user},{...user}]} handleButtonClickButton={handleButtonClickButton}/>
      </div>
    </>
  )
}

export default App

// @ts-ignore
// можна написати над кодом, щоб ts не перевіряв код нище. це як вийняток
