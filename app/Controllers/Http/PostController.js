'use strict'

class PostController {
  index({ view }) {
    const pageTitle = 'List of posts'
    const user = {
      name: 'yyh123'
    }
    const entities = [
      { id:1,title:'Lemon', content: '🍋'},
      { id:2,title:'Watermelon', content: '🍉'}
    ]
    return view.render('post.index', { pageTitle, user, entities })
  }


}

module.exports = PostController
