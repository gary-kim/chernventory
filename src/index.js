import cfg from '../config/config';
import {User} from './db';
import express from 'express';

const app = express();
const port = cfg.port;
const domain = cfg.domain;

console.log(`Server would be started on ${cfg.domain}:${cfg.port}.`);

// Need to implement router.

