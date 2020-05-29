/*var company=new Object();
company.name="facebook";
company.ceo=new Object();
company.ceo.firstname="Mark";
company.ceo.favcoloar="blue";
var stockprop="stock of company";
company[stockprop]=110;
console.log(company);
console.log("company ceo firstname is:"+company.ceo.firstname);
console.log(company["name"])
console.log("stock of company is: "+company["stock of company"])
//better way for objectliterv
var vizon= {
	name:"vizon",
	ceo: {
		firstname:"sandeep",
		lastname:"pala",
		stock:"110bn"

	},
	shares:"51%"
};
console.log(vizon);

//Functiomns
function multiply(x,y) {
	return x*y;
}
console.log(multiply(5,3));
multiply.version='1.2.3';
console.log(multiply.version);

function makeMultiplier(multiplier){
	var myFunc = function (x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3=makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

function doOperation(x, operation) {
	return operation(x);

}
var result = doOperation(5,multiplyBy3);
console.log(result);
var a=5;
var b=a;
console.log("a:" +a);
console.log(":b" +b);
b=6;
console.log("update a:" +a);
console.log("update b:" +b);


var c={x:7};
var d=c;
console.log(a);
console.log(b);
c.x=8;
console.log("after b.x ");
console.log(a);
console.log(b);*/
/*function test() {
	console.log(this);
	this.myname="sandeep"
}
test();
console.log(window.myname);*/
function Circle(radius) {
	this.radius=radius;
    this.getArea=	function ( ){
		return Math.PI*Math.pow(this.radius,2);
	};

}
var myCircle=new Circle(10);
console.log(myCircle.getArea());