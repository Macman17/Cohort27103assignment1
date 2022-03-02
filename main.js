console.log("Hello world");
console.warn("This is a warning message");
console.error("Error connecting to server");

let name="Naqui";
let email= "a@a.com"
let password=1929349;
let age=28;
let country="United States"
let salary=46000
let taxes= salary*0.11

let template=`
<p><b>Name:</b>${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Salary:</b> ${salary}</p>
<p><b>Taxes:</b> ${taxes}</p>
`
console.log(template);

console.log(`My name is ${name}, email ${email}, salary ${salary}.`);
document.write(template);