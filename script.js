window.addEventListener('load', function(){
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(response => response.json())
    .then(data => {
        let astronauts = data;
        let listOfAstronauts = '';
        let div = document.getElementById('container');
        astronauts.forEach(astronaut => {
            listOfAstronauts +=`
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>`
        });
        div.innerHTML = listOfAstronauts;
    });
})