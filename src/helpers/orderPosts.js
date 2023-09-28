export default function sortPostsByDate(posts, order) {
  const sortedPosts = [...posts];

  const compareDates = (a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    if (order === "recent") {
      return dateB - dateA;
    } else if (order === "old") {
      return dateA - dateB;
    }

    return 0; // Do not change the order if 'order' value is invalid
  };

  sortedPosts.sort(compareDates);
  return sortedPosts;
}
