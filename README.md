Some utility functions that I always use:
-----------------------------------------
`isObj( v )`_____________________________________**Is value an Object?**

`isArr( v )`_____________________________________**Is value an Array?**

`isFn( v )`______________________________________**Is value a Function?**

`isStr( v )`_____________________________________**Is value a String?**

`isNum( v )`_____________________________________**Is value a Number?**

`isBool( v )`____________________________________**Is value a Boolean?**

`isUndef( v )`___________________________________**Is value undefined?**

`isEmptyObj( v )`_______________________________**Is Object empty?**

`isEmptyStr( v )`_______________________________**Is String empty?**

`objLength( o )`________________________________**Length of an Object.**

`getArgs( arguments )`_________________________**For using inside a function.**

`moveArrItem(arr, from, to)`___________________**Move array item from to.**

`isInt( number )`_______________________________**Is a number an integer one?**

`negateNum( n )`________________________________**Make a positive number negative.**

`positNum( n )`_________________________________**Make a negative number positive.**

`reverseNumSign( n )`___________________________**Reverse a number's sign.**

`isNumOdd( n )`__________________________________**Is a number odd?**

`randInt( min, max )`___________________________**Generate a random integer, between min and max arguments.**

`randFloat( min, max )`_________________________**Generate a random floating-point, between min and max arguments**

`toDecimalPlace( n )`___________________________**Filter a floating-point decimal places to a specifiv amount.**

`extend( obj1, obj2 [, obj3, ...] )`__________**Make the right-most object argument inherit from the previous left object arguments. (obj2 inherits from obj1, obj3 inherits from obj2.)**

util.extend() example:
----------------------

    function newPerson(name, age) {
    	var inst = {}; // the instance (this)
    	
    	inst.name = name || 'no_name';
    	inst.age  = age  || false;
    	
    	return inst;
    }
    
    function newEmployee(name, age, jobTitle, id) {
    	var inst = {}, // the instance (this)
    		person = newPerson(name, age),
    		idCounter = 0;
    	
    	inst = util.extend( person, inst );
    	
    	inst.jobTitle  = jobTitle || 'uknown_title';
    	inst.employeId = id       || 'employe_'+(idCounter+=1);
    	
    	return inst;
    }
    
    var employee = newEmployee('ali', 26, 'product_manager');
    
    employee.name      // 'ali'
    employee.age       // 26
    employee.jobTitle  // 'product_manager'
    employee .id       // 'employe_1'
    	
    // You can think of it this way:
    class Employee extends Person {
    	constructor(name, age, jobTitle, id) {
    		// super(name, age);
    	}
    }
