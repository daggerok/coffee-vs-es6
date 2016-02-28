import Person from './modules/Person'
import {render} from './modules/Person/View'

let
date = new Date,
person = new Person('Max'),
model = {
  date,
  person
}, 
// html template will interpolate immediately, so make sure that you are using existing 'model' object
html = `
<div class="container">
  <h3 class="panel panel-heading">Hello, ${model.person.name}!</h1>
  <p>today is ${model.date.toLocaleDateString()}</p>
  <p>- qué?</p>
  <p>- ${model.person.sayHi()}</p>
</div>
`

render(html)