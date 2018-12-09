function escapeHtml(string) {
  var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
      "'": '&#39;',
      "/": '&#x2F;'
  };
  return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
  });
}

function unescapeHtml(string) {
  var entityMap = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    '&quot;': '"',
    '&#39;': "'",
    '&#x2F;': "/"
};
return String(string).replace(/(&amp;)|(&lt;)|(&gt;)|(&quot;)|(&#39;)|(&#x2F;)/g, function (s) {
    return entityMap[s];
});
}

module.exports = {
  escapeHtml,
  unescapeHtml
}
