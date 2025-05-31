import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DecisionTree from './pages/DecisionTree';
import Resources from './pages/Resources';
import Templates from './pages/Templates';
import FAQ from './pages/FAQ';
import News from './pages/News';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="decision-tree" element={<DecisionTree />} />
        <Route path="resources" element={<Resources />} />
        <Route path="templates" element={<Templates />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
