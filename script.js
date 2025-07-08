const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Dummy data (you can replace this with API data later)
const movies = [
    {
        title: "Inception",
        rating: 8.8,
        overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
        image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
    },
    {
        title: "Interstellar",
        rating: 8.6,
        overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    },
    {
        title: "The Dark Knight",
        rating: 9.0,
        overview: "Batman faces the Joker, a criminal mastermind who plunges Gotham into anarchy.",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        title: "The Matrix",
        rating: 8.7,
        overview: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
        image: "https://image.tmdb.org/t/p/w500/aOIuZAjPaDHWmPs4nOvG8G8CwXR.jpg"
    }
];

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

function showMovies(movieList) {
    main.innerHTML = '';
    movieList.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="${getClassByRate(movie.rating)}">${movie.rating}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${movie.overview}
            </div>
        `;
        main.appendChild(movieEl);
    });
}

// Initial load
showMovies(movies);

// Optional: Add basic search functionality
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const term = search.value.toLowerCase();
    const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(term)
    );
    showMovies(filtered);
});
