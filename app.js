function loadData() {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then (data => {

        let output = "";
        
        data.forEach(user => {

            output += `
            <h3>${user.name}</h3>
            <p>Email : ${user.email}</p>
            <p>Username : ${user.username}</p>
            <hr>
            `;
        });

        document.getElementById("output").innerHTML = output;
    })

    .catch(error => {
        console.log("Error :", error);
    });
}



