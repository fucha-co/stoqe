module.exports = {
  orderedSubset: (currentWord, sortedWords) => {
    // find the position of `currentPost` in the list, matching based on URL
    const pos = sortedWords.map((p) => p.url).indexOf(currentWord.url);

    const list = [
      // get up to x posts that come after it
      // (`slice` excludes the last index, so the list will never include the
      // current post)
      ...sortedWords.slice(pos + 1, pos + 1 + 50),

      // get up to five posts that come before it, avoiding negative indices
      ...sortedWords.slice(Math.max(0, pos - 50), pos),
    ];

    // return up to five posts
    return list.slice(0, 50);
  },
};