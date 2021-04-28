import { diff as _diff } from 'json-diff'
import { ParseFile } from './common.js'

const args = process.argv.slice(2)
if (args.length > 0) {
  console.log('Arguments: ', args)
  const left = ParseFile(args[0])
  const right = ParseFile(args[1])
  const diffs = _diff(left, right).filter(diff => diff[0] !== ' ')
  const diffsResults = []
  diffs.forEach(diff => {
    if (diff[0] === '+') {
      diffsResults.push({
        reason: 'The property is in the right side but not in the left side',
        property: diff[1]
      })
    } else {
      diffsResults.push({
        reason: 'The property is in the left side but not in the right side',
        property: diff[1]
      })
    }
  })
  console.table(diffsResults)
} else {
  console.log('Arguments not provided')
}
