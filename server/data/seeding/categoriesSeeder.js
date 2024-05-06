const Category = require('../models/Category')
const categoryService = require('../../services/categoriesService')

const categories = [
    {
        name: 'Sport',
        pictureUrl: 'https://mongooseagency.com/files/3415/9620/1413/Return_of_Sports.jpg'
    },
    {
        name: 'Gaming',
        pictureUrl: 'https://ychef.files.bbci.co.uk/976x549/p091j3dx.jpg'
    },
    {
        name: 'Music',
        pictureUrl: 'https://www.thedj.co.uk/wp-content/uploads/2014/07/music-colour-splash.jpg'
    },
    {
        name: 'News',
        pictureUrl: 'https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1280/p:16x9/news_1920x1080.png'
    }

]

Category.find({}, (err, data) => {
    if (err) {
        console.log(err);
    }
    if (data.length === 0) {
        categories.forEach(categoryData => {
            let name = categoryData.name;
            let pictureUrl = categoryData.pictureUrl
            let category = new Category({ name, pictureUrl })
            category.save()
        })
    }
});
