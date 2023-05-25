function showname() {
    const name = document.getElementById("name")
    const value = name.value
    document.getElementsByTagName("h1")[0].innerText = value
}

function hide() {
    const name = document.getElementById("name")
    const value = name.value("")
    document.getElementsByTagName("h1")[0].innerText = value
}

