"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = circle;

var _circle = _interopRequireDefault(require("../svg/circle"));

var _defaults = require("../defaults");

// Copyright 2016 Dan Finlay
// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function circle(seeder, fill, diameter, count) {
  const center = diameter / 2;
  const angle = seeder() * 360;
  const radius = (_defaults.SHAPE_COUNT - count) / _defaults.SHAPE_COUNT * (diameter / 2) + diameter / 8 * seeder();

  const offset = diameter / 4 * (seeder() + (count + 1) / _defaults.SHAPE_COUNT);

  const cx = offset * Math.sin(angle) + center;
  const cy = offset * Math.cos(angle) + center;
  const svg = (0, _circle.default)(radius, cx, cy);
  svg.setAttributeNS('', 'fill', fill);
  return svg;
}