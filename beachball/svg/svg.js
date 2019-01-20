"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = svg;
// Copyright 2016 Dan Finlay
// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const SVG_NS = 'http://www.w3.org/2000/svg';

function svg(type) {
  return document.createElementNS(SVG_NS, type);
}