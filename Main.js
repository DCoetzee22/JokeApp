/* 
 Author: Danette Coetzee
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */




const button = document.getElementById('jokebtn');
const joke = document.getElementById('joke');

button.addEventListener("click",getResponse);
getResponse();

function getResponse() {
    const config = {
        headers:{
            'Accept': 'application/json'
        }
    };
    
    fetch('https://icanhazdadjoke.com',config)
            .then(res => res.json())
            .then(data => {
             joke.innerHTML = data.joke   
    });
}

button.addEventLister("click",getResponse);