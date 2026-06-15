export function buildShape(shape, centerX, centerY, size) {
  if (shape === 'square') {
    const half = size / 2;
    return {
      type: 'polygon',
      points: [
        [centerX - half, centerY - half],
        [centerX + half, centerY - half],
        [centerX + half, centerY + half],
        [centerX - half, centerY + half],
      ],
    };
  }

  if (shape === 'triangle') {
    const half = size / 2;
    return {
      type: 'polygon',
      points: [
        [centerX, centerY - half],
        [centerX + half, centerY + half],
        [centerX - half, centerY + half],
      ],
    };
  }

  return {
    type: 'circle',
    centerX,
    centerY,
    radius: size / 2,
  };
}
