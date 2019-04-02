'use strict'

class PostController {
  index({ view }) {
    return view.render('post.index')
  }


}

module.exports = PostController
