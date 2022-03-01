// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 16.13.0
// This file is automatically generated by "node/_tools/setup.ts". Do not modify this file manually

'use strict';
const common = require('../common');

const { OutgoingMessage } = require('http');

const warn = 'OutgoingMessage.prototype._headerNames is deprecated';
common.expectWarning('DeprecationWarning', warn, 'DEP0066');

{
  // Tests for _headerNames get method
  const outgoingMessage = new OutgoingMessage();
  outgoingMessage._headerNames; // eslint-disable-line no-unused-expressions
}