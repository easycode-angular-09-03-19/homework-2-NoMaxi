console.log('decorators. task 1\n'.toUpperCase());

// 1. Создать декоратор метода addItemInfoDecorator он должен добавлять поле date в
// возвращаемом объекте с датой когда был вызван метод а также поле info в котором будет
// записан текст состоящий из названия товара и его цены например: ‘Apple iPhone - $100’;
// Для того что бы функция была вызвана в правильном контексте внутри декоратора,
// ее нужно вызывать через apply: let origResult =  originalFunc.apply(this);

function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {
    // save the original descriptor.value to a variable
    const origFunc: Function = descriptor.value;
    descriptor.value = function (): Object {
        // call the original function and save the result object to a variable
        let origFuncResult = origFunc.apply(this);

        // add new properties to the original result object
        origFuncResult.date = new Date().toLocaleString();
        origFuncResult.info = `${this.name} - $${this.price}`;

        return origFuncResult;
    };
}

class Item {
    public price: number;
    public name: string;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    @addItemInfoDecorator
    public getItemInfo() {
        return {
            name: this.name,
            price: this.price
        };
    }
}

let item = new Item('Apple iPhone', 100);
console.log(item.getItemInfo());