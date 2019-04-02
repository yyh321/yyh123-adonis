'use strict'

class PostController {
  index({ view }) {
    const pageTitle = 'List of <i>posts</i>'
    const user = {
      name: 'yyh123'
    }
    return view.render('post.index', { pageTitle, user })
  }


}

module.exports = PostController
