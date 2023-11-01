#!/usr/bin/env node

import picodel from './index.js';

const filePaths = process.argv.slice(2);
await picodel(...filePaths);
