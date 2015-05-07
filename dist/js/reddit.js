$(document).ready(function() {
    $.ajax({
      url: "http://www.reddit.com/r/worldnews/.json"
    }).success(function(data) {
      var posts = data["data"]["children"]
      for (var i=0;i<posts.length;i++) {
        $('#reddit').append("<ul><h3>" + posts[i]["data"]["title"] + "</h3>");
        $('#reddit').append("<li><a href='" + posts[i]["data"]["url"] + "'>Original Story</a></li></ul>");
      }
    });
});
