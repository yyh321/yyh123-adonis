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

/**
 * 获取请求查询参数，用request.get()方法
 */
Route.get('/posts', ({
  request
}) => request.get())

/**
 * 获取body 主体参数
 */
Route.post('/posts1', ({
  request
}) => request.post())

/**
 * 同时获取查询参数和主体参数
 */
Route.post('/posts2', ({
  request
}) => request.all())

/**
 * 获取指定参数请求
 */
Route.post('/posts3', ({
  request
}) => request.only(['title', 'content']))

/**
 * 获取除了指定以外的请求参数
 */
Route.post('/posts4', ({
  request
}) => request.except(['title', 'content']))

/**
 * 获取指定参数的值，如果获取不到，第二个参数为默认值
 */
Route.post('/posts', ({
  request
}) => request.input('status', 'defaultValue'))
