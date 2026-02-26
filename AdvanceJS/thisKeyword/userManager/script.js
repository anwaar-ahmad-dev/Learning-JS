let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let picture = document.querySelector("#photo");

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this))
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();

        // alert message

        function showAlert(message, time = 3000) {
            const alert = document.createElement("div");
            alert.textContent = message;

            alert.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: #15d539;
                color: white;
                padding: 12px 18px;
                border-radius: 8px;
                z-index: 9999;
            `;

            document.body.appendChild(alert);

            setTimeout(() => alert.remove(), time);
        }

        showAlert("Profile Added Successfully!", 3000);
    },
    addUser: function () {
        let userId = Date.now();
        this.users.push({
            id: userId,
            username: username.value,
            role: role.value,
            bio: bio.value,
            picture: picture.value,
        });
        form.reset();
        this.renderui();
    },
    renderui: function () {
        document.querySelector(".users").innerHTML = "";
        this.users.forEach(function (user) {
            const card = document.createElement("div");
            card.className =
                "relative bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";
            card.dataset.id = user.id;

            // Image
            const img = document.createElement("img");
            img.className =
                "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
            img.src = user.picture;
            img.alt = "User Photo";
            card.appendChild(img);

            // Name
            const name = document.createElement("h2");
            name.className = "text-2xl font-bold mb-1 text-blue-700";
            name.textContent = user.username;
            card.appendChild(name);

            // Role
            const role = document.createElement("p");
            role.className = "text-purple-500 mb-2 font-medium";
            role.textContent = user.role;
            card.appendChild(role);

            // Description
            const desc = document.createElement("p");
            desc.className = "text-gray-700 text-center";
            desc.textContent = user.bio;
            card.appendChild(desc);

            // Creating a delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.className =
                "absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-full shadow-md transition";
            deleteBtn.innerHTML = '<i class="ri-delete-bin-6-line"></i>';

            deleteBtn.addEventListener("click", () => {
                userManager.removeUser(user.id);
            });

            card.appendChild(deleteBtn);

            // Finally, append the card wherever needed, for example:

            document.querySelector(".users").appendChild(card);

        });
    },
    removeUser: function (id) {
        this.users = this.users.filter((user) => user.id !== id);
        this.renderui();
    },
};

userManager.init();