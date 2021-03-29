document.write("hello world")

function sayhello(){
var response = prompt("What is your name?");
alert("hello" + response + ", have a good day :)")
}

function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(100,30));

function showtopic(){
  var x = document.getElementById("demo")
  x.style.fontcolor="blue";
  x.style.fontsize="25px";
}

var movies = ["avengers","captain marvel","black panther","spider man"];
movies[0] = "wonder woman"
console.log(movies)

var movie = {
  name:"averengers",
  movietime:"12pm"
}

alert(movie.name);
movie.status="avaliable";
console.log(movie);

var fruits=[]
for(i=1;i<10;i++){
  fruits[i]=prompt("enter fruit");
}
alert("fruits contains"+ fruits);
