'use strict';

const buildMap = (inputArrayA, inputArrayB) => {
  const map = new Map();
  const intersections = [];

  for (let a of inputArrayA) {
    map.set(a,1);
  }

  for (let b of inputArrayB) {
    if (map.get(b)) {
      intersections.push(b);
    }
  }
};

buildMap([1,2,3],[1,2,5]);

const buildMap = (inputArrayA, inputArrayB) => {
  const map = {};
  const intersections = [];

  for (let a of inputArrayA) {
    map[a] = 1;
  }

  for (let b of inputArrayB) {
    if (map[b] {
      intersections.push(b);
    }
  }
};

buildMap([1,2,3],[1,2,5]);