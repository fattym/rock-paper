//var name = prompt ('what is your name ?')
function greeting (yourName){
    var result ="hello" +""+yourName
    

}
/*/greeting(name)
var num =0
while (num < 100){
    num  +=1;
    console.log(num)
}

for (let num = 0; num <= 100; num ++){
    console.log(num)
} 

data types: number, array or list in python and objects or diictionary in pyhon, null ,undifend , boolean 
let fruit = "banana"
let moreFruit ="bannaapple"
 
document.getElementById('joe').innerHTML= fruit.slice 
methods 
console.log(fruit.split(',')) this split with a comma in a array [1,2,3]
console.log(fruit.split('')) this split with by charact in a array ["","",""]

*/
fruits =new Array('kim','joe','joy','ann')
console.log (fruits[2])
fruits[2] ='red';
console.log(fruits )

for (let i =0 ;i < fruits.length; i++){
    console.log(fruits[i]);
}
//arrey common method: tostring
// conditonals else if



// rock paper code
function rpsGame(options){
    console.log (options);
    var humanChoice,botChoice;
    humanChoice=options.id
    botChoice =numb(randInt())
    alert('computer choice:'+botChoice)
    result= decideWinner(humanChoice,botChoice);
    alert(result)
    message=finalMessage(result);
    alert(message)

//rpsFrontEnd(options.id,botChoice,message);
}
function randInt(){
    return Math.floor(Math.random()*3);
}
function numb(number){
    return ['rock','paper','scissors'] [number];
}

function decideWinner(options,computerChoice){
    var data ={
        'rock':{'scissors':1 ,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5 ,'sissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    };
    var yourscore=data[options][computerChoice]; 
    var computerscore =data[computerChoice][options];
    return [yourscore,computerscore];
}
function finalMessage([yourscore, computerscore]){
    if (yourscore === 0){
        return{'message':'you lost!','color':'red'};
    }else if (yourscore === 0.5){
        return{'message':'you drawed!','color':'green'};
    }else{
        return{'message':'you won!','color':'green'};
    }
}