import cyberpunkNames from '../cyberpunk_names.json'

/**
 * Generate a grid pattern based on the glitch seed
 * @param colorScheme - The color scheme to use for the grid
 * @param glitchSeed - The seed to generate the pattern from
 * @param gridSize - The size of the grid to generate
 * @returns A 2D array of strings representing the grid pattern
 */
const generateGridPattern = ({
  colorScheme = 'blue-glitch',
  glitchSeed,
  gridSize = 5,
}: {
  colorScheme: string
  glitchSeed: string
  gridSize?: number
}) => {
  const hash = Array.from(glitchSeed).reduce(
    (total, current) => total + current.charCodeAt(0),
    0
  )
  const pattern: string[][] = []

  for (let y = 0; y < gridSize; y++) {
    pattern[y] = []
    for (let x = 0; x < gridSize; x++) {
      const value = (hash >> (x * y) % 8) & 1
      pattern[y][x] = value === 1 ? `${colorScheme}` : ''
    }
  }

  return pattern
}

const generateIdentityId = () =>
  cyberpunkNames?.[Math.floor(Math.random() * cyberpunkNames?.length)]?.id ??
  cyberpunkNames?.[0]?.id

export { generateGridPattern, generateIdentityId }
