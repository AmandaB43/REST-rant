const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <img src="/images/Asta.jpg" width="300" height= "300" alt="Asta shocked face"/>
              <p>Oops, this was not part of the plan. Sorry!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404
