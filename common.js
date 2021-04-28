/**
 * Common Library
 * This Library contains common functions used in the project.
 */
import { parse } from 'dotenv'
import LineByLine from 'n-readlines'

function ValidateLine (line) {
  if (line !== '' && line !== '{}') {
    return (!line.startsWith('#'))
  } else return false
}

/**
 * Parses a filename into json array object
 * @param {string} filename
 * @returns {array(json)} Json Array object
 */
function ParseFile (filename) {
  const fileParsed = []
  const liner = new LineByLine(filename)
  let line

  // eslint-disable-next-line no-cond-assign
  while (line = liner.next()) {
    if (ValidateLine(line.toString())) {
      const prop = parse(line)
      fileParsed.push(prop)
    }
  }
  return fileParsed
}

const _ParseFile = ParseFile
export { _ParseFile as ParseFile }
