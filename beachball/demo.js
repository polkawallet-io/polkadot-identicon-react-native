"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _keyring = require("@polkadot/keyring");

var _util = require("@polkadot/util");

var _utilCrypto = require("@polkadot/util-crypto");

var _index = _interopRequireDefault(require("./index"));

// Copyright 2016 Dan Finlay
// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const element = document.getElementById('demo');

function generateIcon() {
  let seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _keyring.encodeAddress)((0, _utilCrypto.randomAsU8a)(32));
  const start = Date.now();

  if ((0, _util.isNull)(element)) {
    throw new Error('Unable to find #demo element');
  }

  element.appendChild((0, _index.default)(seed, 100, 'padded'));
  console.log(`Icon generated in ${Date.now() - start}ms`);
}

function generateIcons() {
  let count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 512;
  generateIcon((0, _keyring.encodeAddress)(new Uint8Array(32)));

  for (let index = 1; index < count; index++) {
    generateIcon();
  }
}

generateIcons();