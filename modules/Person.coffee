module.exports = 
  class Person
    constructor: (@name) ->
    name: -> @name
    sayHi: -> "holla, #{@name}"
