import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import ExerciseCateg from "./pages/ExerciseCateg";
import ExerciseDesc from "./pages/ExerciseDesc";
import Food from "./pages/Food";
import FoodDesc from "./pages/FoodDesc";
import Review from "./pages/Review";
import SubmitReview from "./pages/SubmitReview";
import FoodSearch from './pages/FoodSearch';


import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/exercise" exact>
          <Exercise />
        </Route>
        <Route path="/exercise/:muscle" exact>
          <ExerciseCateg />
        </Route>
        <Route path="/exercise/:muscle/:id" exact>
          <ExerciseDesc />
        </Route>
        <Route path="/food" exact>
          <Food />
        </Route>
        <Route path="/food/:search">
          <FoodSearch />
        </Route>
        <Route path="/fooddesc/:desc">
          <FoodDesc />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/submitreview" exact>
          <SubmitReview />
        </Route>
      </Switch>
      <Footer/>

    </>
  );
}

export default App;
