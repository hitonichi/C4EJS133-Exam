const profiles = [
    {
        name: "Lelah Nichols",
        loc: "Troy, MI",
        img: "./assets/images/Nichol.png",
        tags: ["clothes", "stem"]
    },
    {
        name: "Jesus Weiss",
        loc: "Fort Worth, TX",
        img: "./assets/images/Jame.png",
        tags: ["headset", "gadget", "speed", "winter"]
    },
    {
        name: "Annie Rice",
        loc: "Austin, TX",
        img: "./assets/images/Annie.png",
        tags: ["road", "mountain", "trip", "earth", "nature"]
    },
    {
        name: "Robert Brower",
        loc: "Cincinnati, OH",
        img: "./assets/images/Robert.png",
        tags: ["Maintenance", "games", "frames", "repair"]
    },
    {
        name: "Amy Campbell",
        loc: "Warrior, AL",
        img: "./assets/images/Amy.png",
        tags: ["music", "disks"]
    },
    {
        name: "Anthony S. Morin",
        loc: "Lyndhurst, NJ",
        img: "./assets/images/Anthony.png",
        tags: ["vintage", "electric"]
    },
]

let container = document.getElementById('grid');

const generateProfile = (profiles) => {
    container.innerHTML = '';
    profiles.forEach(profile => {
        // Used for tags
        let s = "";
        profile.tags.forEach(tag => {
            s += `<div class="tag">${tag}</div>`
        });
        container.innerHTML += `
        <div class="profile-container">
            <img class="pfp" src="${profile.img}">
            <div class="profile-info">
                <div class="profile-title">
                    <div class="profile-name">${profile.name}</div>
                    <div class="profile-loc">${profile.loc}</div>
                </div>
                <div class="profile-tags">
                    ${s}
                </div>
            </div>
        </div>
        `;
    });
}

generateProfile(profiles);