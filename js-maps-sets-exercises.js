/**
 * This new set
 * new Set([1,1,2,2,3,4])
 * returns {1,2,3,4}
 * 
 * This new set
 * [...new Set("referee")].join("")
 * returns, simply, "ref"
 * 
 * After I run the code for the new Map m,
 * let m = new Map();
 * m.set([1,2,3], true);
 * m.set([1,2,3], false);
 * 
 * The new map will look like this on the inside:
 * 0: {Array(3) => true}
 * 1: {Array(3) => false}
 * 
 * Next, we want to write a function called 
 * hasDuplicate which accepts an array and 
 * returns true if the array has a duplicate
 * or false if it doesn't:
 * 
 * const hasDuplicate = arr => new Set(arr).size !==
 * arr.length
 * 
 * The next function is pretty challenging to write,
 * first, in order to write the function vowelCount
 * which accepts a string and returns a map where
 * the keys are numbers and the values are the count 
 * of the vowels in the string, we need to create
 * a function beforehand named isVowel.
 * 
 * We don't actually have to write this function 
 * beforehand, but it will make our lives much
 * easier:
 * 
 */
function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}