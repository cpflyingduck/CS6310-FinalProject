angular.module('CS6310').component('main', {
  templateUrl: 'main/main.html',
  $routeConfig: [
    {
      path: '/login',
      name: 'Log In',
      component: 'login',
      useAsDefault: true
    },
    {
      path: '/registration/:id',
      name: 'Student Registration',
      component: 'registration'
    },
    {
      path: '/admincp/:id',
      name: 'Admin Control Panel',
      component: 'admin'
    },
    {
      path: '/aboutUs',
      name: 'About Us',
      component: 'aboutUs'
    }
  ]
});