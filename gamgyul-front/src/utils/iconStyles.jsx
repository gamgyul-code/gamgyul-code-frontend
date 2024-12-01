/** svg 아이콘 색상 변환 함수 */
export function applyIconColors(color) {
  let iconColor;
  switch (color) {
    case "primary":
      iconColor = "invert(57%) sepia(42%) saturate(4074%) hue-rotate(121deg) brightness(95%) contrast(76%)";
      break;
    case "gray1":
      iconColor = "invert(40%) sepia(6%) saturate(197%) hue-rotate(202deg) brightness(90%) contrast(82%)";
      break;
    case "gray2":
      iconColor = "invert(80%) sepia(1%) saturate(0%) hue-rotate(69deg) brightness(91%) contrast(92%)";
      break;
    case "sub1":
      iconColor = "invert(96%) sepia(5%) saturate(1338%) hue-rotate(82deg) brightness(88%) contrast(103%)";
      break;
    case "sub2":
      iconColor = "invert(94%) sepia(11%) saturate(556%) hue-rotate(33deg) brightness(100%) contrast(91%)";
      break;
    case "white":
      iconColor = "invert(100%) sepia(0%) saturate(7500%) hue-rotate(142deg) brightness(108%) contrast(100%)";
      break;
  }

  return `filter: ${iconColor};`;
}
