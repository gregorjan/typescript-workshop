import React, { useState, useEffect } from 'react'
import { Button, ButtonSize } from './components/Button'
import { Input } from './components/Input'
import { useCatFacts } from './hooks/useCatFacts'

declare global {
  interface Window {
    windowCatFact: string
  }
}

export const App = () => {
  const { loading, error, ready, changeCatFact, catFact } = useCatFacts()
  const [searchValue, setSearchValue] = useState('')
  const [displayedCatFact, setDisplayedCatFact] = useState<string | null>(null)

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

      <Button disabled={loading || error} onClick={changeCatFact} size={ButtonSize.smol}>
        Anoter Cat Fact!
      </Button>
      <Button
        disabled={loading || error}
        onClick={() => setDisplayedCatFact(window.windowCatFact)}
        size={ButtonSize.smol}
      >
        Window Cat Fact!
      </Button>
      <Input value={searchValue} onChange={e => setSearchValue(e.target.value)} />
    </div>
  )
}
