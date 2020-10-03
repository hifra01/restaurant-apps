import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '../styles/main.scss';
import './components/app-bar';
import './components/hero-jumbotron';
import App from './views/app';
import registerServiceWorker from './utils/register-sw';

const app = new App({
  button: document.querySelector('.button__drawer'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  registerServiceWorker();
});
