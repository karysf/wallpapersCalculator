export function calculateRolls(roomLength,roomWidth,roomHeight, rollLength, rollWidth) {
    return (2*(roomLength+roomWidth)*(roomHeight+0.1)/(rollWidth*rollLength));

}