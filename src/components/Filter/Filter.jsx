const { Label, Input } = require('./Filter.styled');

const Filter = ({ filter, onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placegolder="Search"
        value={filter.value}
        onChange={e => onFilter(e.target.value)}
      />
    </Label>
  );
};

export default Filter;
