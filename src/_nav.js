export default [
  {
    component: 'div',
    name: 'Theme',
  },
  {
    component: 'ElMenuItem',
    name: 'Dashboard',
    to: '/',
    className: 'dashboard',
    icon: 'IconDashboard',
    badge: {
      color: 'warning',
      text: 'NEW',
    },
  },
  {
    component: 'div',
    name: 'Extras',
  },
  {
    component: 'ElSubMenu',
    name: 'Pages',
    to: '/pages',
    icon: 'IconPages',
    items: [
      {
        component: 'ElMenuItem',
        name: 'Login',
        to: '/pages/login',
      },
      {
        component: 'ElMenuItem',
        name: 'Register',
        to: '/pages/register',
      },
      {
        component: 'ElMenuItem',
        name: 'Error 404',
        to: '/pages/404',
      },
      {
        component: 'ElMenuItem',
        name: 'Error 500',
        to: '/pages/500',
      },
    ],
  },
]
