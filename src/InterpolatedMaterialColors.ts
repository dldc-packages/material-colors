import type { Points } from '@dldc/colors';
import { InterpolatedColor } from '@dldc/colors';
import { MaterialColors } from './MaterialColors';

export type ColorName = keyof typeof MaterialColors;

export type InterpolatedMaterialColors = {
  [K in ColorName]: (v: number) => string;
};

// eslint-disable-next-line no-redeclare
export const InterpolatedMaterialColors: InterpolatedMaterialColors = Object.keys(
  MaterialColors,
).reduce<InterpolatedMaterialColors>((acc, key) => {
  const name: ColorName = key as any;
  const values: Points = [[0, '#ffffff'], ...MaterialColors[name], [1000, '#000000']];
  const color = InterpolatedColor(values);
  acc[name] = (val: number) => {
    if (val <= 0) {
      return '#ffffff';
    }
    if (val >= 1000) {
      return '#000000';
    }
    return color(val);
  };
  return acc;
}, {} as any);
