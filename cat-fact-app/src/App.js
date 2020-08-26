import React, { useState, useEffect } from 'react'
import { Button } from './components/Button'
import { useCatFacts } from './hooks/useCatFacts'

export const App = () => {
  const { loading, error, ready, changeCatFact, catFact } = useCatFacts()

  const [displayedCatFact, setDisplayedCatFact] = useState(null)

  useEffect(() => {
    ready && changeCatFact()
  }, [ready])

  useEffect(() => {
    setDisplayedCatFact(catFact)
  }, [catFact])

  return (
    <div>
      {loading && <div>Loading...</div>}

      {displayedCatFact && <div>{displayedCatFact}</div>}
      <Button disabled={loading || error} onClick={changeCatFact} size={'smol'}>
        Anoter Cat Fact!
      </Button>

      <Button
        disabled={loading || error}
        onClick={() => setDisplayedCatFact(window.windowCatFact)}
        size={'smol'}
      >
        Window Cat Fact!
      </Button>
    </div>
  )
}
