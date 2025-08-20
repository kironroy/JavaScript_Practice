'use strict';

export function formatDate(date) {
  return date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
