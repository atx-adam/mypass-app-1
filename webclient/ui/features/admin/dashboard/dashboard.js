(function (mypass) {
  'use strict';

  mypass.registerFeature({
    name: 'admindashboard',
    url: '/ui/features/admin/dashboard/index.html',
    load: dashboardLoad,
    methods: {
      showInfo: showInfo,
      showServiceProviders: showServiceProviders,
      showAgents: showAgents,
      showMain:showMain
    }
  });

  function init() {
    $('.admin-dashboard .nav a').on('click', function (e) {
      e.preventDefault();
      $('.admin-dashboard .nav a').removeClass('active');
      $(this).addClass('active');
    });
  }

  function dashboardLoad() {
    $('.btn-logout').removeClass('hidden');
    mypass.admindashboard.main.load('.admin-dashboard .main');
  }

  function showServiceProviders() {
    mypass.admindashboard.serviceproviders.load('.admin-dashboard .main');
  }

  function showAgents() {
    mypass.admindashboard.agents.load('.admin-dashboard .main');
  }

  function showInfo() {
    mypass.admindashboard.edit.load('.admin-dashboard .main');
  }

  function showMain() {
    $('.admin-dashboard .nav a').removeClass('active');
    mypass.admindashboard.main.load('.admin-dashboard .main');
  }

  setTimeout(init,1200);

})(mypass);