'use strict';

import { logWithBlankLines } from './logBlankLines.js';

logWithBlankLines('Phytoplankton weekly samples.');

class PhytoplanktonBag {
  constructor() {
    this.contents = new Map();
    this.warningThreshold = 5;
  }

  add(species) {
    const count = this.contents.get(species) || 0;
    this.contents.set(species, count + 1);
  }

  count(species) {
    return this.contents.get(species) || 0;
  }

  summary() {
    const lines = [];
    for (const [species, count] of this.contents.entries()) {
      lines.push(`${species}: ${count}`);
    }

    const pseudoCount = this.count('Pseudo-nitzschia');

    if (pseudoCount > this.warningThreshold) {
      lines.push(
        '⚠️ WARNING: High concentration of Pseudo-nitzschia detected. Potential harmful bloom.'
      );
    } else if (pseudoCount > 0) {
      lines.push(
        '✅ Pseudo-nitzschia detected at low levels. No immediate concern.'
      );
    }

    return lines.join('\n');
  }

  toArray() {
    const result = [];
    for (const [species, count] of this.contents.entries()) {
      result.push(...Array(count).fill(species));
    }
    return result;
  }
}

/////////////////////////// Render //////////////////////////////

logWithBlankLines('September 19, 2025 Sample');

const sept_19_2025 = new PhytoplanktonBag();

// Simulated sample contents
const sept_19_2025_arr = [
  'Chaetoceros',
  'Chaetoceros',
  'Thalassiosira',
  'Pseudo-nitzschia',
  'Pseudo-nitzschia',
  'Pseudo-nitzschia',
  'Pseudo-nitzschia',
  'Pseudo-nitzschia',
  'Pseudo-nitzschia', // triggers warning
  'Ceratium',
  'Ceratium',
  'Akashiwo',
  'Licmophora',
  'Licmophora',
  'Entomoneis',
  'Skeletonema',
  'Rhizosolenia',
];

sept_19_2025_arr.forEach(species => sept_19_2025.add(species));

console.log(sept_19_2025.summary());

logWithBlankLines('September 26, 2025 Sample');

const sept_26_2025 = new PhytoplanktonBag();

const sept_26_2025_arr = [
  'Chaetoceros',
  'Chaetoceros',
  'Thalassiosira',
  'Pseudo-nitzschia',
  'Psept_26_2025_arria',
  'Ceratium',
  'Ceratium',
  'Ceratium',
  'Ceratium',
  'Ceratium',
  'Ceratium',
  'Akashiwo',
  'Licmophora',
  'Licmophora',
  'Entomoneis',
  'Skeletonema',
  'Rhizosolenia',
];

sept_26_2025_arr.forEach(species => sept_26_2025.add(species));

console.log(sept_26_2025.summary());
