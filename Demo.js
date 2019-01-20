"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.to-string");

var _react = _interopRequireDefault(require("react"));

var _keyring = require("@polkadot/keyring");

var _utilCrypto = require("@polkadot/util-crypto");

var _index = _interopRequireDefault(require("./index"));

// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class Demo extends _react.default.PureComponent {
  render() {
    const identities = [];

    while (identities.length !== 10) {
      identities.push((0, _keyring.encodeAddress)((0, _utilCrypto.randomAsU8a)(32)));
    }

    return identities.map(value => _react.default.createElement(_index.default, {
      key: value.toString(),
      value: value
    }));
  }

}

exports.default = Demo;