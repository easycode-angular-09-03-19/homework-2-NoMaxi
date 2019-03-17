console.log('decorators. task 2\n'.toUpperCase());

// 2. Создать декоратор класса User. Он должен добавлять в данном классе поле createDate
// датой создания класса, а также добавлять поле type в котором будет записана строка
// ‘admin’ или ‘user’ данную строку нужно передать в декоратор при вызове. Сам класс
// и имя декоратора может быть произвольным.

function UserType(type: string) {
    return function (targetClass) {
        return class {
            public type: string = type;
            public createDate: string = new Date().toLocaleString();
        }
    }
}

@UserType('admin')
class User {}

const user = new User();
console.log(user);
