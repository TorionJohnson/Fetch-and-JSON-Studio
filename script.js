window.addEventListener('load', function(){
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(response => response.json())
    .then(data => {
        let astronauts = data;
        let listOfAstronauts = '';
        let div = document.getElementById('container');
        astronauts.sort((a,b) => (a.hoursInSpace < b.hoursInSpace) ? 1 : -1)
        astronauts.forEach(astronaut => {
            let active = `${astronaut.active ? `<li><span>Active: ${astronaut.active}</span></li>` : `<li>Active: ${astronaut.active}</li>`}`
            listOfAstronauts +=`
            <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        ${active}
                        <li>Skills: ${astronaut.skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>`
        });
        div.innerHTML = listOfAstronauts + `<p>There's ${astronauts.length} astronauts showing currently</p>`;
    });
})