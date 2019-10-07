export function getWidthAsPercentOfTotalWidth  (percent: number, totalWidth: number ) {
    return parseInt(totalWidth * (percent / 100), 10);
}