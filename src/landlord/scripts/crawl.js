// load('landlord/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("landlord/landlord.html","landlord/out")
});
