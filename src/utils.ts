type RemToPxInput = string | object | Function | null

function isFunction(input: RemToPxInput): input is (...args: any[]) => any {
  return typeof input === 'function'
}

export function replaceRemWithPx(input: RemToPxInput, baseFontSize = 16): RemToPxInput {
  if (input == null)
    return input

  if (typeof input === 'string') {
    return input.replace(
      /(\d*\.?\d+)rem$/,
      (_, val) => `${parseFloat(val) * baseFontSize}px`,
    )
  }

  if (Array.isArray(input))
    return input.map(val => replaceRemWithPx(val, baseFontSize))

  if (typeof input === 'object') {
    const ret: Record<string, RemToPxInput> = {}
    for (const key in input)
      // @ts-expect-error issue with any type
      ret[key] = replaceRemWithPx(input[key], baseFontSize)

    return ret
  }

  if (isFunction(input)) {
    return function (...args: any[]): any {
      const replacedArgs = args.map((arg) => {
        if (typeof arg === 'string') {
          return arg.replace(
            /(\d*\.?\d+)rem/g,
            (_, val) => `${parseFloat(val) * baseFontSize}px`,
          )
        }
        return arg
      })
      return input(...replacedArgs)
    }
  }

  return input
}
