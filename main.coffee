Person = require './modules/Person'
{render} = require './modules/dom/Utils'

model =
  date: new Date
  person: new Person 'CoffeScript'

# html template will interpolate immediately, so make sure that you are using existing 'model' object
render """
<div class="container">
  <h3 class="panel panel-heading">Hello, #{model.person.name}!</h1>
  <p>today is #{model.date.toLocaleDateString()}</p>
  <p>- qué?</p>
  <p>- #{model.person.sayHi()}</p>
</div>
"""