import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import IssuePage from './pages/IssuePage';
import SideBar from './components/organisms/SideBar';
import NotFoundPage from './pages/NotFoundPage';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/issue/:owner/:repo" element={<IssuePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
