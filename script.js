const movies = [
    {
        title: "Inception",
        year: "2010",
        poster_path: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
        vote_average: 8.8,
        overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea."
    },
    {
        title: "Interstellar",
        year: "2014",
        poster_path: "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        vote_average: 8.6,
        overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
        title: "The Dark Knight",
        year: "2008",
        poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        vote_average: 9.0,
        overview: "Batman faces the Joker, a criminal mastermind who plunges Gotham into anarchy."
    },
    {
        title: "The Matrix",
        year: "1999",
        poster_path: "/aOIuZAjPaDHWmPs4nOvG8G8CwXR.jpg",
        vote_average: 8.7,
        overview: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers."
    },
    {
        title: "Avatar",
        year: "2009",
        poster_path: "/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
        vote_average: 7.5,
        overview: "A paraplegic Marine dispatched to the moon Pandora becomes torn between following orders and protecting his new home."
    }
];

showMovies(movies);

function showMovies(movies) {
    const main = document.getElementById('main');
    main.innerHTML = '';
    movies.forEach(movie => {
        const { title, year, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
            <div class="movie-info">
                <div>
                    <h3>${title}</h3>
                    <small>${year}</small>
                </div>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `;
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) return 'green';
    else if (vote >= 5) return 'orange';
    else return 'red';
}
