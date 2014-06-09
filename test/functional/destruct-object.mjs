; mjs: es5Destructuring
'''
foo
bar
'''

var {x: x, 'y': y} = {x: 'foo', y: 'bar'}

console.log x
console.log y
