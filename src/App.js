import React, {Suspense, lazy} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Common/Header";
import DetailSeriesContextProvider from "./context/DetailSeriesContext";
import SeriesContextProvider from "./context/SeriesContext";
import DetailsSeries from "./components/DetailSeries";
import NotFound from "./components/NotFound";
import Footer from "./components/Common/Footer";
import { Loader } from "./components/Common/Loader";
import { ErrorBoundary } from "./ErrorBoundary.js/ErrorBoundary";
const Series = lazy(()=>import("./components/Series"));

const App = () => (
  <ErrorBoundary>
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <SeriesContextProvider>
          <Suspense fallback={<Loader/>}>
          <Series />
          </Suspense>
        </SeriesContextProvider>
      </Route>
      <Route path="/serie/:serie_id">
        <DetailSeriesContextProvider>
          <DetailsSeries />
        </DetailSeriesContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
   <Footer/>
  </BrowserRouter>
  </ErrorBoundary>
)

export default App;
