const express = require ('express');
const morgan = require ('morgan');

const app = express();

app.use(morgan('common'));
const apps = require('./playstore.js');

app.get('/apps', (req, res)=>{
    const { search = "", sort} = req.query;

    if (search){
        if (!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(search)){
            return res
                .status(400)
                .send('please include a search genre')
        }
    }

    if (sort) {
        if (!['rating', 'app'].includes(sort)) {
          return res
            .status(400)
            .send('Sort must be one of rating or app');
        }
      }

    let results = apps
        .filter(app =>
            app
            .Genres
            .toLowerCase()
            .includes(search.toLowerCase())
            );
            
    if (sort){
        results
            // .sort((rating, app)=>{
            //     return 
            //     rating[sort] > app[sort] ? 1 : rating[sort] < app[sort] ? -1 : 0;

            // })
            .sort((a, b)=>{
                return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
            });
    }
    res.json(results)
});

app.listen(8000, ()=>{
    console.log('Server started on PORT 8000')
})