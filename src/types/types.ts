// окрумо виносимо інтерфейс для типізації об'єктів (це хороша практика, особливо коли потрібно перевикористовувати інтерфейс або просто писати в інших файлах для полекшення написання коду)
export interface IUser {
    name: string,
    age: number
}