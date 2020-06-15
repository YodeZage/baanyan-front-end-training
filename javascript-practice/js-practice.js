(() => {
    var a = 12;
    let b = 23;
    const c =33;

    // number, string, boolean, object, undefined
    // object: array, json, null, class, ....

    // var aa = { 'a': 12 };
    // console.log(aa);
    // var bb = aa;
    // console.log(bb);
    // bb.a = 23;
    // console.log(bb);
    // console.log(aa);

    function firstFunction(a, b) {
        a = a + 1;
        b = b - 1;
        return a + b;
    };
    // console.log(firstFunction(1, 2));

    var firstFunctionVariable = function(a, b) {
        a = a + 1;
        b = b - 1;
        return a + b;
    };
    // console.log(firstFunctionVariable(1, 2));

    (function(){
        // console.log("Hello, World!");
    })();

    var arrayFunction = ((a, b) => {
        a = a + 1;
        b = b - 1;
        return a + b;
    });
    // console.log(arrayFunction(1, 2));

    var obj = {
        "ObjFunction": function(a, b) {
            a = a + 1;
            b = b - 1;
            return a + b;
        }
    };
    // console.log(obj.ObjFunction(1, 2));

    var object = {
        a: {
            a: "I am value"
        },
        b: true
    };
    // console.log(object.a.a);
    // console.log(object.b);

})();


(()=>{
    var x = 1;
    if (true) {
        var x = 2;
        // console.log(x);
    }
    // console.log(x);


    let y = 1;
    if (true) {
        let y = 2;
        // console.log(y);
    }
    // console.log(y);


    // const q = {a: 12};
    // q = {b: 33};

    const z = {};
    z['Name'] = "Hello";
    // console.log(z);


    let a = undefined;
    let b = null;
    let c = 0;

    // console.log(typeof a);
    // console.log(typeof b);
    // console.log(typeof c);

    // console.log(a == b);
    // console.log(a == c);
    // console.log(b == c);

    // if (a) {
    //     console.log("T");
    // } else {
    //     console.log("F");
    // }
    // if (b) {
    //     console.log("T");
    // } else {
    //     console.log("F");
    // }
    // if (c) {
    //     console.log("T");
    // } else {
    //     console.log("F");
    // }


    // === vs == / !== vs !=
    // console.log([10] === 10);
    // console.log('10' === 10);
    // console.log([] === 0);
    // console.log(true === 1);
    // console.log([] === false);
    // console.log('' === 0);
    // console.log('' === false);
    // console.log(null === undefined);

    // console.log(!null === true);
    // console.log(![] === false);

    // console.log(typeof null);
    // console.log(typeof !!null);

    // console.log(null == false);
})();


