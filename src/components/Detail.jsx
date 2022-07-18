import React, { useState } from "react";

// import components
import Transcations from "./Transcations";
import Orders from "./Orders";

const Detail = () => {
  const [show, setShow] = useState({
    showMe: "",
  });

  const [orders, setOrders] = useState([
    { orderName: "دوره جاوااسکریپت", orderTime: "42 ساعت پیش", hostSite: "webdevs.com", orderStatus: "good" },
    { orderName: "دوره تیلویند", orderTime: "12 ساعت پیش", hostSite: "webdevs.com", orderStatus: "bad" },
    { orderName: "دوره ریکت نیتیو", orderTime: "2 ساعت پیش", hostSite: "webdevs.com", orderStatus: "good" },
    { orderName: "دوره سی اس اس", orderTime: "24 ساعت پیش", hostSite: "webdevs.com", orderStatus: "bad" },
  ]);

  const [transcation, setTranscation] = useState([
    { transcationName: "دوره جاوااسکریپت", transcationTime: "42 ساعت پیش", hostSite: "webdevs.com", transcationStatus: "good" },
    { transcationName: "دوره ریکت نیتیو", transcationTime: "2 ساعت پیش", hostSite: "webdevs.com", transcationStatus: "good" },
  ]);

  const showorders = () => {
    setShow({
      showMe: "orders",
    });
    console.log(show.showMe);
  };

  const showTranscations = () => {
    setShow({
      showMe: "transcations",
    });
  };

  return (
    <div className="detail-part">
      <div className="detail-head">
        <h1 className="head">داشبورد کاربری</h1>
      </div>
      <div className="tabs">
        <div onClick={showorders} className="orders">
          <h3 className="title">سفارشات من</h3>
          <p className="tabs-icon green">
            <svg fill="#fff" id="Layer_1" height="23" viewBox="0 0 24 24" width="23" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
              <path d="m4 22a2.982 2.982 0 0 1 -2.122-.879l-1.544-1.374a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.6-3.431a1 1 0 1 1 1.378 1.448l-3.585 3.414a2.964 2.964 0 0 1 -2.1.862zm19-1h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm-19-7a2.982 2.982 0 0 1 -2.122-.879l-1.585-1.585a1 1 0 0 1 1.414-1.414l1.586 1.585a1.023 1.023 0 0 0 1.414 0l3.6-3.431a1 1 0 1 1 1.382 1.448l-3.589 3.414a2.964 2.964 0 0 1 -2.1.862zm19-1h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm-19-7a2.982 2.982 0 0 1 -2.122-.879l-1.544-1.374a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.604-3.431a1 1 0 0 1 1.378 1.448l-3.589 3.414a2.964 2.964 0 0 1 -2.1.862zm19-1h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z" />
            </svg>
          </p>
        </div>
        <div onClick={showTranscations} className="transactions">
          <h3 className="title">تراکنش های من</h3>
          <p className="tabs-icon">
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="23" height="23">
              <path d="M16,0H8A5.006,5.006,0,0,0,3,5V23a1,1,0,0,0,1.564.825L6.67,22.386l2.106,1.439a1,1,0,0,0,1.13,0l2.1-1.439,2.1,1.439a1,1,0,0,0,1.131,0l2.1-1.438,2.1,1.437A1,1,0,0,0,21,23V5A5.006,5.006,0,0,0,16,0Zm3,21.1-1.1-.752a1,1,0,0,0-1.132,0l-2.1,1.439-2.1-1.439a1,1,0,0,0-1.131,0l-2.1,1.439-2.1-1.439a1,1,0,0,0-1.129,0L5,21.1V5A3,3,0,0,1,8,2h8a3,3,0,0,1,3,3Z" />
              <rect x="7" y="8" width="10" height="2" rx="1" />
              <rect x="7" y="12" width="8" height="2" rx="1" />
            </svg>
          </p>
        </div>
      </div>
      {show.showMe === "" ? (
        <div className="empty-container">
          <h1 className="empty-el-text">
            برای مشاهده جزئیات بر روی <br /> باکس های بالا کلیک کنید
          </h1>
        </div>
      ) : (
        ""
      )}
      {show.showMe === "orders" ? (
        <div className="orders-part">
          <div className="orders-title">
            <h1 className="o-title">سفارشات من</h1>
          </div>
          <div className="orders-detail">
            {orders.map((item) => {
              return <Orders oName={item.orderName} oTime={item.orderTime} hostSite={item.hostSite} oStatus={item.orderStatus} />;
            })}
          </div>
        </div>
      ) : show.showMe === "transcations" ? (
        <div className="transactions-part">
          <div className="transactions-title">
            <h1 className="t-title">تراکنش های من</h1>
          </div>
          <div className="transactions-detail">
            {transcation.map((item) => {
              return <Transcations transcationName={item.transcationName} transcationTime={item.transcationTime} hostSite={item.hostSite} transcationStatus={item.transcationStatus} />;
            })}
          </div>
        </div>
      ) : (
        show.showMe === ""
      )}
    </div>
  );
};

export default Detail;
