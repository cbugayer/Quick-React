import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppData from './UserLoader';

const Main = () => {
  return (
    <div className="container">
      <AppData />
    </div>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container" >
      <Main />
    </div>
  </QueryClientProvider>
);

export default App;
