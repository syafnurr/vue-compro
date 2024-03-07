// !!!IMPORTANT MESSAGE!!! DON'T CHANGE THE CODE (CAN BREAKE THE APP) !!!!IMPORTANT MESSAGE!!!!
import { createRouter, createWebHistory } from 'vue-router';

// Fungsi untuk mengumpulkan semua rute dari folder modules
function loadModuleRoutes() {
  const context = require.context('../modules', true, /router\/index\.js$/);
  return context.keys().reduce((routes, key) => {
    return routes.concat(context(key).default);
  }, []);
}

const routes = loadModuleRoutes();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Pengaturan judul dokumen
  document.title = to.meta.title + ' | ' + 'Divistant - More Than Innovation' || '';

  const authToken = localStorage.getItem('token');
  const isUserLoggedIn = authToken != null;

  // Cek apakah pengguna mencoba mengakses halaman awal (/) sebagai tamu
  const isAccessingBaseURLAsGuest = to.path === '/' && to.meta.guestOnly;

  // Jika pengguna mencoba mengakses Login sementara sudah login, redirect ke Dashboard
  if (to.name === 'Login' && isUserLoggedIn) {
    next({ name: 'Dashboard' });
    return;
  }

  // Cek apakah rute memerlukan autentikasi
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Redirect ke Login jika rute memerlukan autentikasi dan pengguna belum login
  // kecuali jika mengakses halaman awal sebagai tamu
  if (requiresAuth && !isUserLoggedIn && !isAccessingBaseURLAsGuest) {
    next({ name: 'Login' });
  } else {
    // Lanjutkan seperti biasa untuk rute lain
    next();
  }
});

export default router;
// THIS CODE FOR DEFINED THE ROUTER FROM EACH MODULES (IF NEED A CHANGES, PLEASE BE CAREFULLY)