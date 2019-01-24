##This one is inspired by React Redux and React Context Provider
- I wanted to create a component which by wrapping the others can pass all it's state and methods to each
- In the end I created a Proto component (src/prototype/Proto.js)
- Proto can be used by extending it when creating a store:

import Proto from ...

class Store extends Proto {
  state = {
    name: "Aleksandar"
  }
  
  removeName = () => this.setState({ name: "Nobody" });
}

export default Store;

***************************************************************

import Store from ...

...
return (
  <div>
    <p>Heading</p>
    <InformativePanel>
    <Store>
       <Dashboard>
        <History>
          Local History
          <Local local={true} />
         </History>
       <Search>
    </Store>
  </div>
)

IN THE EXAMPLE ABOVE Dashboard, History, Local and Search COMPONENTS SHOULD HAVE ***name*** AS info PROP AND ***removeName*** as action PROP
