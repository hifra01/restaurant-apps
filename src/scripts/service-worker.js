/* eslint-disable no-restricted-globals,no-underscore-dangle */
import { registerRoute } from 'workbox-routing';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { skipWaiting, clientsClaim } from 'workbox-core';

const THREE_DAYS_IN_SECONDS = 259200;

skipWaiting();
clientsClaim();

precacheAndRoute([
  ...self.__WB_MANIFEST,
  {
    url: 'https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap',
    revision: 1,
  },
  {
    url: 'https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap',
    revision: 1,
  },
],
{
  // Ignore all URL parameters.
  ignoreURLParametersMatching: [/.*/],
});

registerRoute(
  /^https:\/\/dicoding-restaurant-api\.el\.r\.appspot\.com/,
  new NetworkFirst({
    cacheName: 'restaurant-data',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: THREE_DAYS_IN_SECONDS,
      }),
    ],
  }),
);

cleanupOutdatedCaches();
