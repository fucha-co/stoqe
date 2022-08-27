const now = String(Date.now())
const fg = require("fast-glob");
const htmlmin = require("html-minifier");
const slugify = require("@sindresorhus/slugify");
// const criticalCss = require("eleventy-critical-css")

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("slugify", slugify);

  eleventyConfig.addCollection("sortedPosts", (collection) => {
    return collection.getFilteredByTag("work").sort((a, b) => a.data.sortOrder - b.data.sortOrder);
  });

  eleventyConfig.addCollection("sortedWords", (collection) => {
    return collection.getFilteredByTag("words").sort((a, b) => a.data.sortOrder - b.data.sortOrder);
  });

  eleventyConfig.addCollection("sortedSongs", (collection) => {
    return collection.getFilteredByTag("songs").sort((a, b) => a.data.sortOrder - b.data.sortOrder);
  });

  // in the function (you can change the name `photos` to anything you like and
  // reference it accordingly)
  eleventyConfig.addCollection("faces", () => {
    // the path should be relative to .eleventy.js; for example, if you specify
    // `source/photos`, the filenames it returns will be like
    // `source/photos/photo-1.jpg`
    return [...fg.sync("i/faces/*.jpg")];
  });

  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addWatchTarget('./_tmp/style.css', './_data/site.json')
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
  })

  eleventyConfig.addPassthroughCopy('./i')
  eleventyConfig.addPassthroughCopy('./fonts')
  eleventyConfig.addShortcode('version', function () {
    return now
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
      return minified
    }

    return content
  })
}