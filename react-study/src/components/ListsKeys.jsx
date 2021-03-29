const customer = [
  {
    id: 1,
    name: "Arthur",
  },
  {
    id: 2,
    name: "Ivar",
  },
  {
    id: 3,
    name: "Tesla",
  },
  {
    id: 4,
    name: "Michael",
  },
  {
    id: 5,
    name: "Darwin",
  },
];

const ListKeys = () => {
  const renderCustomers = (customer) => {
      return (
          <li>{customer.name}</li>
      )
  };

  return <div>
      {customer.map(renderCustomers)}
  </div>;
};

export default ListKeys;
