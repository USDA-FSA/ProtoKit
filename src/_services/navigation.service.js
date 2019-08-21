/////// FAKE API ///////

const apiData = [
  {
    uid: "UNIQUE-ID-1122334455",
    label: "Home",
    path: "/",
    hasChild: "false",
    children: []
  },
  {
    uid: "UNIQUE-ID-2233445566",
    label: "Boilerplate",
    path: "/boilerplate",
    hasChild: "false",
    children: []
  },
  {
    uid: "UNIQUE-ID-3344556677",
    label: "Reports",
    path: "/reports",
    hasChild: "true",
    children: [
      {
        uid: "UNIQUE-ID-4455667788",
        label: "Crop Report",
        path: "/reports/crop-report",
        hasChild: "false",
        children: [],
      },
      {
        uid: "UNIQUE-ID-5566778899",
        label: "Financial Report",
        path: "/reports/financial-report",
        hasChild: "false",
        children: [],
      },
      {
        uid: "UNIQUE-ID-6677889911",
        label: "Producer Report",
        path: "/reports/producer-report",
        hasChild: "false",
        children: [],
      },
      {
        uid: "UNIQUE-ID-7788991122",
        label: "Weather Report",
        path: "/reports/weather-report",
        hasChild: "false",
        children: [],
      }
    ],
  },


];

export const navigationService = {

  getNavigation( callback ){
    setTimeout( () => callback( apiData ) ,50);
  }
  
};