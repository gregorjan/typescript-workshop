export const getCatFacts = async () => {
  const data = await fetch('https://cat-fact.herokuapp.com/facts').then(response => response.json())
  return data
}
