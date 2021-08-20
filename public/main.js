var hairs = 
[
    {
        id:0,
        text:"lorem",
        img:"hair5.jpeg"
    },


    {
        id:1,
        text:"lorem",
        img:"hair1.jpg"
    },

    {
        id:2,
        text:"lorem",
        img:"hair2.jpg"
    },


    {
        id:3,
        text:"lorem",
        img:"hair3.jpg"
    },


    {
        id:4,
        text:"lorem",
        img:"hair4.jpg"
    }



]

//selecting the html classes and ID

var imgs = document.querySelector('#images');

var text = document.querySelector('.info')

var container = document.querySelector('.container')

var rightbtn = document.querySelector('.rightbtn')

var leftbtn = document.querySelector('.leftbtn')

//set the count to zero
var current = 0;

//create a function will the needed steps to access the arrays 
function contain()

{

const all = hairs[current];

imgs.src= all.img;

text.textContent=all.text




}

//added event listener to the buttons 

rightbtn.addEventListener('click',()=>
{
    current++;

    if(current == hairs.length)
    {
        current = 0;
    }

    contain();
})




leftbtn.addEventListener('click',()=>
{
    current--;

    if(current === -1)
    {
        current = hairs.length-1;
    }

    contain();
})


/*

var date = new Date();
var today = date.getHours();
var greeting;



    if(today>=12)
    {
        greeting="BON APRES MIDI"
    }

    else if(today>=18)
    {
        greeting="BONSOIR"
    }
    else if(date>0)
    {
        greeting="Bon Bonjour"
    }

  

document.querySelector('.greeting').textContent=greeting;


*/