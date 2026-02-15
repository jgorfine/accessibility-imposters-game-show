import CleanCSS from "clean-css";

export default function (eleventyConfig) {
  eleventyConfig.addPairedNunjucksShortcode("sample", function(content, count, type) { /* … */ });

  eleventyConfig.addPairedShortcode("sample", function(content, count, type) {
    return `<section id="sample-${count}" aria-labelledby="sample-${count}__heading" role="region"><figure>
<figcaption><h2 id="sample-${count}__heading">${type} #${count}</h2></figcaption>
<div class="figtray">${content}</figtray>
</figure></section>`;
  });

  eleventyConfig.addPairedNunjucksShortcode("textblock", function() { /* … */ });

  eleventyConfig.addPairedShortcode("textblock", function() {
    return `<div class="game-text-block">
<p class="game-text-block__title">What does the Axe-con name mean?</p>
<p class="game-text-block__blurb">The name Axe comes from a well-known Deque open-source project called Axe-core. It’s been downloaded hundreds of millions of times, making it the de facto standard in automated accessibility testing rules. It’s baked into every instance of the Chrome browser extension around the world and used widely by top businesses and organizations to help determine if web apps are accessible. The community response and support behind the project are the inspiration for all Deque efforts, including this conference.</p>
<p class="game-text-block__blurb">We also like to think that Axe is synonymous with accessible experiences.</p>
</div>`;
  });

  eleventyConfig.addPassthroughCopy("**/*.svg", {
    mode: "html-relative"
  });

  eleventyConfig.addPassthroughCopy("src/*.js", {
    mode: "html-relative"
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