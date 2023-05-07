import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import { replaceRemWithPx } from './utils'

interface PluginOptions {
  baseFontSize?: number
}

export default plugin.withOptions(
  // @ts-expect-error
  () => {},
  ({ baseFontSize = 16 }: PluginOptions = {}) => ({
    theme: replaceRemWithPx(defaultTheme, baseFontSize),
  }),
)
