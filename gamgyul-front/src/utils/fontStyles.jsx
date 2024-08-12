/** theme 폰트 스타일 변환 함수 */
export function applyFontStyles(font) {
  return `
        font-size: ${font.fontSize};
        font-weight: ${font.fontWeight};
        line-heigth: ${font.lineHeight};
    `;
}
