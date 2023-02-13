import Cart from './Cart';
import today from './utils';

const User = {
  name: '',
  login() {
    console.log(`logged in ${today()}`);
  },
  logout() {},
}