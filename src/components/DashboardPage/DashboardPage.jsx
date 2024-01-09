import { downArrowIcon, searchIcon } from "../icon-imports";
import Navbar from "../Navbar/Navbar";
import "./DashboardPage.css";
import Table from "./Table";

const DashboardPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="dashboard-page">
        <div className="dashboard-overview">
          <p>Overview</p>
          <select>
            <option value="option1">Last Month</option>
          </select>
        </div>
        <div className="payment-option">
            <p>Razorpay</p>
            <p>Cashfree</p>
        </div>
        <div className="orders-amounts">
          <div className="orders card">
            <p>Online Orders</p>
            <p>231</p>
          </div>
          <div className="amount card">
            <p>Amount</p>
            <p>₹23,92,312.19</p>
          </div>
        </div>

        <div className="dashboard-transactions">
          <p>Transactions | This Month</p>
        </div>

        <div className="table">
          <div className="table-header">
            <div className="table-search search">
              <button>
                <img src={searchIcon} alt="" />
              </button>
              <input type="text" placeholder="Search by order ID..." />
            </div>
            <div className="table-btns">
              <div className="table-sort">
                <p>Sort</p>
                <img src={searchIcon} alt="" />
              </div>
              <div className="table-download">
                <img src={downArrowIcon} alt="" />
              </div>
            </div>
          </div>
          <div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
