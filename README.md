#### Objects:
Method | Description
-------|------------
`isObj(v)`                             | *Is value an Object?*
`isEmptyObj(v)`                        | *Is value an empty Object?*
`objLength(o)`                         | *Length of an Object.*
`extend( obj1, obj2 [, obj3, ...] )`   | *Make the right-most object argument inherit from the previous left object arguments. (`obj2` inherits from `obj1`, `obj3` inherits from `obj2`.)*
Arrays:
`isArr(v)`                             | *Is value an Array?*
`moveArrItem(arr, from, to)`           | *Move array item from to.*
Functions:
`isFn(v)`                              | *Is value a Function?*
`getArgs(arguments)`                   | *Call it inside a function and pass it the `arguments` and it returns a normal array from `arguments`.*
Strings:
`isStr(v)`                             | *Is value a String?*
`isEmptyStr(v)`                        | *Is value an empty String?*
`substrBeforeLast(char, str)`          | *Get the substring before the last occurrence of `char` in `str`.*
`substrAfterLast(char, str)`           | *Get the substring after the last occurrence of `char` in `str`.*
`substrBeforeFirst(char, str)`         | *Get the substring before the first occurrence of `char` in `str`.*
`substrAfterFirst(char, str)`          | *Get the substring after the last occurrence of `char` in `str`.*
Numbers:
`isNum(v)`                             | *Is value a Number?*
`isNAN(v)`                             | *Is value `NaN`?*
`isInt(number)`                        | *Is a number an integer one?*
`isNumOdd(n)`                          | *Is a number odd?*
`negateNum(n)`                         | *Make a positive number negative.*
`positNum(n)`                          | *Make a negative number positive.*
`reverseNumSign( n)`                   | *Reverse a number's sign.*
`randInt(min, max)`                    | *Generate a random integer, between min and max arguments. (default between 0 and 10)*
`randFloat(min, max)`                  | *Generate a random floating-point, between min and max arguments. (default between 0 and 10)*
`toDecimalPlace(n)`                    | *Filter a floating-point decimal places to a specific amount.*
Misc:
`isBool(v)`                            | *Is value a Boolean?*
`isUndef(v)`                           | *Is value `undefined`?*
`isNull(v)`                            | *Is value `null`?*

## util.extend() example:
```javascript
function newPerson(name, age) {
    var inst = {}; // the instance (this)

    inst.name = name || "no_name";
    inst.age  = age  || false;

    return inst;
}

function newEmployee(name, age, jobTitle, id) {
    var inst = {}, // the instance (this)
        person = newPerson(name, age),
        idCounter = 0;

    inst = util.extend( person, inst );

    inst.jobTitle  = jobTitle || "uknown_title";
    inst.employeId = id       || "employe_"+(idCounter+=1);

    return inst;
}

var employee = newEmployee("ali", 26, "product_manager");

employee.name      // "ali"
employee.age       // 26
employee.jobTitle  // "product_manager"
employee .id       // "employe_1"

// You can think of it this way:
class Employee extends Person {
    constructor(name, age, jobTitle, id) {
        super(name, age);
    }
}
```