// Our custom math module

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function product(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

function modulo(a,b){
    return a%b;
}

function concat(s1,s2){
    return s1+' '+s2;
}

module.exports = {
    add,
    subtract,
    product,
    division,
    modulo,
    concat
};