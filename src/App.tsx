import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';
import { CareerDetailPage } from './components/pages/CareerDetailPage';
import { ToastProvider } from './hooks/useToast';
import { Toaster } from './components/atoms';
import './App.css';

function App() {
  return (
    <ToastProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works/:projectId" element={<ProjectDetailPage />} />
          <Route path="/careers/:careerId" element={<CareerDetailPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
