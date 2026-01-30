// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

const common = require('../common');
const assert = require('assert');
const { exec } = require('child_process');
const { join } = require('path');
const fs = require('fs');

// Test that the install-foundry.sh script exists and is executable

const scriptPath = join(__dirname, '..', '..', 'tools', 'install-foundry.sh');

// Verify script exists
assert(fs.existsSync(scriptPath), 'install-foundry.sh should exist');

// Verify script is executable
const stats = fs.statSync(scriptPath);
const isExecutable = (stats.mode & 0o111) !== 0;
assert(isExecutable, 'install-foundry.sh should be executable');

// Verify script contains expected content
const scriptContent = fs.readFileSync(scriptPath, 'utf8');
assert(scriptContent.includes('foundry.paradigm.xyz'),
       'Script should reference foundry.paradigm.xyz');
assert(scriptContent.includes('foundryup'),
       'Script should reference foundryup');
