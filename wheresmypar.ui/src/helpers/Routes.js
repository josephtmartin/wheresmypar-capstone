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
import ScoresSingleCourse from '../views/ScoresSingleCourse';

export default function Routes() {
  return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/course-details/:id" component={CourseDetails} />
            <Route exact path="/favorite-courses" component={FavoriteCourses} />
            <Route exact path="/find-courses" component={FindCourses} />
            <Route exact path="/games-played" component={GamesPlayed} />
            <Route exact path="/new-game" component={NewGame} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/scores/:id" component={ScoresSingleCourse} />
        </Switch>
  );
}

// const PrivateRoute = ({ component: Component, user, ...rest }) => {
//   const routeChecker = (taco) => (user
//     ? (<Component {...taco} user={user} />)
//     : (<Redirect to={ { pathname: '/no-user', state: { from: taco.location } }} />));

//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };
