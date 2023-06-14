import { DateTime } from './modules/luxon';
import BookCollection from './modules/bookCollection';
import setupNavigation from './modules/navigation';

BookCollection.init();
setupNavigation();

// Display time in the top right corner
const currentTime = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);
const header = document.querySelector('header');
const timeElement = document.createElement('p');
timeElement.textContent = `Current time: ${currentTime}`;
timeElement.classList.add('time');
header.appendChild(timeElement);