import React from 'react'


function App() {
  return (
    <div className='Parent'>
      <div className="card">
        <div className="upper">
          <img src="" alt="" />
          <button>Save <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-icon lucide-bookmark"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg></button>
        </div>
        <div className="middle">
          <h3>Amazons <span>5 days to go</span></h3>
          <h2>UI/UX designer</h2>
        </div>
        <div>
        <h4>Part</h4>
        <h4>
          senior level
        </h4>
        </div>
        <div className="lower">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
            </div>
          <button>Apply now </button>
        </div>
      </div>
    </div>
  )
}

export default App
