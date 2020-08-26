import { useState, useEffect, useRef } from 'react'
import { getCatFacts, CatFacts, CatFact } from '../utils/getCatFacts'

enum LoadStateEnum {
  loading = 'loading',
  ready = 'ready',
  error = 'error',
}

export const useCatFacts = () => {
  const catFacts = useRef<CatFact[] | null>(null)
  const [catFact, setCatFact] = useState<CatFact['text'] | null>(null)
  const [loadState, setLoadState] = useState<LoadStateEnum>(LoadStateEnum.loading)

  useEffect(() => {
    getCatFacts()
      .then((fetchedData: CatFacts) => {
        catFacts.current = fetchedData.all
        setLoadState(LoadStateEnum.ready)
      })
      .catch(() => setLoadState(LoadStateEnum.error))
    return () => {}
  }, [getCatFacts])

  const changeCatFact = (): void => {
    if (catFacts.current?.length) {
      const randomIndex = Math.floor(Math.random() * catFacts.current.length - 1)
      setCatFact(catFacts.current[randomIndex].text)
    }
  }

  return {
    loading: loadState === LoadStateEnum.loading,
    error: loadState === LoadStateEnum.error,
    ready: loadState === LoadStateEnum.ready,
    changeCatFact,
    catFact,
  }
}
