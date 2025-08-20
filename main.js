import { greetUser } from '/greet.js';
import { logActivity } from '/logger.js';
import { formatDate } from './utlis/dateFormatter.js';

const name = 'Kiron';
const now = new Date();

greetUser(name);
logActivity(`${name} visited on ${formatDate(now)}`);
