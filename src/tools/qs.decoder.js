export default function decoder (value) {
  if (/^(\d+|\d*\.\d+)$/.test(value)) {
    return parseFloat(value)
  }

  let keywords = {
    true: true,
    false: false,
    null: null,
    undefined: undefined
  }
  if (value in keywords) {
    return keywords[value]
  }

  return value
}
