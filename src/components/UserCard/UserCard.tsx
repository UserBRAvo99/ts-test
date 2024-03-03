// типізуємо пропси
// для того щоб типізувати пропси, треба описати інтерфейс пропсів
// також передаємо масив данних (зараз як приклад це юзери) щоб мапнути, функцію також треба типізувати(в даному випадку це буде клік на кнопку)
interface IUserCardProps {
    user: {
        name: string
        age: number
    },
    message: string,
    
    
}
const UserCard = ({ user, message}: IUserCardProps) => {
    console.log(user, message);
    
  return (
      <div>{message}</div>
      
  )
}

export default UserCard