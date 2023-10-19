//button functions
function Lebron() {
    alert("Joined the NBA straight from high school, The last player to do this that is still active in the NBA");

}
function russ() {

    alert("Earned the NBA Most Valuable Player Award (MVP) for the 2016–17 season. Russell Westbrook holds the record for the most NBA career regular season triple doubles with 198, and is the only player to average a triple-double over four different seasons.")




}

function Erving() {

    alert("Erving led the 76ers to the NBA finals four times in seven years, including their 1983 championship win. He was voted the NBA's Most Valuable Player in 1981. He retired in 1987 after having become the third professional player to have scored a career total of 30,000 points.")

}

function Ewing() {

    alert("Two - time Olympic gold medalist in men's basketball, in 1984 in L.A. and 1992 in Barcelona (as part of the celebrated original Dream Team)")
}

function stock() {

    alert("e was a ten-time All Star, led the league in assists a record nine consecutive seasons, and holds the single-season record for assists with 1,164. At the time of his retirement, Stockton held the NBA career record for assists and steals with 15,806 and 3,265 respectively.")

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






