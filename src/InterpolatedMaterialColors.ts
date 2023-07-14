import type { Points } from '@dldc/colors';
import { InterpolatedColor } from '@dldc/colors';
import { MaterialColors } from './MaterialColors';

export type TColorName = keyof typeof MaterialColors;

export type IInterpolatedMaterialColors = {
  [K in TColorName]: (v: number) => string;
};

// eslint-disable-next-line no-redeclare
export const InterpolatedMaterialColors: IInterpolatedMaterialColors = Object.keys(
  MaterialColors,
).reduce<IInterpolatedMaterialColors>((acc, key) => {
  const name: TColorName = key as any;
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
