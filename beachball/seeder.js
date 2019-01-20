"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = seeder;

var _util = require("@polkadot/util");

// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const DIVISOR = 256 * 256;

function seeder() {
  let _seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Uint8Array(32);

  const seed = (0, _util.isU8a)(_seed) ? _seed : (0, _util.stringToU8a)(_seed);
  let index = seed[Math.floor(seed.length / 2)] % seed.length - 1;

  const next = () => {
    index += 1;

    if (index === seed.length) {
      index = 0;
    }

    return seed[index];
  };

  return () => {
    return (next() * 256 + next()) / DIVISOR;
  };
}