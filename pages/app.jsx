// pages/_app.js (or _app.jsx)
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // if you have custom styles
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

