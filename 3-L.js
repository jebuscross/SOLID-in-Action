// Liskov substitution principle

// OLD
// Create a class with method access
class Person {
  access() {
    console.log('U have an access');
  }
}

// NEW
class Member extends Person {
  access() {
    console.log('U have an access');
  }
}

// NEW
class Guest extends Person {
  isGuest = true
}

// OLD
class Frontend extends Member {//extends Person {
  canCreateGUI() {

  }
}

// OLD
class Backend extends Member {//extends Person {
  canCreateServer() {

  }
}

// OLD
class PersonFromDifferentCompany extends Guest {//extends Person {
  access() {
    throw new Error('U have not an access')
  }
}

// this func has a problem with access error
// this problem solve with classes behavior changing
function openSecretDoor(member) {//person) {
  member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// There should be member not guest
// openSecretDoor(new PersonFromDifferentCompany())

// Нужно правильно выбирать слои между абстракциями

class Component {
  // render() {
  //   return `<div>Component</div>`
  // }
  isComponent = true
}

// NEW
class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`
  }
}

// NEW
class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate/*Component*/ {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate/*Component*/ {
  afterInit() {}
}

// NEW
class HOC extends HigherOrderComponent/*Component*/ {
  // render should not be hier
  render() {
    throw new Error('Render is impossible')
  }

  wrapComponent(component) {
    component.wrapped = true
    return component
  }
}

function renderComponent(component) {
  console.log(component.render());
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
// renderComponent(new HOC())
