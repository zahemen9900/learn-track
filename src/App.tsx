import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import { store } from '@store/index';
import LoadingSpinner from '@components/common/LoadingSpinner';
import ErrorFallback from '@components/common/ErrorFallback';
import Layout from '@components/layout/Layout';

// Lazy-loaded components for code splitting
const Dashboard = React.lazy(() => import('@components/dashboard/Dashboard'));
const Assignments = React.lazy(() => import('@components/assignments/Assignments'));
const Profile = React.lazy(() => import('@components/profile/Profile'));
const Login = React.lazy(() => import('@components/auth/Login'));
const Register = React.lazy(() => import('@components/auth/Register'));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/assignments" element={<Assignments />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;