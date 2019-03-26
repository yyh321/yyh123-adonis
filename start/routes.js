'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.resource('posts', 'PostController')
// .except(['index'])
// .only(['index','show'])
// .apiOnly()

/**
 * 命名路由,
 */
Route.get('/list-of-users', () => 'List of users.')
  .as('users.index')

/**
 * formats,第二个参数为true表示请求格式只能是json或者html
 */
Route.get('/users', ({
    request
  }) => {
    switch (request.format()) {
      case 'json':
        return [{
            name: 'yuyunhao'
          },
          {
            name: 'yyh123'
          }
        ]
      default:
        return `
        - hello
        - world
      `
    }
  })
  .formats(['json', 'html'], true)

/**
 * 为users和posts统一加上前缀admin
 */
Route.group(() => {
    Route.get('users', () => 'Manage users')
    Route.get('posts', () => 'Manage posts')
  })
  .prefix('admin')
