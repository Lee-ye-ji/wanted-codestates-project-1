import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import StoredPage from './pages/StoredPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/store" element={<StoredPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
