import "../css/components/widgetLg.css.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.gr-assets.com/authors/1561336084p8/4123863.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Federico Kereki</span>
          </td>
          <td className="widgetLgDate">14 May 2022</td>
          <td className="widgetLgAmount">$2100.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1489939078242-0a1dc4a08f06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ikechi Fortune</span>
          </td>
          <td className="widgetLgDate">12 May 2022</td>
          <td className="widgetLgAmount">$1202.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}
export default WidgetLg;
