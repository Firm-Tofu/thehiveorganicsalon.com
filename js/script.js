var name = "thehiveorganicsalon",
  items;
$.getJSON("https://query.yahooapis.com/v1/public/yql", {
  q: "select * from json where url='https://www.instagram.com/" + name + "/media?__a=1'",
  format: "json"
}, function(data) {
	console.log(data);
  if (data.query.results) {
    items = data.query.results.json.items;
    $.each(items, function(n, item) {
      $('#instagram_container').append(
        $('<a/>', {
          href: item.link,
          class: 'instagram_item',
          target: '_blank'
        }).css({
          backgroundImage: 'url(' + item.images.standard_resolution.url + ')'
        }));
    });
  }

});

function parse_str(str) {
  return str.split('&').reduce(function(params, param) {
    var paramSplit = param.split('=').map(function(value) {
      return decodeURIComponent(value.replace('+', ' '));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
}