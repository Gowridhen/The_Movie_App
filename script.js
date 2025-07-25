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

const main = document.getElementById('main');
const search = document.getElementById('search');
const ratingFilter = document.getElementById('ratingFilter');
const toggleTheme = document.getElementById('toggleTheme');

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function getClassByRate(vote) {
  if (vote >= 8) return 'green';
  else if (vote >= 5) return 'orange';
  return 'red';
}

function showMovies(movieList) {
  main.innerHTML = '';
  movieList.forEach(movie => {
    const { title, year, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    if (favorites.some(fav => fav.title === title)) movieEl.classList.add('favorite');

    movieEl.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
      <button class="favorite-btn ${isFavorite(title) ? 'active' : ''}">❤️</button>
      <div class="movie-info">
        <div>
          <h3>${title}</h3>
          <small>${year}</small>
        </div>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview"><strong>Overview:</strong> ${overview}</div>
    `;

    // Toggle overview
    movieEl.addEventListener('click', e => {
      if (!e.target.classList.contains('favorite-btn')) {
        movieEl.classList.toggle('active');
      }
    });

    // Favorite
    movieEl.querySelector('.favorite-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(movie);
      showMovies(filterMovies());
    });

    main.appendChild(movieEl);
  });
}

function isFavorite(title) {
  return favorites.some(movie => movie.title === title);
}

function toggleFavorite(movie) {
  if (isFavorite(movie.title)) {
    favorites = favorites.filter(m => m.title !== movie.title);
  } else {
    favorites.push(movie);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function filterMovies() {
  const text = search.value.toLowerCase();
  const rating = parseFloat(ratingFilter.value);
  return movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(text) &&
      movie.vote_average >= rating
    );
  });
}

search.addEventListener('input', () => {
  showMovies(filterMovies());
});

ratingFilter.addEventListener('change', () => {
  showMovies(filterMovies());
});

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleTheme.textContent = document.body.classList.contains('light') ? '🌞 Light Mode' : '🌙 Dark Mode';
});

// Initial render
showMovies(movies);
