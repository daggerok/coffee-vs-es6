class Person
  constructor: (@name) ->

  name: -> @name

  sayHi: -> "holla, #{@name}"

module.exports = Person