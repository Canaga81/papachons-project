const Header = ({data, setFilteredData}) => {

  const filterByCategory = (category) => {
    const filteredData = data.filter(item => item.cath && item.cath.includes(category));
    setFilteredData(filteredData);
  };

  const filterByAll = () => {
    setFilteredData(data);
  };

  return (

    <div className="header">
      <ul className="menu">
        <li onClick={filterByAll}>Hamisi</li>
        <li onClick={() => filterByCategory('chick')}>Toyuqlu</li>
        <li onClick={() => filterByCategory('vegan')}>Vegeterian</li>
        <li onClick={() => filterByCategory('spicy')}>Acili</li>
        <li onClick={() => filterByCategory('meat')}>Etli</li>
      </ul>
    </div>
  );

};

export default Header;