// Toast Notification

function createToaster(config) {
    return function (message) {
        let div = document.createElement("div");
        div.textContent = message;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-300 text-black" : "bg-green-600 text-white"} px-4 py-2 rounded transition-all duration-300 dark:bg-white dark:text-gray-800`;
        document.querySelector(".parent").appendChild(div);

        // console.log("hey");

        if (config.positionX !== "left" || config.positionY !== "top") {
            document.querySelector(".parent").classList.add(config.positionX === "right" ? "right-5" : "left-5", config.positionY === "bottom" ? "bottom-5" : "top-5");
        }

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    }
}

let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 3,
});

toaster("This is a toaster message");

setTimeout(() => {
    toaster("Download Done");
}, 2000);