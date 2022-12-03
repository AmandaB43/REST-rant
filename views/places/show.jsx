const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
          <body>
          <h2>Rating</h2>
            <p>Currently unrated</p>
            <h3>Comments</h3>
            <p>Comments Offline</p>
<a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     
<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
     

          </body>
        </Def>
    )
}

module.exports = show
