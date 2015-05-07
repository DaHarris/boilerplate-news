$(document).ready(function() {
    $.ajax({
      url: "http://api.npr.org/query?id=1004&apiKey=MDE5MDgxMzU1MDE0MzEwMTc5MzQ0OThkMQ001&output=json",
      dataType: 'json'
    }).success(function(data) {
      var posts = data["list"]["story"];
      for (var i=0;i<posts.length;i++) {
        console.log(posts[i])
        $('#npr').append("<ul><h3>" + posts[i]["title"].$text + "</h3>");
        $('#npr').append("<li><a href='" + posts[i]["link"][0].$text + "'>Original Story</a></li></ul>");
      }
    });
});
