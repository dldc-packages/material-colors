import { expect } from "$std/expect/mod.ts";
import { InterpolatedMaterialColors } from "../mod.ts";

Deno.test("colors at 500 match raw colors", () => {
  expect(InterpolatedMaterialColors.red(500)).toEqual("#F44336");
  expect(InterpolatedMaterialColors.blue(500)).toEqual("#2196F3");
  expect(InterpolatedMaterialColors.blueAccent(400)).toEqual("#2979FF");
});
