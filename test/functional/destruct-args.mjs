; mjs: es5Destructuring
'''
1: Massimilliano - massi
2: Rodrigo - bamboo
3: Iván - drslump
'''

var fn = (id, {name: name, nickname: nick}) ->
  console.log(id + ': ' + name + ' - ' + nick)

fn(1, {name: 'Massimilliano', nickname: 'massi'})
fn(2, {name: 'Rodrigo', nickname: 'bamboo'})
fn(3, {name: 'Iván', nickname: 'drslump'})