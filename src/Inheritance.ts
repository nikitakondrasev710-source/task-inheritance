interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    // 1. Конструктор принимает объект data
    constructor(data: IPersonData) {
        this._name = data.name;
        this._secondName = data.secondName;
        this._age = data.age;
    }

    // 2. Метод возвращает данные
    getData(): IPersonData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    readonly _phone: string;

    // 1. Конструктор
    constructor(data: IStudentData) {
        // Обязательно вызываем конструктор родителя (Person),
        // чтобы он инициализировал _name, _secondName и _age
        super(data);
        this._phone = data.phone;
    }

    // 2. Переопределяем метод, добавляя телефон
    getData(): IStudentData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
            phone: this._phone,
        };
    }
}
