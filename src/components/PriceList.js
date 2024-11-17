import React from 'react';
import '../styles/PriceList.css';

const PriceList = () => {
  return (
    <div className="price-list-page">
      <h1 className="page-title">Our Price List</h1>
      <table className="price-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consultation</td>
            <td>$50</td>
          </tr>
          <tr>
            <td>Teeth Whitening</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>Braces Installation</td>
            <td>$1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
