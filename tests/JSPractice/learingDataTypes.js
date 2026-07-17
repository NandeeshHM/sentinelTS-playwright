var student = 'John';

function greet(student) {
    return 'Hello, ' + student ;

}

console.log(greet(student));

console.log(typeof(greet(student)));



let hobbies = ['reading', 'swimming', 'coding','dancing','painting','singing','hating']

hobbies.push('traveling');
hobbies.push(10);
console.log(hobbies[1]);

for (let i = 0; i < hobbies.length; i++) {
    hobbies[i]
}
console.log(hobbies.length);

hobbies.forEach(p => console.log(p));
console.log(hobbies);
console.log(hobbies[3]);


function letAdd(a,b){
    return a + b;
}

console.log(letAdd(5, 10));

let mycal = [5, 10, 15, 20];
mycal.sort((a, b) => a + b);


