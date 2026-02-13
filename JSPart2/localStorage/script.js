// localStorage -----

// localStorage is a web storage object that allows you to store key-value pairs in a web browser with no expiration date.
// Data stored in localStorage persists even after the browser is closed and reopened.

// Example usage of localStorage:
// Storing data
// localStorage.setItem("name", "Ariz");

// // Retrieving data
// const userName = localStorage.getItem("name");
// console.log(userName); // Output: Ariz

// // Removing data
// localStorage.removeItem("name");

// // updating data
// localStorage.setItem("name", "Ariz"); // If the key does not exist, it will create a new key-value pair.
// localStorage.setItem("name", "New Ariz"); //If the key already exists, it will update the value.
// console.log(localStorage.getItem("name")); // Output: New Ariz


// cookie--

document.cookie = "username = Ariz; expires = Fri, 30 Jan 2026 12:00:00 UTC; path = /";
document.cookie = "email = test@test.com";
document.cookie = "age = 26";
document.cookie = "country = India";


// document.cookie = "username =; expires = Fri, 30 Jan 2020 00:00:00 UTC; path = /";

let cookies = document.cookie.split("; ");

cookies.forEach(cookie => {
    console.log(cookie);
})

