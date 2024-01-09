import React from "react";
import { downArrowIcon, downIcon } from "../icon-imports";

const Table = () => {
  return (
    <div>
      <table>
      <thead>
      <tr>
        <th>Order ID</th>
        <th>Order Date <img src={downArrowIcon} alt="" /></th>
        <th>Order Amount</th>
        <th>Transaction Fees</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#281209</td>
        <td>7 July, 2023</td>
        <td>₹1,278.23</td>
        <td>₹22</td>
      </tr>
      <tr>
        <td>#281209</td>
        <td>7 July, 2023</td>
        <td>₹1,278.23</td>
        <td>₹22</td>
      </tr>
      <tr>
        <td>#281209</td>
        <td>7 July, 2023</td>
        <td>₹1,278.23</td>
        <td>₹22</td>
      </tr>
      <tr>
        <td>#281209</td>
        <td>7 July, 2023</td>
        <td>₹1,278.23</td>
        <td>₹22</td>
      </tr>
      <tr>
        <td>#281209</td>
        <td>7 July, 2023</td>
        <td>₹1,278.23</td>
        <td>₹22</td>
      </tr>
      <tr>
        <td>#281209</td>
        <td>7 July, 2023</td>
        <td>₹1,278.23</td>
        <td>₹22</td>
      </tr>
      <tr>
        <td>#281209</td>
        <td>7 July, 2023</td>
        <td>₹1,278.23</td>
        <td>₹22</td>
      </tr>

    </tbody>
      </table>
      <div className="table-pagination">
          <button className="prev-btn">Previous</button>
          <ul class="pagination">
              <li><a href="#">1</a></li>
              <li><span>...</span></li>
              <li><a href="#" className="active">10</a></li>
              <li><a href="#">11</a></li>
              <li><a href="#">12</a></li>
              <li><a href="#">13</a></li>
              <li><a href="#">14</a></li>
              <li><a href="#">15</a></li>
            </ul>
            <button className="next-btn">Next</button>
      </div>
    </div>
  );
};

export default Table;
