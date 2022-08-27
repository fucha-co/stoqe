module.exports = {
  orderedSubset: (currentPost, sortedPosts) => {
    // find the position of `currentPost` in the list, matching based on URL
    const pos = sortedPosts.map((p) => p.url).indexOf(currentPost.url);

    const list = [
      // get up to x posts that come after it
      // (`slice` excludes the last index, so the list will never include the
      // current post)
      ...sortedPosts.slice(pos + 1, pos + 1 + 15),

      // get up to five posts that come before it, avoiding negative indices
      ...sortedPosts.slice(Math.max(0, pos - 15), pos),
    ];

    // return up to five posts
    return list.slice(0, 15);
  },
};