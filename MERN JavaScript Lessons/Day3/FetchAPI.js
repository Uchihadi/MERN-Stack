const url = "https://jsonplaceholder.typicode.com/todos"

// fetch(url).then(
//     (response) => {
//         console.log("Response: ", response)
//     }
// ).catch(
//     (error) => {
//         console.log("Error: ", error)
//     }
// )

// Using async await
async function fetchTodo(){
    try {
        const response = await fetch (url) //wait for the operation to be finish
        const data = await response.json()
        console.log("Data: ", data)
    } catch (error) {
        console.log("Error: ", error)
    }
    
}

fetchTodo()