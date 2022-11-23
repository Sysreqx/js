function showNameDeclaration(name) {
    return name;
}


const showNameExpression = function (name) {
    return name;
}


const showNameArrowFunction = name => {
    return name;
}


console.log(showNameDeclaration("name#1"));
console.log(showNameExpression("name#2"));
console.log(showNameArrowFunction("name#3"));
