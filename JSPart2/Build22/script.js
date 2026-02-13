const users = [
    {
        name: "Ethan Brooks",
        pic: "https://images.pexels.com/photos/3775533/pexels-photo-3775533.jpeg",
        bio: "A passionate product designer who loves crafting intuitive user experiences."
    },
    {
        name: "Mia Chen",
        pic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        bio: "Creative marketer with a knack for storytelling and brand strategy."
    },
    {
        name: "Liam Patel",
        pic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        bio: "Software engineer dedicated to building scalable and efficient apps."
    },
    {
        name: "Sophia Alvarez",
        pic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        bio: "Project manager who keeps teams aligned and goals within reach."
    },
    {
        name: "Noah Schmidt",
        pic: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        bio: "Full-stack developer with a love for clean code and open source."
    },
    {
        name: "Olivia Rossi",
        pic: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        bio: "UX researcher focused on user behavior and meaningful insights."
    },
    {
        name: "Aiden Williams",
        pic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        bio: "Data analyst who finds stories in numbers and drives smart decisions."
    },
    {
        name: "Emma Collins",
        pic: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
        bio: "Content strategist who turns ideas into engaging digital stories."
    },
    {
        name: "Marcus Reed",
        pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        bio: "Business analyst focused on growth, metrics, and smart execution."
    },
    {
        name: "Leo Fernandez",
        pic: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        bio: "Frontend developer passionate about clean UI and smooth interactions."
    }
];



function showUsers(arr) {
    arr.forEach(user => {
        // Create main card
        const card = document.createElement("div");
        card.classList.add("card");

        // Create image
        const img = document.createElement("img");
        img.classList.add("bg-img");
        img.src = user.pic;
        img.alt = "background";

        // Create blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // Create content container
        const content = document.createElement("div");
        content.classList.add("content");

        // Create heading
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        // Create paragraph
        const para = document.createElement("p");
        para.textContent = user.bio;

        // Append elements
        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Add card to DOM
        document.querySelector(".card-holder").appendChild(card);
        // or document.querySelector(".cards-container").appendChild(card);
    });
}

showUsers(users);

let inp = document.querySelector(".search-input");

function capitalizeFirstLetter(value) {
    if (!value) return value;
    return value[0].toUpperCase() + value.slice(1);
}


inp.addEventListener("input", function () {
    let newUsers = users.filter((user => {
        return user.name.startsWith(capitalizeFirstLetter(inp.value.trim()));
    }));

    document.querySelector(".card-holder").innerHTML = "";
    showUsers(newUsers);

});
