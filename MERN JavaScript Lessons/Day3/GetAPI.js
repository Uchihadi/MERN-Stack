const url = "https://jsonplaceholder.typicode.com/todos"

function fetchTodos() {
    var xhr = new XMLHttpRequest(); // 1.Create request object
xhr.open('GET', url); // 2.Open the URL
xhr.onload = function () { // 3.Mention code to run when response is received
   console.log("Todos data from server "+xhr.responseText);
};
xhr.send(); // 4.Send the Request

}

fetchTodos()