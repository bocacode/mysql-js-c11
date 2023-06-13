// import the mysql2 library
import mysql from 'mysql2'
import connectionInfo from './secretStuff.js'

// connect to OUR mysql database (give it OUR credentials)
const connection = mysql.createConnection(connectionInfo)


// ------------ ONE WAY ------------

// run a simple query to get 2 movies
// const myQuery = 'SELECT * FROM movies'

// function handleResults(error, results) {
//   console.log(error)
//   console.table(results)
// }

// connection.query(myQuery, handleResults)


// ---------- ANOTHER WAY ----------

// run a simple query to get 2 movies
connection.query(
  'SELECT * FROM movies',
  function (error, results) {
    console.log(error)
    console.table(results)
    connection.destroy()
  }
)

console.log('LAST LINE OF FILE')
