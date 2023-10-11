import { useDbData } from "./utilities/firebase";
import Banner from './components/Banner';
import SelectedPage from './components/SelectedPage';

const AppData = () => {
  const [data, error] = useDbData('/');

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;

  return (
    <>
      < Banner title={data.title} />
      < SelectedPage courses={Object.entries(data.courses)} />
    </>
    );
};

export default AppData;