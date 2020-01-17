const resolveAfterSetTime = function (resolveAfter) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("I am called asynchronously")
        },resolveAfter*1000)
    }
    )
}

function consoleResolveAfterSetTime(delay) {
    resolveAfterSetTime(delay)
    .then ((result)=>console.log(result))
}

consoleResolveAfterSetTime(6)
