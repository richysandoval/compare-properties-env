/**
 * Common Library
 * This Library contains common functions used in the project.
 */
import { parse } from 'dotenv';
import lineByLine from 'n-readlines';

function ValidateLine(line){
    if( line !== '' && line !== '{}' ){
        return (! line.startsWith("#") )
    }
    else return false;
}

/**
 * Parses a filename into json array object
 * @param {string} filename 
 * @returns {array(json)} Json Array object
 */
function ParseFile(filename){
    let fileParsed = [];
    const liner = new lineByLine(filename);
    let line;

    while (line = liner.next()) {
        if(ValidateLine(line.toString())) {
            const prop = parse(line)
            fileParsed.push(prop)
        }
    }
    return fileParsed;
}

const _ParseFile = ParseFile;
export { _ParseFile as ParseFile };
