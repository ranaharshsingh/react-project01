import React from 'react'
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <header>
        <nav>
           <div className='navRight'>
              <h5>horizon courts</h5>
           </div>
           <div className='about'>
            <p>About us</p>
            <p>Server</p>
            <p>Coaches</p>
            <p>Events</p>
            <p>Contacts</p>
           </div>
           <div>
            <button>book now</button>
           </div>
        </nav>
      </header>
      <main>
        <section className='hero'>
            <img src="https://images.unsplash.com/photo-1714802064562-c3fef56822b6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
            <h4>Unleash Your Inner Champion Today. <br />All In One Place</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit <br /> sequi tempore, dolores incidunt aut assumenda, </p>
            <button>Start Your Own Journey</button>
        </section>

        <section>
            <div>

            </div>
        </section>
      </main>
           
    </div>
  
  )
}

export default App
