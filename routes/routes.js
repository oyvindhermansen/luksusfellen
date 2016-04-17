'use strict'

export default function(app) {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/board', (req, res) => {
    const income = req.body.income
    if (!income) {
      res.redirect('/')
    }
    res.render('board')
  })

  app.post('/board', (req, res) => {
    const income = req.body.income
    res.render('board', {income: income})
    console.log(income)
  })
}
