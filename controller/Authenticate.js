const connection = require('../Database')

const Authenticate = (req, res) => {
  const { Username, Password } = req.body

  // Check if Username and Password are provided
  if (!Username || !Password) {
    return res
      .status(400)
      .render('Login', { status: 'Please enter both Username and Password' })
  }

  const params = [Username, Password]
  const query = 'SELECT * FROM admin WHERE Username = ? AND Password = ?'

  connection.query(query, params, (err, result) => {
    if (err) {
      console.error('Database query error:', err)
      return res
        .status(500)
        .render('Login', { status: 'Server error. Please try again later.' })
    }

    if (result.length > 0) {
      // Successful login
      res.redirect('/')
    } else {
      // Failed login
      res
        .status(401)
        .render('Login', { status: 'Incorrect Username or Password' })
    }
  })
}

module.exports = Authenticate
