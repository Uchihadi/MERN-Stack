function borrowMoney (amount) {
    return new Promise (
        function (resolve, reject) {
            if (amount <= 1000){
                resolve ("Got money")
            } else {
                reject (new Error ("Money not found!!"))
            }
        }
    )
}

borrowMoney(500).then (
    (response) => {
        console.log("Response: ", response)
    }
).catch(
    (error) => {

    }
)