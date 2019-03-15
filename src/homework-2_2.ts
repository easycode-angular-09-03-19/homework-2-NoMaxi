console.log('decorators. task 2\n'.toUpperCase());

// 2. Создать декоратор класса User. Он должен добавлять в данном классе поле createDate
// датой создания класса, а также добавлять поле type в котором будет записана строка
// ‘admin’ или ‘user’ данную строку нужно передать в декоратор при вызове. Сам класс
// и имя декоратора может быть произвольным.

function UserType() {
    return function (targetClass) {
        return class {
            public type: string;
            public createDate: string = new Date().toLocaleString();

            constructor (type: string) {
                this.type = type;
            }
        }
    }
}

@UserType()
class User {
    constructor(...properties: any[]) {}
}

const user = new User('admin');
console.log(user);