'use strict';

import normalizeCoords from './normalize-coords';

export default function centerCoords(pairs, opts) {
  var xMin, xMax, yMin, yMax;
  var xCoords = pairs.map(pair => normalizeCoords(pair)[0]);
  var yCoords = pairs.map(pair => normalizeCoords(pair)[1]);
  var xCenter, yCenter, center;

  opts = opts || {};
  xMin = Math.min.apply(Math, xCoords);
  yMin = Math.min.apply(Math, yCoords);
  xMax = Math.max.apply(Math, xCoords);
  yMax = Math.max.apply(Math, yCoords);

  xCenter = xMin + ((xMax - xMin) / 2);
  yCenter = yMin + ((yMax - yMin) / 2);
  center = [xCenter, yCenter];

  if (opts.debug) {
    printDebug.bind(this);
  }

  return center;
}

function printDebug() {
  /*jshint ignore:start */
  console.log('pairs: ' + pairs);
  console.log('length: ' + pairs.length);
  console.log('first pair: ' + normalizeCoords(pairs[0]));
  console.log('xCoords: ' + xCoords);
  console.log('xMin: ' + xMin);
  console.log('xMax: ' + xMax);
  console.log('yCoords: ' + yCoords);
  console.log('yMax: ' + yMax);
  console.log('center: ' + center);
  /*jshint ignore:end */
}
