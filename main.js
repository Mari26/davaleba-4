alert("hii");
alert("welcome");

var daysInYear = 365.25;
var daysInWeek = 7;
var yearsInLifetime = 80;

var average = (yearsInLifetime + daysInYear + daysInWeek) / 3 + "<br>";
document.write(average);

var greeting = 'hello';
var name = 'world';
var sumstring = greeting + " " + name;
alert(sumstring);
alert(sumstring.replace(/l/g, '1'));
var k = sumstring.replace(/l/g, '1');
document.write(k.split('').reverse().join('') + "<br>");

console.log(new Date().getHours());

const x = new Date().getHours();
if (x <= 18) {
    document.write("good day all");
} else if (x > 18 && x < 24) {
    document.write("good night");
} else {
    document.write("mdah");

}

//Arrays and Loops

sum = 0;
for (i = 10; i--;) {


    alert(i);


}


products = ['Cats', 'Cheese', 'Spanners', 'Lemons', 'Candyfloss'];

for (i = 0; i < products.length; i++) {
    console.log(products[i]);
}


var toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];

function makePizza() {
    return (toppings.join());
}
console.log(makePizza(toppings));


const names = ['Ali', 'Atta', 'Alex', 'John'];

const uppercased = names.map(name => name.toUpperCase());

console.log(uppercased);

//Closure