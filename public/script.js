let personData;
fetch("https://javascript-grunder-2021.netlify.app/.netlify/functions/users")
    .then(response => response.json())
    .then(json => personData = json)
    .then(() => {
        console.log(personData.results[0]);
        let index = 0;
        document.querySelectorAll(".person").forEach(person => {
            person.querySelector("div.image>img").setAttribute("src", personData.results[index].picture.large)
            person.querySelector(".fornamn").innerHTML = personData.results[index].name.first
            person.querySelector(".efternamn").innerHTML = personData.results[index].name.last
            index++;
        })
    });