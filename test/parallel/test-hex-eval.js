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

// Test hexadecimal evaluation: echo $(( 0x10d4f ))
// The hexadecimal value 0x10d4f should equal 68943 in decimal

const scriptPath = join(__dirname, '..', '..', 'hex-eval.js');

exec(`"${process.execPath}" "${scriptPath}"`, common.mustSucceed((stdout, stderr) => {
  const output = stdout.trim();
  assert.strictEqual(output, '68943', 'hex-eval.js should output 68943');
  assert.strictEqual(stderr, '', 'stderr should be empty');
}));

// Also test the direct hexadecimal evaluation in JavaScript
const hexValue = 0x10d4f;
assert.strictEqual(hexValue, 68943, '0x10d4f should equal 68943');
