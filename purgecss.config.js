// purgecss.config.js
module.exports = {
  content: ['src/server/views/*.ejs'],
  css: ['./public/main.css'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  output: 'public/main.css',
};