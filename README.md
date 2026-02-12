# 🎬 Movie Search App

A modern, responsive movie search application built with React and the OMDB API. Search for your favorite movies, view detailed information, ratings, cast, and more with a sleek Netflix-inspired interface.

![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff?logo=vite)
![React Router](https://img.shields.io/badge/React_Router-6.x-ca4245?logo=react-router)

## ✨ Features

- 🔍 **Search Movies** - Search for any movie by title using the OMDB API
- 🎥 **Movie Cards** - Beautiful grid layout displaying movie posters, titles, and years
- 📄 **Detailed View** - Click any movie to see full details including:
  - Plot synopsis
  - Cast and crew (actors, director, writer)
  - Ratings (IMDb, Rotten Tomatoes, Metacritic)
  - Release year, runtime, and rating
  - Genre tags
  - Awards and accolades
- 🔄 **React Router** - Smooth navigation between search and detail pages
- ⏳ **Loading States** - Visual feedback while fetching data
- ⚠️ **Error Handling** - User-friendly error messages for failed requests or no results
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Dark theme with smooth animations and hover effects

## 🛠️ Tech Stack

- **React** - UI library for building component-based interfaces
- **Vite** - Next-generation frontend build tool
- **React Router DOM** - Declarative routing for React applications
- **OMDB API** - The Open Movie Database API for movie data
- **CSS3** - Modern styling with flexbox, grid, and animations
- **PropTypes** - Runtime type checking for React props

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## 🚀 Getting Started

### 1. Get Your OMDB API Key

1. Visit [OMDB API](https://www.omdbapi.com/apikey.aspx)
2. Select the **FREE** tier (1,000 daily requests)
3. Enter your email address
4. Check your email and click the activation link
5. Copy your API key

### 2. Clone or Download the Project

```bash
# If using git
git clone <your-repo-url>

# Navigate to the project
cd movie-search-app
```

### 3. Install Dependencies

```bash
npm install
```

This will install:
- React and React DOM
- React Router DOM
- Vite and related tools
- PropTypes

### 4. Add Your API Key

Open the following files and replace `YOUR_API_KEY` with your actual OMDB API key:

**src/pages/Home.jsx** (line 6):
```javascript
const API_KEY = 'your-actual-api-key-here';
```

**src/pages/MovieDetail.jsx** (line 6):
```javascript
const API_KEY = 'your-actual-api-key-here';
```

### 5. Run the Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 📁 Project Structure

```
movie-search-app/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx         # Movie card component
│   │   └── MovieCard.css         # Movie card styles
│   ├── pages/
│   │   ├── Home.jsx              # Home page with search
│   │   ├── Home.css              # Home page styles
│   │   ├── MovieDetail.jsx       # Movie detail page
│   │   └── MovieDetail.css       # Detail page styles
│   ├── App.jsx                   # Main app component with routing
│   ├── App.css                   # Global app styles
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Base styles
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎮 How to Use

1. **Search for Movies**
   - Enter a movie title in the search box
   - Press Enter or click the "Search" button
   - Browse through the results displayed in a grid

2. **View Movie Details**
   - Click on any movie card
   - View comprehensive information about the movie
   - See ratings from multiple sources
   - Read the full plot synopsis
   - Check out cast and crew information

3. **Navigate Back**
   - Click the "Back to Search" button to return to search results
   - Your previous search will be preserved

## 🎨 Key Features Explained

### State Management
- Uses React's `useState` hook for managing:
  - Search input
  - Movie results
  - Loading states
  - Error messages
  - Filter states

### API Integration
- Uses `useEffect` hook for API calls
- Fetches data from OMDB API endpoints:
  - Search: `?s={searchTerm}` - Returns list of movies
  - Details: `?i={movieId}&plot=full` - Returns full movie details

### Routing
- `/` - Home page with search functionality
- `/movie/:id` - Dynamic route for movie details

### Error Handling
- Network errors catch and display user-friendly messages
- No results found displays helpful feedback
- Invalid API key detection
- Missing poster image fallback


### Blank page or nothing showing
- Check browser console (F12) for errors
- Verify API key is added in both Home.jsx and MovieDetail.jsx
- Ensure all files are in correct folders
- Check that `main.jsx` is properly importing App.jsx

### "Movie not found" error
- Check internet connection
- Try a different movie title

### Styling issues
- Clear browser cache
- Ensure all CSS files are imported correctly
- Check that CSS files are in the same directory as their JSX components

### No images showing
- Some movies may not have poster images
- The app displays "No Poster Available" as a fallback
- This is normal and expected behavior

## 📝 API Limitations

The free OMDB API tier has:
- 1,000 daily requests
- No commercial use
- Limited to basic movie data

For production apps, consider upgrading to a paid tier.

## 🤝 Contributing

This is a learning project, but feel free to:
- Fork the repository
- Create feature branches
- Submit pull requests
- Report bugs or suggest features

## 📄 License

This project is open source.

## 🙏 Acknowledgments

- [OMDB API](https://www.omdbapi.com/) for providing the movie data

- Netflix for design inspiration

## 📧 Contact

If you have questions or suggestions, feel free to reach out!


---

**Happy Movie Searching! 🍿**