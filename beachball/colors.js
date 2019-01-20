"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = colors;

var _color = _interopRequireDefault(require("color"));

var _defaults = require("./defaults");

// Copyright 2016 Dan Finlay
// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const WOBBLE = 30;

function colors(seeder) {
  const amount = seeder() * WOBBLE - WOBBLE / 2;

  const all = _defaults.COLORS.map(hex => (0, _color.default)(hex).rotate(amount));

  return function () {
    let alpha = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    const index = Math.floor(all.length * seeder());
    return all.splice(index, 1)[0].alpha(alpha).string();
  };
}