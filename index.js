import { diff as _diff } from 'json-diff';
import { ParseFile } from './common.js';

let args = process.argv.slice(2)
if(args.length > 0){
    console.log('Arguments: ', args);
    let left = ParseFile(args[0])
    let right = ParseFile(args[1])
    const diffs = _diff(left, right).filter(diff => diff[0] !== ' ')
    let diffsResults = [];
    diffs.forEach(diff => {
        if(diff[0] === '+'){
            diffsResults.push({ 
                'reason' : 'The property is in the right side but not in the left side',
                'property' : diff[1] 
            })
        }
        else{
            diffsResults.push({
                'reason' : 'The property is in the left side but not in the right side',
                'property' : diff[1] 
            })
        }
    });
    console.table(diffsResults)
}
else{
    console.log('Arguments not provided');
}
