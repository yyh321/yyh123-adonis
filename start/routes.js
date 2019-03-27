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
Route.get('/posts0', ({
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
Route.post('/posts5', ({
  request
}) => request.input('status', 'defaultValue'))

/**
 * 获取请求中的集合数据
 * title[0] = 'apple'
 * content[0] = '🍎'
 * title[1] = 'banana'
 * content[1] = '🍌'
 */
Route.post('/posts', ({
  request
}) => request.collect(['title', 'content']))

/**
 * 获取请求头部信息
 */
Route.get('/posts6', ({
  request
}) => request.headers())

/**
 * 获取指定的头部信息
 */
// Route.get('/posts', ({
//   request
// }) => request.header('user-agent'))

/**
 * 设置响应头信息
 */
Route.get('/posts7', ({
  request,
  response
}) => {
  // response.header('Content-Type', 'text/plain')
  response.type('text/plain')
  return '<h1> List of posts </h1>'
})

/**
 * 设置cookie
 */
Route.get('/posts8', ({
  request,
  response
}) => {
  response.cookie('theme', 'dark')
  // return request.cookies()
  response.clearCookie('theme') // 清除cookie
  return request.cookie('theme', 'light') // 如果没有theme，则用light作为默认值
})

const delay = (data, time) => {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole(data)
    }, time)
  })
}

/**
 * 获取异步数据
 */
Route.get('/posts', async ({
  request,
  response
}) => {
  const data = await delay(
    'List of posts',
    3000
  )

  return data
})
