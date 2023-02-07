const edibles = [
    { name: 'Guava', type: 'fruit', taste: 'pleasant sweet'},
    {name: 'chilli', type: 'veggy', taste: 'spicy'},
    
]
console.log(__dirname)
console.log(module)
let childLikeability = function (food) {
    let points = food.type == 'fruit' ? 10 : food.type ==='veggy'? 5: 2
    points+= food.taste.match('sweet') ? 10 : food.taste.match('spicy') ? 5 : 2
    console.log("child most likely to eat "+food.name+" in the scale of 1-20 is "+points)
}
module.exports = { edibles, childLikeability }