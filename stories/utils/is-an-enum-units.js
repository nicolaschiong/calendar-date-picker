export default (units = '') =>
  typeof units === 'string' && units.match(/(positive|negative)/i)
