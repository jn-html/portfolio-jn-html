// NEXT 9
const routes = require('next-routes')

// portfolioDetail page
module.exports = routes()
// .add('blog', '/blog/:slug')
.add('portfolioDetail', '/portfolioDetail/[id]')


// // Test page
// module.exports = routes()
// .add('test', '/test/:id')


// OLD NEXT
// const routes = require('next-routes')
// module.exports = routes()
// // .add('about')
// .add('portfolioDetail', '/portfolioDetail/:id')


// TO ADD LATER
// add('portfolioNew', '/portfolios/new')
// .add('portfolio', '/portfolio/:id')
// .add('portfolioEdit', '/portfolios/:id/edit')
// .add('userBlogs', '/blogs/dashboard')
// .add('blogEditor', '/blogs/new')
// .add('blogDetail', '/blogs/:slug')
// .add('blogEditorUpdate', '/blogs/:id/edit').