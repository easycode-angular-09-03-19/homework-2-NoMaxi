console.log('mixins\n'.toUpperCase());

// 4. Есть два класса Junior и Middle создайте класс Senior который будет имплементировать
// этих два класса а также у него будет еще свой метод createArchitecture реализация
// данного метода может быть произвольной. Код:
class Junior {
    doTasks() {
        console.log('Actions!!!');
    }
}

class Middle {
    createApp() {
        console.log('Creating!!!');
    }
}

class Senior implements Junior, Middle {
    public doTasks(): void {
        console.log('Actions!!!');
    }

    public createApp(): void {
        console.log('Creating!!!');
    }

    public createArchitecture(): void {
        console.log('Creating the best architecture ever!!!');
    }
}

applyMixin(Senior, [Junior, Middle]);

const senior = new Senior();
// console.log(senior);
senior.doTasks();
senior.createApp();
senior.createArchitecture();


function applyMixin(targetClass, baseClasses) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClass.prototype[propName] = baseClass.prototype[propName];
        });
    });
}
