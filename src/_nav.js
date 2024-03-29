export default [
  {
    component: 'div',
    name: 'Main',
    className: 'sidebar-title',
  },
  {
    component: 'ElMenuItem',
    name: 'Dashboard',
    to: '/dashboard',
    className: 'dashboard',
    icon: 'IconDashboard',
    badge: {
      color: 'warning',
      text: 'NEW',
    },
  },
  {
    component: 'ElMenuItem',
    name: 'About',
    to: '/About',
    className: 'About',
    icon: 'IconInfo',
    badge: {
      color: 'warning',
      text: 'NEW',
    },
  },
  {
    component: 'div',
    name: 'Extras',
    className: 'sidebar-title',
  },
  {
    component: 'ElSubMenu',
    name: 'Pages',
    to: '/pages',
    icon: 'IconPages',
    items: [
      // {
      //   component: 'ElMenuItem',
      //   name: 'Login',
      //   to: '/pages/login',
      // },
      // {
      //   component: 'ElMenuItem',
      //   name: 'Register',
      //   to: '/pages/register',
      // },
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
