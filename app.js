const { edibles, childLikeability } = require('./edibles')
const { poisonList } = require('./poisonous')
require('./index.js')
const me = "the test to pass "
console.log(me)
const greet = "hello there"
let greetProg = ""
let i =0 
let intervine = setInterval(() => {
    greetProg += greet[i]
    i++
//    console.log(greet.slice(0,i))
    console.log(greetProg)
    if (i === greet.length) {
        console.log("reached")
        callbackofClear()
     }
}, 100)
let callbackofClear=function(){
    clearInterval(intervine)
}
edibles.forEach((item) =>{
    childLikeability(item)
})
poisonList.forEach((item) =>{
    childLikeability(item)
})
// console.log(__dirname)
// console.log(__filename)
// console.log(process)
// console.log(module)