import { Route, Switch } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import EventSelection from "@/pages/EventSelection";
import EventConfiguration from "@/pages/EventConfiguration";
import EventSummary from "@/pages/EventSummary";
import BookingConfirmation from "@/pages/BookingConfirmation";
import Profile from "@/pages/Profile";
import PartyPass from "@/pages/PartyPass";
import PartyPassDashboard from "@/pages/PartyPassDashboard";
import CuratedEvents from "@/pages/CuratedEvents";
import CuratedEventDetail from "@/pages/CuratedEventDetail";

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col bg-ivory">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/events/curated/:id" component={CuratedEventDetail} />
          <Route path="/events/curated" component={CuratedEvents} />
          <Route path="/events/:category" component={EventSelection} />
          <Route path="/configure/:category/:eventType" component={EventConfiguration} />
          <Route path="/summary" component={EventSummary} />
          <Route path="/confirmation" component={BookingConfirmation} />
          <Route path="/profile" component={Profile} />
          <Route path="/party-pass" component={PartyPass} />
          <Route path="/party-pass-dashboard" component={PartyPassDashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </TooltipProvider>
  );
}

export default App;
