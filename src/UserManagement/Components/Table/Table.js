import TableItem from "./TableItem";

const Table = ({ list }) => {
  return (
    <>
      {list.map((user) => (
        <TableItem {...user} key={user.id} />
      ))}
    </>
  );
};

export default Table;
