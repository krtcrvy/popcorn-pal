# PopcornPal

PopcornPal is a React-based web application for managing and rating movies. It provides a user-friendly interface to search for movies, view details, and keep track of watched movies.

## Table of Contents

- Installation
- Usage
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- Dependencies
- DevDependencies
- Contributing
- License

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/krtcrvy/popcorn-pal.git
   ```
2. Navigate to the project directory:
   ```sh
   cd popcorn-pal
   ```
3. Install the dependencies:
   ```sh
   pnpm install
   ```

## Usage

To start the development server, run:

```sh
pnpm run dev
```

Open your browser and navigate to [`http://localhost:5173`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A27%2C%22character%22%3A35%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition") to see the application in action.

## Project Structure

```
popcorn-pal/
├── .gitignore
├── biome.json
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public/
├── README.md
├── src/
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Box.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Loader.jsx
│   │   ├── Logo.jsx
│   │   ├── Main.jsx
│   │   ├── Movie.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── MovieList.jsx
│   │   ├── Navbar.jsx
│   │   ├── NumResults.jsx
│   │   ├── Search.jsx
│   │   ├── Star.jsx
│   │   ├── StarRating.jsx
│   │   ├── WatchedMovie.jsx
│   │   ├── WatchedMoviesList.jsx
│   │   ├── WatchedSummary.jsx
│   ├── hooks/
│   │   ├── useKey.js
│   │   ├── useLocalStorageState.js
│   │   ├── useMovies.js
│   ├── index.css
│   ├── main.jsx
├── vite.config.js
```

## Available Scripts

In the project directory, you can run:

### [`pnpm run dev`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A24%2C%22character%22%3A0%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition")

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `pnpm run build`

Builds the app for production to the [`dist`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2F.gitignore%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A10%2C%22character%22%3A0%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition") folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `pnpm run lint`

Runs ESLint to analyze the code for potential errors and code style issues.

### `pnpm run preview`

Serves the production build locally to preview it.

## Dependencies

- [`prop-types`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A10%2C%22character%22%3A6%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1033%2C%22character%22%3A2%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1822%2C%22character%22%3A6%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2225%2C%22character%22%3A2%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^15.8.1
- [`react`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A13%2C%22character%22%3A5%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A13%2C%22character%22%3A6%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1043%2C%22character%22%3A2%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1798%2C%22character%22%3A16%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2229%2C%22character%22%3A6%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^18.3.1
- [`react-dom`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A16%2C%22character%22%3A6%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1043%2C%22character%22%3A2%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A2235%2C%22character%22%3A2%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^18.3.1

## DevDependencies

- [`@biomejs/biome`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A20%2C%22character%22%3A7%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1246%2C%22character%22%3A3%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): 1.8.3
- [`@eslint/js`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A23%2C%22character%22%3A7%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1379%2C%22character%22%3A3%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1843%2C%22character%22%3A7%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^9.9.0
- [`@types/react`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A26%2C%22character%22%3A7%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^18.3.3
- [`@types/react-dom`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A29%2C%22character%22%3A7%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^18.3.0
- [`@vitejs/plugin-react-swc`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A32%2C%22character%22%3A7%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^3.5.0
- [`eslint`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A13%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A23%2C%22character%22%3A8%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1350%2C%22character%22%3A4%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1798%2C%22character%22%3A2%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^9.9.0
- [`eslint-plugin-react`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A38%2C%22character%22%3A6%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1798%2C%22character%22%3A2%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^7.35.0
- [`eslint-plugin-react-hooks`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A41%2C%22character%22%3A6%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1798%2C%22character%22%3A2%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^5.1.0-rc.0
- [`eslint-plugin-react-refresh`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1802%2C%22character%22%3A2%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A44%2C%22character%22%3A6%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^0.4.9
- [`globals`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A26%2C%22character%22%3A5%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A47%2C%22character%22%3A6%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1370%2C%22character%22%3A6%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^15.9.0
- [`vite`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A12%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fpopcorn-pal%2Fpnpm-lock.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A32%2C%22character%22%3A8%7D%7D%5D%2C%22a2ef3b6e-9a5b-44f1-95ba-79fb647fc35c%22%5D "Go to definition"): ^5.4.1

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
