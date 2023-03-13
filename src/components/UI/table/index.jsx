import Table from "react-bootstrap/Table";

function TableUI({ dataHead, dataBody }) {
  const { name, username, email } = dataBody || {};
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Nomor</th>
          {dataHead &&
            dataHead.map((data, index) => <th key={index}>{data}</th>)}
        </tr>
      </thead>
      <tbody>
        {dataBody.map((data, index) => (
          <>
            <tr>
              <td>{data.id}</td>
              <td key={index}>{data.name}</td>
            </tr>
          </>
        ))}
      </tbody>
    </Table>
  );
}

export default TableUI;
