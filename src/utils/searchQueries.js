export const searchQueries = (queries) => {
  if (!queries) return null;

  const searchParams = new URLSearchParams("");

  for (let [key, value] of Object.entries(queries)) {
    searchParams.append(key, value);
  }

  return searchParams.toString() || null;
};
