import "./App.css";

import PropTypes from "prop-types";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
};

const App = () => {
  return (
    <div className="App">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
