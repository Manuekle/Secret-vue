import Index from './pages/Index.vue'
import About from './pages/About.vue'
import Products from './pages/Products.vue'
import Store from './pages/Store.vue'
import Test from './pages/Test.vue'

export const routes = [
    {path:'/', component:Index},
    {path:'/about', component:About},
    {path:'/products', component:Products},
    {path:'/store', component:Store},
    {path:'/test', component:Test}
]