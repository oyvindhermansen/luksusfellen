'use strict';

export default function(app) {
  app.get('/', (req, res) => {
    res.render('index');
  });
}
