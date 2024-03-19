import React from 'react';
import './styles/DataTable.css'; 

const DataTable = ({ data }) => {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            {/* more column headers if needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              {/* more cells for additional data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
