import {calculateRolls} from "./wallpaperCalculation";

test("It should calculate amount of wallpaper rolls", ()=>{
   const roomLength = 5;
   const roomWidth = 6;
   const roomHeight = 2.75;
   const rollLength = 10;
   const rollWidth = 1.06;
   const result = Math.ceil(calculateRolls(roomLength, roomWidth, roomHeight, rollLength, rollWidth));
   expect(result).toBe(6);
});