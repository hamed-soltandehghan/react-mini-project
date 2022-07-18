import React from "react";

const Orders = ({ oName, oTime, hostSite, oStatus }) => {
  return (
    <div className="order-detail">
      <div className="order-info">
        <h3 className="order-name">{oName}</h3>
        <div className="order-date">
          <p className="order-icon">
            <svg id="Layer_1" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
              <path d="m23 11a1 1 0 0 0 -1 1 10.034 10.034 0 1 1 -2.9-7.021.862.862 0 0 1 -.1.021h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3v-3a1 1 0 0 0 -2 0v2.065a11.994 11.994 0 1 0 4 8.935 1 1 0 0 0 -1-1z" />
              <path d="m12 6a1 1 0 0 0 -1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414l-2.707-2.707v-4.586a1 1 0 0 0 -1-1z" />
            </svg>
          </p>
          <p className="order-time">{oTime}</p>
        </div>
        <p className="hostWebsite"><span className="showHost">سایت میزبان :</span> {hostSite} </p>
      </div>
      <div className="order-status">
        <p className={oStatus === "good" ? "o-status-good" : "o-status-bad"}>{(oStatus === 'good') ? 'پرداخت شده' : 'پرداخت نشده'}</p>
      </div>
    </div>
  );
};

export default Orders;
