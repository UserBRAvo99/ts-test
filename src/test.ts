//  типи даних в js :
// Undefined (Неопределений тип): Використовується, коли змінна не має значення. Наприклад: typeof instance === "undefined".
// Boolean (Булевий, Логічний тип): Має два можливих значення: true або false. Наприклад: typeof instance === "boolean".
// Number (Число): Представляє числові значення. Наприклад: typeof instance === "number".
// String (Рядок): Послідовність символів. Наприклад: typeof instance === "string".
// BigInt: Використовується для великих цілих чисел. Наприклад: typeof instance === "bigint".
// Symbol: Уведений у ECMAScript 6, використовується для створення унікальних ідентифікаторів. Наприклад: typeof instance === "symbol".
// Null (Null тип): Використовується для позначення відсутності значення. Наприклад: typeof instance === "object".
// Object (Об’єкт): Використовується для створення інших структур даних. Наприклад: typeof instance === "object".

//  типи даних в ts :
// boolean: Логічне значення true або false.
// number: Числове значення (цілі числа або числа з плаваючою точкою).
// string: Рядок символів.
// Array: Масиви.
// Tuple: Кортежі (масиви з фіксованою кількістю елементів і різними типами даних).
// Enum: Перелічення (набір іменованих констант).
// Any: Произвільний тип (для змінних, які можуть мати будь-який тип).
// Symbol: Унікальний ідентифікатор.
// null і undefined: Відповідають значенням null і undefined в JavaScript.
// Never: Використовується для вказівки, що функція ніколи не повертає значення.

// let str = 'hello'
// str. - ts покаже всі методи які будуть стосуватися рядка, підказує можливі варіанти співпраці.
// str = 22 - Type 'number' is not assignable to type 'string' - ts не дозволяє змінити тип даних на інші (в даному випадку з рядка в число)
// строкові літерали

// let str: string = 'hello'
// можна використати точний опис для значення типу змінної, прописати через двокрапку її тип str: string

// let str: string | boolean = 'hello'
// можна вказати що тип змінної може змінюватись (в межах дозволеного) тобто
// let str = true
// let str = "string"
// в обох варіантах типізація буде успішна

// також можна вказувати чітке значення для змінних за допомогою типізації
// let greetings: 'hello' | 'bye' = 'hello'

// умов може бути безліч, за допомогою знаку- |
//  тобто змінна greetings прийме як валідне значення тільки 'hello' або 'bye' , в іншуму випадку буде помилка

// типізація об'єктів
// як і в змінних так і в об'єктах, якщо ми не типізуємо об'єкт або змінну, то ts присвоює типізацію автоматично при ініціалізації
const obj = {
    name: 'Robin',
    email: 'robin@mail.com',
    age: 33
}
console.log(obj);


// оголошую тип(як змінну const, let) type
type User = {
    name: string,
    email: string,
    age?: number,
}
// використовуємо кастомну типізацію для об'єкта
const user: User = {
    name: 'Alex',
    email: 'alex.mail.com',
    age: 30
}
console.log(user);
// також можна зробити значення не обов'язковими за допомогою - ?
// при додаванні знаку ? , поле age? стає не обов'язковим і це не виклие помилку
const user1: User = {
    name: 'Alex',
    email: 'alex.mail.com',
}
console.log(user1);

// також мона порівнювати власні типи

type Dog = {
    name: string,
    bark: boolean
} 
type Fish = {
    name: string,
    swimming: boolean
} 

const pet: Dog | Fish = {
    name: 'Charly',
    swimming: true
}

console.log(pet);

// приклади формату поєднання типів - розширення

type Status = {
    status: string
}

type ExtentedUser = User & Status 

const newUser: ExtentedUser = {
    name: 'Lena',
    email: 'lena@mail.com',
    status: 'online'
}

console.log(newUser);

// інтерфейси
//  при ініціаліцації інтерфейсу, в назві, потрібно спочатку написати І (IUser), скорочено від InterfaceUser (це робиться для подальшого розуміння що ми працюємо з інтерфейсом)
//  інтерфейсу не можна надавати інші значення по типу interface IUser = Dog | Fish - він може бути тільки об'єктом
// зазвичай інтерфейси використовуються в передачі пропсів (так як пропси приходять як об'єкт)

interface IUser {
    name: string,
    age: number
}
//  із мінусів інтерфейсів,їх не можна розширити
const interfaceUser: IUser = {
    name: 'Lena',
    age: 41,
    isOpen: true
}
console.log(interfaceUser);

// так робити не бажано, в такому випадку треба додати isOpen до всіх інтерфейсів
interface IUser {
    isOpen: boolean
}
//  розширити інтерфейси можна за допомогою наслідування, в такому випадку, розширений інтерфейс буде мати всі поля інтерфейсу який наслідується + свої власні
interface ExtentedUserInterface extends IUser {
    status: string
}
const newUser2: ExtentedUserInterface = {
    name: 'Roma',
    age: 30,
    isOpen: false,
    status: 'Offline'
}
console.log(newUser2);

// функції
// типізуємо функції
// типізуємо аргументи що прймає функція
// після аргументів, через двокрапку ми вказуємо типізацію повернення функції, при такій умові обов'язково треба вказати return

const sum = (a: number, b: number): number => {
    // в данному випадку ми повертаємо намбер
    return a + b
}
console.log(sum(42, 28));
// якщо змінити тип аргументів то буде помилка console.log(sum(42, "28")), тому що друге значення буде string
