// var fruits = ["olma", "nok", "olcha", 2];


// var arrInc = fruits.includes("banan", 25); => Boolean

// includes array metodi va 2 ta param qabul qiladi 1- stringda qidirilyotgan element nomi  , 2 - fromIndex qaysi indexdan boshlab qidirish lozim

// for (var meva of fruits) {
// console.log(meva);
// }


// callbackfn
// function sayHello(){

// }

// sayHello(sayGoodbye());


// fruits.forEach(function(meva){
//  console.log(meva);
// })

// fruits.forEach(function(item, i, arr){
//  console.log(item, i, arr);
// })

// Arrow function

// var func = (a, b) => {
//   console.log(a, b);
//   return a + b;
// }

// var func = (a, b) => a + b;


// console.log(func(5, 6));

// callbackfunction
// fruits.forEach(function(item){
//   console.log(item);
// })

// fruits.forEach(item => console.log(item));


// var fruits = ["olma", "nok", "olcha", 2];

// fruits.forEach((item, index) => console.log(item , index));

// fruits.forEach(function(item, index){

//   var newItem = document.createElement("li");
//   var newSpan = document.createElement("span");

//   newItem.textContent = item;
//   newSpan.textContent = index + 1;

//   newItem.prepend(newSpan);
//   list.appendChild(newItem);
// })

// console.log(typeof []);

// var

// var age = 26; // Declaration
// age = 30; // Re-assigment
// var age = 60; // Re-declaration

// ES-6

// let

// let userAge = 26; // Declaration
// userAge = 30; // Re-assigment
// let userAge = 60; // Re-declaration NOT allowed

// const
// const userAge = 26; // Declaration
// userAge = 30; // Re-assigment Not allowed
// const userAge = 60; // Re-declaration NOT allowed


// Hoisting

// var userName // undifened;

// console.log(userName);

// const userName = "Jonibek";


// consol();

// function consol() {
// console.log("Hoisting uchradim yedim");
// }


// userName();

// var userName = function(){
//   console.log("Uzr");
// }

// Scope => Qavs (Glabol{}, Block{}, functional{});

// let age = 25;



// function user(){
//   console.log(age + "voya");
// }

// user();

// if(age > 18){
//   console.log(age + "Voyaga yetgan");
// }

// let age = 25;

// if(age > 15){
//  var userSurname = "Birnimayev";

// //  console.log(age, userSurname);
// }

// for (const iterator of object) {

// }

// function nemo(){
//   var userList = 25;
// }
// let arrow = () =>{

// }
// var func = function(){

//   return a + b;
// }

// console.log(userSurname);
// console.log(userList);

// func();

// const func = function(){
//   console.log("Hoisting");
// }
 
 


let elList = document.querySelector('.js-list');
let elSel = document.querySelector('.js-select');   
let elSel2 = document.querySelector('.js-sel');



    pokemons.forEach((poke) =>{
    
        newItem = document.createElement("li");
        
    
        elSpan = document.createElement("span");
        elSpan.textContent = poke.num;
        newItem.appendChild(elSpan); 
    
        elTitle = document.createElement("h2");
        elTitle.textContent = poke.name;
        newItem.appendChild(elTitle); 
    
        elImg = document.createElement("img");
        elImg.src = poke.img;
        newItem.appendChild(elImg); 
    
        elText = document.createElement("p");
        elText.textContent = poke.type;
        newItem.appendChild(elText); 
    
        elStrong = document.createElement("strong");
        elStrong.textContent = poke.spawn_time;
        newItem.appendChild(elStrong); 

        elList.appendChild(newItem);
    
    });   



let DomList = new Set();
 
pokemons.forEach((el) => { 

el.type.forEach((elVelu) => { 

  DomList.add(elVelu);
}); 

}); 

DomList.forEach((el) => { 

  let newOpsh = document.createElement('option');
  newOpsh.value = el;
  newOpsh.textContent = el; 

   elSel.appendChild(newOpsh);
});


elSel.addEventListener('change', function(evt) { 

 evt.preventDefault();

 let elSelect = elSel.value;
 let ArrFiltir = [];
 elList.innerHTML = '';


 pokemons.forEach((elnam) => { 

  if(elnam.type.includes(elSelect)){ 

    ArrFiltir.push(elnam);

  }

 }); 


ArrFiltir.forEach((poke) => { 

  newItem = document.createElement("li");
 
 elSpan = document.createElement("span");
 elSpan.textContent = poke.num;
 newItem.appendChild(elSpan); 

 elTitle = document.createElement("h2");
 elTitle.textContent = poke.name;
 newItem.appendChild(elTitle); 

 elImg = document.createElement("img");
 elImg.src = poke.img;
 newItem.appendChild(elImg); 

 elText = document.createElement("p");
 elText.textContent = poke.type;
 newItem.appendChild(elText); 

 elStrong = document.createElement("strong");
 elStrong.textContent = poke.spawn_time;
 newItem.appendChild(elStrong); 

 elList.appendChild(newItem);

});

}); 

 
elSel2.addEventListener('change', function() { 

  let arrNew = [];
  elList.innerHTML = '';

  if(elSel2.value == 'Aa-Zz'){ 

    let New = pokemons.sort((a, b) => { 

     let TitleA = a.name.toUpperCase().charCodeAt(0); 
     let TitleB = b.name.toUpperCase().charCodeAt(0); 

     if(TitleA < TitleB){ 

      return -1;
     } else if(TitleA > TitleB){ 


      return 1;
     } else{ 

      return 0;
     }
       
    }) 

    arrNew = New;
  } 
  

  if(elSel2.value == 'Zz-Aa'){ 

    let New = pokemons.sort((a, b) => { 

     let TitleA = a.name.toUpperCase().charCodeAt(0); 
     let TitleB = b.name.toUpperCase().charCodeAt(0); 

     if(TitleA > TitleB){ 

      return -1;
     } else if(TitleA < TitleB){ 

      return 1;
     } else{ 

      return 0;
     }
       
    }) 

    arrNew = New;
  } 
   
  
arrNew.forEach((poke) => { 

  newItem = document.createElement("li");
 
 elSpan = document.createElement("span");
 elSpan.textContent = poke.num;
 newItem.appendChild(elSpan); 

 elTitle = document.createElement("h2");
 elTitle.textContent = poke.name;
 newItem.appendChild(elTitle); 

 elImg = document.createElement("img");
 elImg.src = poke.img;
 newItem.appendChild(elImg); 

 elText = document.createElement("p");
 elText.textContent = poke.type;
 newItem.appendChild(elText); 

 elStrong = document.createElement("strong");
 elStrong.textContent = poke.spawn_time;
 newItem.appendChild(elStrong); 

 elList.appendChild(newItem);

});
 

});

 

const elBteen = document.querySelector('.js-btn') 

var elColor = false;
 
elBteen.addEventListener('click', function() { 

  elColor = !elColor;

  var bg = elColor ? 'dark' : 'light';

  window.localStorage.setItem('elColor', bg); 
  domFunksiya();
}) 

function domFunksiya (){ 

  if(window.localStorage.getItem('elColor') == 'dark'){ 

    document.body.classList.add('dark');
  } else{ 

    document.body.classList.remove('dark');
  }
} 
domFunksiya();
