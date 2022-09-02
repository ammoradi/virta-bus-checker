export const FontFamilies = {
  IBMPlexSans: 'ibm-plex-sans, sans-serif',
  IBMPlexMono: 'ibm-plex-mono, sans-serif'
} as const

export const FontWeights = {
  regular: 400,
  text: 500,
  semiBold: 700
} as const

export const ThemeFonts = {
  families: FontFamilies,
  weights: FontWeights
} as const