import { Route, Routes } from 'react-router-dom';
import classes from './index.module.scss'
import Layout from './hoc/Layout/Layout';
import Main from './containers/Main/Main';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/about_me" element={<AboutPage />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;