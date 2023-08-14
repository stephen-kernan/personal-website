export const getThemeColor = (number, theme, invert) => {
  const standardThemeColors = [
    theme.playerOne,
    theme.playerTwo,
    theme.playerThree,
    theme.playerFour
  ]

  const invertedThemeColors = [
    theme.playerTwo,
    theme.playerOne,
    theme.playerFour,
    theme.playerThree
  ]

  const themeColors = invert ? invertedThemeColors : standardThemeColors

  return themeColors[number % 4]
}
