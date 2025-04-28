import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './App.css';

const Home = ({ data }) => {
  if (!data?.length) {
    return <p className="no-data">No hay datos disponibles.</p>;
  }

  return (
    <section className="home">
      <h2 className="home-title">Lista de datos</h2>
      <ul className="home-list">
        {data.map(item => (
          <li key={item._id} className="home-item">
            <Link to={`/${item._id}`} className="home-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

Home.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Home;