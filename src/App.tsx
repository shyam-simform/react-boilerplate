import { BrowserRouter as Router, useRoutes, Navigate, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigation from './components/common/navigation';

import './App.css';
import NestedRouter from './routes/NestedRouter';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <NestedRouter />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
