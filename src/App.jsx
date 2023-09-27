import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import logo from './logo.svg';
import Banner from './components/Banner';
import CourseCards from './components/CourseCards';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';

const Main = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading class data...</h1>;
  if (!data) return <h1>No class data found</h1>;

  return (
  <>
    <Banner title={data.title} />
    < CourseCards courses={Object.values(data.courses)} />
  </>
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
