export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    
    //tira o pradaro de redirecionamentoi do clik
    event.preventDefault()
  
  
    window.history.pushState({}, "", event.target.href)
  
  
    this.handle()
  }

  handle() {
    const { pathname } = window.location
    console.log(pathname)
  
    const route = this.routes[pathname] || this.routes[404]
    console.log(route)
    
    //tetch vai buscar () tehen -> entao 
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  
  }

}

