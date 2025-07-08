const movies = [
    {
        title: "Inception",
        poster_path: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
        vote_average: 8.8,
        overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea."
    },
    {
        title: "Interstellar",
        poster_path: "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        vote_average: 8.6,
        overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    }
];

showMovies(movies);

function showMovies(movies) {
    const main = document.getElementById('main');
    main.innerHTML = '';
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
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

