// // How to begin: 
// // Create a new HTML/CSS/JS and complete the following in your .js file
// // Make a radio Object.Give it a property called stations and make the value an array of station objects
// // Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// // Song object should have two properties: title and artist
// // Create a method on your radio object that changes the station randomly. 
// // When the station is changed, pick a song from that station console.log("Now Playing:" + song.title + "by" + song.artist


let Radio = {
    Stations: [{
            name: "Hot 97",
            songs: [
                { title: "Crazy", artist: "Aerosmith" },
                { title: "BABY BABY", artist: "Britney Spears" },
                { title: "Magic", artist: "Bruno mars" },
            ]
        },
        {
            name: "power 105",
            songs: [
                { title: "Happy Birthday", artist: "John Lennon" },
                { title: "ABC", artist: "Stevie wonder" },
                { title: "good times", artist: "abraham linclon" },
            ]
        },
        {
            name: "LaMega",
            songs: [
                { title: "Bingo Bingo", artist: "Tego Calderon" },
                { title: "Boombastic", artist: "Shaggy" },
                { title: "Down", artist: "The Uppers" },
            ]
        }
    ],

    ChangeStation() {
        Rstation = Math.floor(Math.random() * Radio.Stations.length)
        console.log(`Rstation ${Rstation}`)
        RANDOMSTATION = Radio.Stations[Rstation]
        console.log(`RANDOMSTATION ${RANDOMSTATION}`)
        Rsong = Math.floor(Math.random() * RANDOMSTATION.songs.length)
        console.log(`Rsong ${Rsong}`)
        randomRadio = Radio.Stations[Rstation].songs[Rsong]
        console.log("Now Playing: " + randomRadio.title + " by " + randomRadio.artist + " ON RADIO " + RANDOMSTATION.name)
        document.getElementById('radioPrint').innerHTML = ("Now Playing: " + randomRadio.title + " by " + randomRadio.artist + " ON RADIO " + RANDOMSTATION.name)
    }
}


Radio.ChangeStation()