import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState('')
  const [disabledBack, setDisabledBack] = useState(true)
  const [disabledNext, setDisabledNext] = useState(false)

  const getIndex = () => {
    setData(slides[index])
  }

  useEffect(() => {
    if (index === 0) {
      setDisabledBack(true)
      setDisabledNext(false)
    } else if (index == slides.length - 1) {
      setDisabledNext(true)
    } else {
      setDisabledNext(false)
      setDisabledBack(false)
    }
    getIndex()
  }, [index])

  return (
    <>
      <div className="section-center">
        <article>
          <h1 data-testid="title" className="title">{data.title}</h1>
          <p data-testid="text" className="text">{data.text}</p>
        </article>

        <button disabled={disabledBack} data-testid="button-prev" className="prev" onClick={() => setIndex(index - 1)}>Prev</button>
        <button disabled={disabledNext} data-testid="button-next" className="next" onClick={() => setIndex(index + 1)}>Next</button>
        <button disabled={disabledBack} data-testid="button-restart" className="next" onClick={() => setIndex(0)}>Restart</button>
      </div>
    </>
  )
}


export default App;
