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
