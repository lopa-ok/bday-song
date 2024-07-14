async function getNumberOneSong() {
    const birthdate = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');

    if (!birthdate) {
        resultDiv.innerHTML = 'Please enter a valid date.';
        return;
    }

    const apiKey = "THE API KEY";
    const url = `https://billboard-api2.p.rapidapi.com/hot-100?date=${birthdate}&range=1-1`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'billboard-api2.p.rapidapi.com',
                'x-rapidapi-key': apiKey
            }
        });

        const data = await response.json();
        const song = data.content[0].title;
        const artist = data.content[0].artist;

        resultDiv.innerHTML = `The number one song on ${birthdate} was "<strong>${song}</strong>" by <strong>${artist}</strong>.`;

    } catch (error) {
        console.error(error);
        resultDiv.innerHTML = 'An error occurred while fetching the data. Please try again later.';
    }
}
