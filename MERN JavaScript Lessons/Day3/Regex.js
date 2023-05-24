const greeting = "Welcome Shruti"
const pattern = "(We)*[jkl].*"


// const isMatching2 = greeting.match("come") --> True
// const isMatching2 = greeting.match("c.m") // --> Pattern Matches
// const isMatching2 = greeting.match("w.c.m") // --> It does not match due too small w
// const isMatching2 = greeting.match ("Welcome ")
// const isMatching3 = greeting.match(pattern)
// pattern = ".ab"
// pattern = "c.m"
// pattern = "W.c.m"
// pattern = "W..c.m"
// pattern = ".ab"
// pattern = ".*"
// pattern = "e.*u"

// const pattern = "^Sh"
// const pattern = "^.Sh"
// const pattern = "^.*Sh"
// const pattern = "^.*Sh$"
// const pattern = "^.*Sh.$"
// const pattern = "^.*Sh.*$"
// const pattern = "^.*Sr?h.$" Match
// const pattern = "^.*Sr?h.*$"
// const pattern = "^.*Sr+h.$"
// const pattern = "^.*Sr*h.$"
// const pattern = "^.*Sr*h.*$"
// const pattern = "^.*Sr*h.*t$"
// const pattern = "^.*Sr*h.*ti$"

// const pattern = "[t]"
// const pattern = "^.[t]"
// const pattern = "^.*[t]"
// const pattern = "^.+[t]"
// const pattern = "^.?e+[t]"
// const pattern = "^.?e.+[t]"
// const pattern = "^.?e.+[t]$"
// const pattern = "^.?e.+[t]$"
// const pattern = "^[.]?e.+[t]"
// const pattern = "^[.]*ti$"

// const pattern = "(We)+[jkl].*"
// const pattern = "(We)+[jkl].*"
// const pattern = "(We)*[a-z].*"
// const pattern = "(We)*[a-z0-9].*"
// const pattern = "(We)*[a-z0-9]i?$"


const isMatching = greeting.match(pattern)
console.log('isMatching: ', isMatching) // Gives an array of information including the string, index number, input, groups

if (isMatching){
    console.log("Pattern matches")
} else {
    console.log("Pattern does not match")
}
