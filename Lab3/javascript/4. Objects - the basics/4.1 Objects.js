
let user1 = {
    name: "John",
    surname: "Smith",
    name: "Pete"
};
delete user1.name;

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;



function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
function sumObjectProperties(salaries) {
    let result = 0;
    for (let key in obj) {
        result += salaries[key];
    }
    return result;
}


function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == 'number') {
            obj[key] *= 2;
        }
    }
}
