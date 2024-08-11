import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import { replaceRemWithPx } from './utils'

interface PluginOptions {
  baseFontSize?: number
}

export default plugin.withOptions<PluginOptions>(
  (options) => {
    return function ({ addBase, addComponents, addUtilities, theme }) {
      // Plugin functionality can be added here if needed in the future
    }
  },
  (options) => {
    const baseFontSize = options?.baseFontSize ?? 16

    return {
      theme: replaceRemWithPx(defaultTheme, baseFontSize) as typeof defaultTheme,
    }
  },
)
