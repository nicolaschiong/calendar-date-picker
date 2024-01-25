export default (value = '') =>
  (typeof value === 'string' &&
    value.length &&
    value[0].toUpperCase() + value.substr(1).toLowerCase()) ||
  value ||
  ''
