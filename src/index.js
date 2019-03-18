import cfg from '../config/config';
import {User} from './db'

const port = cfg.port;
const domain = cfg.domain;

console.log(`Starting server ${cfg.domain}:${cfg.port}.`);

// Need to implement router.
