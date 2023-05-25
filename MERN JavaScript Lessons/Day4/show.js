function show() {
        const heading = document.getElementsByTagName("h1")
        const headingData = heading[0]
        const btn = document.getElementById("toggleBtn")
        console.log("btn: ", btn.innerText)

        if (btn.innerText === "Show") {
            btn.innerText = "Hide"
        }


        headingData.innerText = ""
}