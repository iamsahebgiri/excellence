const express = require('express');
const authRoute = require('./auth.route');
const classRoute = require('./class.route');
const courseRoute = require('./course.route');
const subjectRoute = require('./subject.route');
const questionRoute = require('./question.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/classes',
    route: classRoute,
  },
  {
    path: '/courses',
    route: courseRoute,
  },
  {
    path: '/subjects',
    route: subjectRoute,
  },
  {
    path: '/questions',
    route: questionRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
