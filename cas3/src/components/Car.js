import PropTypes from "prop-types";

export const Car = ({ vozila }) => {
  return (
    <div>
      <table>
        <thead>
          <th>Brand</th>
          <th>Model</th>
          <th>Godina</th>
        </thead>
        <tbody>
          {vozila.map((vozilo, i) => {
            return (
              <tr key={i}>
                <td>{vozilo.brand}</td>
                <td>{vozilo.model}</td>
                <td>{vozilo.godina}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Car.propTypes = {
  vozila: PropTypes.arrayOf(PropTypes.object).isRequired,
};
