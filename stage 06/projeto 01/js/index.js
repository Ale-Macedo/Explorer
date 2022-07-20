import  {Router}  from '/Explorer/stage 06/projeto 01/js/router.js'

const router = new Router()
router.add("/Explorer/stage%2006/projeto%2001/" , "/Explorer/stage 06/projeto 01/pages/home.html")
router.add("/" , "/Explorer/stage 06/projeto 01/pages/home.html")
router.add("/about", "./Explorer/stage 06/projeto 01/pages/about.html")
router.add("/Contact", "/Explorer/stage 06/projeto 01/pages/contact.html",)
router.add(404, "/Explorer/stage 06/projeto 01/pages/404.html")







router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()