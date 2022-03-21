let usPresidents = [
  {name: "Ronald Reagan", year:"1981-1989",party:"Republican"},
  {name: "George Bush", year:"1989-1993",party:"Republican"},
  {name: "Bill Cilnton",year:"1993-2001",party:"Democrat"},
  {name: "Geroge W Bush", year: "2001-2009",party:"Repulican"},
  {name:"Barack Obama", year: "2009-2017",party:"Democrat"},
  {name:"Donald J. Trump", year: "2017-2021",party:"Repulican"},
  {name:"Joe Biden", year:"2021-Present",party:"Democrat"}];
let index = 0;
let buttonPressed = false;




function setup() {
  createCanvas(400, 400);
  background(145,255,0); 
  textSize(16);
  text("Click the mouse on the canvus to see a US Presiden", 10,30);
  console.log(usPresidents[index]);
  //index =int(random(5));
  console.log(index);
  mouseClicked(buttonPressed);
}
function mouseClicked(){
  buttonPressed = true;
}

function draw() {
  if (buttonPressed == true){
    index =int(random(6));
    text(usPresidents[index].name+", "+usPresidents[index].year + ", " +usPresidents[index].party,mouseX,mouseY);
   buttonPressed = false;
  }
}

