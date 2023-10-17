//button functions


function russ() {
    alert("mvp!!!");
}





















        


//fetch
//get all players stats plus unique fact






function getallplayersNames() {
    fetch('http://localhost:3000/Players')
        .then(res => {
            return res.json();

        })
        .then(data => {
            data.forEach(Players => {
                const markup = `<li> ${Players.Name} </li>`;
                const pic = '<img scr = ${Players.image}>'
                document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
                document.querySelector('img').insertAdjacentHTML('afterbegin', pic);
            });


         
        })




  


}

function Positions() {
    fetch('http://localhost:3000/Players')
        .then(res => {
            return res.json();

        })
        .then(data => {
            data.forEach(Players => {
                const spot = `<li> ${Players.Position} </li>`;
                document.querySelector('ul').insertAdjacentHTML('afterbegin', spot);
               
            });



        })







}






