import { describe, expect, it } from 'vitest'
import { replaceRemWithPx } from '../src/utils'
import remToPxPlugin from '../src/index'

describe('replaceRemWithPx function', () => {
  it('should convert rem to px with default base font size', () => {
    expect(replaceRemWithPx('1rem')).toEqual('16px')
    expect(replaceRemWithPx('10rem')).toEqual('160px')
  })

  it('should convert rem to px with custom base font size', () => {
    expect(replaceRemWithPx('1rem', 10)).toEqual('10px')
    expect(replaceRemWithPx('10rem', 10)).toEqual('100px')
  })

  it('should convert rem to px for object values', () => {
    expect(replaceRemWithPx({
      a: '1rem',
    })).toEqual({
      a: '16px',
    })
  })

  it('should convert rem to px for nested object values', () => {
    expect(replaceRemWithPx({
      a: {
        b: '2rem',
        c: '3rem',
      },
    })).toEqual({
      a: {
        b: '32px',
        c: '48px',
      },
    })
  })

  it('should convert rem to px for arrays', () => {
    expect(replaceRemWithPx(['1rem', '2rem'])).toEqual(['16px', '32px'])
  })
})

describe('remToPxPlugin', () => {
  it('should apply custom base font size to the theme spacing', () => {
    const config = remToPxPlugin({
      baseFontSize: 16,
    }).config

    const remSpacing = config?.theme?.spacing[4]
    expect(remSpacing).toEqual('16px')
  })

  it('should apply custom base font size to the theme font size', () => {
    const config = remToPxPlugin({
      baseFontSize: 16,
    }).config

    const remFontSize = config?.theme?.fontSize?.sm
    expect(remFontSize).toEqual(['14px', { lineHeight: '20px' }])
  })

  it('should apply custom base font size to the theme borderRadius', () => {
    const config = remToPxPlugin({
      baseFontSize: 16,
    }).config

    const remBorderRadius = config?.theme?.borderRadius?.md
    expect(remBorderRadius).toEqual('6px')
  })
})
