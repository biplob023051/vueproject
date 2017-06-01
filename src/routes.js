import Home from './components/Home.vue';
import Products from './components/products/Products.vue';
import Signup from './components/auth/Signup.vue';
import Signin from './components/auth/Signin.vue';

export const routes = [
	{path: '', component: Home},
	{path: '/products', component: Products},
	{path: '/signup', component: Signup},
	{path: '/signin', component: Signin}
];