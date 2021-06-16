import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CourseDetails from '../views/CourseDetails';
import FavoriteCourses from '../views/FavoriteCourses';
import FindCourses from '../views/FindCourses';
import GamesPlayed from '../views/GamesPlayed';
import Home from '../views/Home';
import NewGame from '../views/NewGame';
import NotFound from '../views/NotFound';
import Review from '../views/Review';
import ViewReviews from '../views/ViewReviews';
import ScoresSingleCourse from '../views/ScoresSingleCourse';
import SearchResults from '../views/SearchResults';
import SuccessAlert from '../components/SuccessAlert';

export default function Routes({ dbUser, user }) {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route
        exact
        path='/course-details/:id'
        component={(props) => <CourseDetails user={user} dbUser={dbUser} {...props} />}
      />
      <Route
        exact
        path='/favorite-courses'
        component={(props) => <FavoriteCourses dbUser={dbUser} user={user} {...props} />}
      />
      <Route exact path='/find-courses' component={FindCourses} />
      <Route
        exact
        path='/games-played'
        component={(props) => <GamesPlayed dbUser={dbUser} user={user} {...props} />}
      />
      <Route
        exact
        path='/new-game/:id'
        component={(props) => <NewGame dbUser={dbUser} user={user} {...props} />}
      />
      <Route exact path='/not-found' component={NotFound} />
      <Route exact path='/review/:id' component={(props) => <Review dbUser={dbUser} {...props} />}/>
      <Route exact path='/view-reviews/:id' component={ViewReviews} />
      <Route
        exact
        path='/scores/:id'
        component={(props) => <ScoresSingleCourse dbUser={dbUser} user={user} {...props} />}
      />
      <Route exact path='/search/:term' component={(props) => <SearchResults {...props} />} />
      <Route exact path='/success' component={SuccessAlert} />
    </Switch>
  );
}

// const PrivateRoute = ({ component: Component, user, ...rest }) => {
//   const routeChecker = (taco) => (user
//     ? (<Component {...taco} user={user} />)
//     : (<Redirect to={ { pathname: '/no-user', state: { from: taco.location } }} />));

//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };
