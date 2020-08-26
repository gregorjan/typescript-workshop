export interface CatFact {
  text: string
  source: string
}

export interface CatFacts {
  all: CatFact[]
}

export const getCatFacts = async () => {
  const data: CatFacts = await fetch('https://cat-fact.herokuapp.com/facts').then(response =>
    response.json(),
  )
  return data
}