(()=>{
    // Class
    function Car() {
        let description = "My name is: ";
        this.tellName = function(aName) {
            console.log(description + aName);
        };
    };

    // let toyota = new Car();
    // let honda = new Car();
    // toyota.tellName("Toyota");
    // honda.tellName("Honda");
    // console.log(typeof toyota);
    // console.log(toyota.tellName === honda.tellName); // false
    // console.log(toyota.description);



    function Animal() {
        this.description = "I am: ";
    }
    Animal.prototype.tellName = function(aName) {
        console.log(this.description + aName);
    };

    // let cat = new Animal();
    // let dog = new Animal();
    // cat.tellName("cat");
    // dog.tellName("dog");
    // console.log(cat.tellName === dog.tellName);
    // console.log(cat.description);

    // console.log(Animal.prototype.isPrototypeOf(cat));
    // console.log(Animal.prototype.hasOwnProperty("description"));
    // console.log(Animal.prototype.hasOwnProperty("tellName"));



    class Person {
        constructor() {};
        description = "I am: ";
        #age = 22;
        tellName(aName) {
            console.log(this.description + aName);
            console.log(this.#age);
        }

        printAge() {
            console.log(this.#age);
        }

        get age() {
            return this.#age;
        }
        set age(aValue) {
            this.#age = aValue;
        }
    }

    // let student = new Person();
    // student.tellName("student");
    // console.log(student.description);
    // console.log(student.age);
    // student.age = 33;
    // console.log(student.age);
    // student.printAge();
})();


(()=>{
    // console.log(x);
    // var x = 23;

    // let y = 22;
    // console.log(y);


    // firstFunction();
    // function firstFunction() {
    //     console.log("My first function");
    // }

    // var secondFunction = function() {
    //     console.log("My second function");
    // }
    // secondFunction();


    class z {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }
    }
    var zz = new z(12, 23);
    // console.log(zz);
})();


(function(){
    // "use strict";

    var a = 23;
    function testFunction() {
        var aa = 22;
        return a + aa;
    }

    // console.log(testFunction());


    let x = {
        get y() {
            return 1;
        }
    }
    // x.y = 2;


    let xx = 12;
    // console.log(xx);
    // delete xx;


    function firstFunction() {
        return this;
    }
    function secondFunction() {
        "use strict";
        return this;
    }

    // console.log(firstFunction());
    // console.log(secondFunction());

})();


(() => {
    let a = 1;
    let b = 2;
    let c = 3;

    let array = [0, 0, 0];
    // console.log(array);
    
    array = [a, b, c];
    // console.log(array);

})();


(()=>{
    function first(){
        let a = 23;

        return function() {
            return a;
        }
    }

    // console.log(first.a);
    // console.log(first()());
})();


(() => {
    // setTimeout(() => {
    //     console.log("1");
    // }, 1000);

    // console.log("2");

    let ff = function(b) {
        return b;
    }
    // console.log(ff(4));


    function callBack(a) {
        return a(23);
    }
    // console.log(callBack(ff))    


    // for(var i = 0; i < 5; i++) {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, 0);
    // }
})();


(() => {
    let p = new Promise((resolve, reject) => {
        let condition = false;
        if (condition) {
            resolve('Success');
        } else {
            reject('Failed');
        }
    });

    // p.then(function(message) {
    //     console.log("In THEN: " + message);
    // }).catch((error) => {
    //     console.log("In CATCH: " + error);
    // });

    // p.then(function(message) {
    //     console.log("In THEN: " + message);
    // }).then(function(message) {
    //     console.log("In THEN: " + message);
    // }).then(function(message) {
    //     console.log("In THEN: " + message);
    // }).then(function(message) {
    //     console.log("In THEN: " + message);
    // }).then(function(message) {
    //     console.log("In THEN: " + message);
    // }).catch((error) => {
    //     console.log("In CATCH: " + error);
    // });


    const studentLate = true;
    const studentMissing = false;

    // function classSessionCallback(callback, errorCallback) {
    //     if (studentLate) {
    //         errorCallback({
    //             isGood: false,
    //             reason: 'Student is LATE'
    //         })
    //     } else if (studentMissing) {
    //         errorCallback({
    //             isGood: false,
    //             reason: 'Student is MISSING'
    //         })
    //     } else {
    //         callback({
    //             isGood: true,
    //             reason: 'Student is GOOD'
    //         })
    //     }
    // }

    // classSessionCallback((message) => {
    //     console.log("I am GOOD");
    //     console.log(message.isGood + ' ' + message.reason);
    // }, (error) => {
    //     console.log("I am BAD");
    //     console.log(error.isGood + ' ' + error.reason);
    // });



    // function classSessionPromise() {
    //     return new Promise((resolve, reject) => {
    //         if (studentLate) {
    //             reject({
    //                 isGood: false,
    //                 reason: 'Student is LATE'
    //             });
    //         } else if (studentMissing) {
    //             reject({
    //                 isGood: false,
    //                 reason: 'Student is MISSING'
    //             });
    //         } else {
    //             resolve({
    //                 isGood: true,
    //                 reason: 'Student is GOOD'
    //             });
    //         }
    //     });
    // }

    // classSessionPromise().then((message) => {
    //     console.log(message.isGood + ' ' + message.reason);
    // }).catch((error) => {
    //     console.log(error.isGood + ' ' + error.reason);
    // });



    const isP1Success = true;
    const isP2Success = true;
    const isP3Success = true;

    // const promiseOne = new Promise((resolve, reject) => {
    //     // if (isP1Success) {
    //     //     resolve('I am promise 1 SUCCESS');
    //     // } else {
    //     //     reject('I am promise 1 FAILED');
    //     // }

    //     setTimeout(() => {
    //         if (isP1Success) {
    //             resolve('I am promise 1 SUCCESS');
    //         } else {
    //             reject('I am promise 1 FAILED');
    //         }
    //     }, 3000)
    // });

    // const promiseTwo = new Promise((resolve, reject) => {
    //     // if (isP2Success) {
    //     //     resolve('I am promise 2 SUCCESS');
    //     // } else {
    //     //     reject('I am promise 2 FAILED');
    //     // }

    //     setTimeout(() => {
    //         if (isP2Success) {
    //             resolve('I am promise 2 SUCCESS');
    //         } else {
    //             reject('I am promise 2 FAILED');
    //         }
    //     }, 2000)
    // });

    // const promiseThree = new Promise((resolve, reject) => {
    //     // if (isP3Success) {
    //     //     resolve('I am promise 3 SUCCESS');
    //     // } else {
    //     //     reject('I am promise 3 FAILED');
    //     // }

    //     setTimeout(() => {
    //         if (isP3Success) {
    //             resolve('I am promise 3 SUCCESS');
    //         } else {
    //             reject('I am promise 3 FAILED');
    //         }
    //     }, 1000)
    // });

    // Promise.all([
    //     promiseOne,
    //     promiseTwo,
    //     promiseThree
    // ]).then((messages) => {
    //     console.log(messages);
    // }).catch((errors) => {
    //     console.log(errors);
    // });

    // Promise.race([
    //     promiseOne,
    //     promiseTwo,
    //     promiseThree
    // ]).then((message) => {
    //     console.log(message);
    // }).catch((errors) => {
    //     console.log(errors);
    // });

})();


(()=>{
    let a = [3, 4, 5];
    let b = new Array(3, 4, 5);

    // console.log(a);
    // console.log(b);


    function findElement(aArray, aValue) {
        for (let i = 0; i < aArray.length; i++) {
            if (aValue === aArray[i]) {
                return i;
            }
        }
        return -1;
    }
    let x = [1, 2, 3, 4, 5];
    let y = 2;
    
    // console.log(x.indexOf(y));
    // console.log(x.includes(y, 1));

    // x.forEach((i)=>{
    //     console.log(i);
    // })

    let everyValue = x.every((e) => {
        return e % 2 === 0;
    });
    // console.log(everyValue);

    let someValue = x.some((element) => {
        return element % 2 === 0;
    });
    // console.log(someValue);
})();


(()=>{
    let inputString = "Hello, World!";
    let stringPattern = "Hello, World!";
    // console.log(stringPattern === inputString);


    let pattern = /Hello, World!/;
    let rePattern = new RegExp("Hello, world!");
    // console.log(rePattern.test(inputString));


    //number character
    let x1 = "234sdfs";
    let x2 = "2s";
    let x3 = "ssd";
    let x4 = "23";

    let firstRE = /^\d+[A-Za-z]+$/;
    // console.log(firstRE.test(x1));
    // console.log(firstRE.test(x2));
    // console.log(firstRE.test(x3));
    // console.log(firstRE.test(x4));
})();