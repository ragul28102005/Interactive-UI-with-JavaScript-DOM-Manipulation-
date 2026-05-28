const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" }
];

const userContainer = document.getElementById("userContainer");

const addBtn = document.getElementById("addBtn");

function displayUsers(){

    userContainer.innerHTML = "";

    users.forEach(user => {

        const div = document.createElement("div");

        div.classList.add("user-card");

        div.innerHTML = `
            <h3>${user.name}</h3>
            <p>User ID: ${user.id}</p>
        `;

        userContainer.appendChild(div);

    });

}

displayUsers();

addBtn.addEventListener("click", () => {

    const newUser = {
        id: users.length + 1,
        name: "New User " + (users.length + 1)
    };

    users.push(newUser);

    displayUsers();

});
