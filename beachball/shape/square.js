"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = square;

var _rect = _interopRequireDefault(require("../svg/rect"));

var _defaults = require("../defaults");

// Copyright 2016 Dan Finlay
// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function square(seeder, fill, diameter, count) {
  const center = diameter / 2;
  const svg = (0, _rect.default)(diameter);
  const firstRot = seeder();
  const angle = Math.PI * 2 * firstRot;
  const scale = count / _defaults.SHAPE_COUNT;
  const velocity = diameter / _defaults.SHAPE_COUNT * seeder() + scale * diameter;
  const tx = (Math.cos(angle) * velocity).toFixed(3);
  const ty = (Math.sin(angle) * velocity).toFixed(3);
  const rot = (firstRot * 360 + seeder() * 180).toFixed(1);
  svg.setAttributeNS('', 'transform', `translate(${tx} ${ty}) rotate(${rot} ${center} ${center})`);
  svg.setAttributeNS('', 'fill', fill);
  return svg;
}