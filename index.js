
hexo.extend.tag.register('tag_url', function(args, content){
  return `/tags/${args[0]}`;
});

hexo.extend.tag.register('tag_link', function (args, content) {
  var tag = args[0] || '';
  var label = args[1] || tag;
  var url = `/tags/${tag.toLowerCase().replace(' ', '-')}/`;

  return `<a href='${url}'>${label}</a>`;
});
