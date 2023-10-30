import React from 'react'

export default function Pagination({goToNextPage, goTePrevPage}) {
  return (
    <div>
        { goTePrevPage && <button onClick={goTePrevPage} >Previous</button>}
        {goToNextPage && <button onClick={goToNextPage} >Next</button>}
    </div>
  )
}
