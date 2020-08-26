import { useState, useEffect, useRef } from 'react'
import { getCatFacts } from '../utils/getCatFacts'

const LoadState = {
  loading: 'loading',
  ready: 'ready',
  error: 'error',
}

export const useCatFacts = () => {
  const catFacts = useRef(null)
  const [catFact, setCatFact] = useState(null)
  const [loadState, setLoadState] = useState(LoadState.loading)

  useEffect(() => {
    getCatFacts()
      .then(fetchedData => {
        catFacts.current = fetchedData.all
        setLoadState(LoadState.ready)
      })
      .catch(() => setLoadState(LoadState.error))
    return () => {}
  }, [getCatFacts])

  const changeCatFact = () => {
    if (catFacts.current?.length) {
      const randomIndex = Math.floor(Math.random() * catFacts.current.length - 1)
      setCatFact(catFacts.current[randomIndex].text)
    }
  }

  return {
    loading: loadState === LoadState.loading,
    error: loadState === LoadState.error,
    ready: loadState === LoadState.ready,
    changeCatFact,
    catFact,
  }
}
