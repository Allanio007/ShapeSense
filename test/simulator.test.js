import test from 'node:test';
import assert from 'node:assert/strict';
import { buildShape } from '../src/simulator.js';

test('buildShape returns circle by default', () => {
  const circle = buildShape('circle', 50, 40, 20);

  assert.equal(circle.type, 'circle');
  assert.equal(circle.centerX, 50);
  assert.equal(circle.centerY, 40);
  assert.equal(circle.radius, 10);
});

test('buildShape returns square polygon points', () => {
  const square = buildShape('square', 10, 10, 8);

  assert.equal(square.type, 'polygon');
  assert.equal(square.points.length, 4);
});

test('buildShape returns triangle polygon points', () => {
  const triangle = buildShape('triangle', 0, 0, 12);

  assert.equal(triangle.type, 'polygon');
  assert.equal(triangle.points.length, 3);
});
