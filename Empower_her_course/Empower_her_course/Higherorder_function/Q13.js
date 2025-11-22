function countCategories(categories) {
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return categoryCounts;
}

function sortCategoriesByCount(categories) {
  const counts = countCategories(categories);

  const sortedCategories = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  return sortedCategories;
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log("Category Counts:", countCategories(input));

console.log("Sorted Categories:", sortCategoriesByCount(input));