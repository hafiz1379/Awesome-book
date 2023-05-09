import { DateTime } from '../node_modules/luxon/src/luxon.js';

const timeNow = () => {
  const now = DateTime.now();
  const formatted = now.toLocaleString(DateTime.DATETIME_FULL);
  const dateElem = document.getElementById('date');
  dateElem.innerHTML = formatted;
};

export default timeNow;