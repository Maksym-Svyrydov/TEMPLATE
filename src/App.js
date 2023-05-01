import { SharedLayout } from './components/SharedLayuot';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Tweets = lazy(() => import('./pages/Tweets'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="*" />
        <Route path="tweet" element={<Tweets />} />
        <Route path="*" />
      </Route>
    </Routes>
  );
};
export default App;
