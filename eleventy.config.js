import CleanCSS from "clean-css";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("**/*.svg", {
    mode: "html-relative",
  });
  
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  })

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    }
  }
}