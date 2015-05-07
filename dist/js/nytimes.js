$(document).ready(function() {
    $.ajax({
      url: "http://api.nytimes.com/svc/topstories/v1/home.json?api-key=c9bf432a955e75e5a817e49380e58b75:6:72024379"
    }).success(function(data) {
      var posts = data["results"];
      for (var i=0;i<posts.length;i++) {
        $('#nytimes').append("<ul><h3>" + posts[i].title + "</h3>");
        $('#nytimes').append("<li><a href='" + posts[i].url + "'>Original Story</a></li></ul>");
      }
    });
});
