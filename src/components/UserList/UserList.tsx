// також передаємо масив данних (зараз як приклад це юзери) щоб мапнути, функцію також треба типізувати(в даному випадку це буде клік на кнопку)

import { nanoid } from "nanoid"
import { IUser } from "../../types/types"

interface IUserListProps {
    user: IUser[]
    // типізуємо функцію і не забуваємо про типізацію того що повертає функція, в данному випадку це void, тобто вона нічого не повертає (не має ретьорна)
    handleButtonClickButton: (id:number) => void
}

export const UserList = ({user,handleButtonClickButton}:IUserListProps) => {
  return (
      <div>
          {user.map(item => <li key={nanoid()}>{item.name} {item.age}
          <button onClick={()=>handleButtonClickButton(+item.age)}>Click</button></li>)}
          
    </div>
  )
}
