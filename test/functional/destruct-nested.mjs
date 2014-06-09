; mjs: es5Destructuring
'''
+
30
'''
; Hack to access #quote result at runtime
var ast = { fromJsonString: #-> JSON.parse(#it) }

var {id: op, args: [ {val: lhs}, {val: rhs} ]} = #quote 10 + 20
 
console.log op
console.log(lhs + rhs)
