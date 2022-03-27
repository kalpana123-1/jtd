import { Switch, Route } from "react-router";
import HOW from "./how";
import LANDING from "./landing";
import WHAT from "./what";
import WHEN from "./when";
import WHERE from "./where";
import WHO from "./who";
import WHY from "./why";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LANDING} />
      <Route path="/who" component={WHO} />
      <Route path="/what" component={WHAT} />
      <Route path="/where" component={WHERE} />
      <Route path="/when" component={WHEN} />
      <Route path="/why" component={WHY} />
      <Route path="/how" component={HOW} />
    </Switch>
  );
};
