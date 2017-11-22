var siteConfig = {
  site: {
    title:"Tumble Network",
    footer: "This is a text. 2017",
    oauthServices: [
      {
        name: "google",
        scope: ['profile'],
        color: {
          background:"#4885ed",
          text:"white"
        }
      }
    ]
  }
};

for (var i = 0; i < siteConfig.site.oauthServices.length; i++) {
  var service = siteConfig.site.oauthServices[i];
  service.url = "/login/" + service.name;
  service.scope = service.scope || [];
  service.color = service.color || {background:"#f44336",text:"white" };
  service.title = service.name.charAt(0).toUpperCase() + service.name.substr(1);
  siteConfig.site.oauthServices[i] = service;
}



console.log(siteConfig.site.oauthServices);

module.exports = siteConfig;
