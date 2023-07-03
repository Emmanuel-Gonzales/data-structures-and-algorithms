# Sorting: Comparisons

When sorting an array, a key step in the algorithm is determining what their order should be. In the insertion sort algorithm, the insertion phase has a while loop that checks for whether the number to insert is less than the number at the iteration index. The first time the number to insert is greater, the algorithm inserts at the previous index. Merge Sort applies the same logic when recombining sub-arrays, as it needs to choose whether to pull from the left or the right array.

## Whiteboard Process

- not required

## Approach & Efficiency

Reasearched and used chat gpt unitl I found a soulution.

## Solution
`
  let movie1 = a.title.split(' ');
  let movie2 = b.title.split(' ');

  const articles = ["A ", "An ", "The "];

  if (articles.includes(movie1[0])) {
    movie1 = movie1.slice(1).join(' ');
  }

  if (articles.includes(movie1[0])) {
    movie2 = movie2.slice(1).join(' ');
  }

  return movie1.localeCompare(movie2);
}
`
