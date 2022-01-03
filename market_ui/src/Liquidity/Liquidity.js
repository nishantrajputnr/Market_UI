import React from "react";
import * as A from "react-bootstrap";
import '../Liquidity.css';

function Liquidity() {
  return (
    <>
      <A.Container fluid>
        <div className="liquidity pb-4 pt-4">
          <b className="big">ADD LIQUIDITY</b><br>
          </br><br />
          <div className="para">
          <p><b>Tip:</b> When you add liquidity, you will receive pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.</p>
          </div>
          <form className="margina">
            <div className = "mt-4 mb-4 bor">
              <input className="inp" type="text" name="name1" id="datahere" placeholder="0.0" />
              <select id="selectoption">
                <option value="A">ETH</option>
                <option value="B">DCX</option>
                <option value="C">DCXa</option>
              </select>
              <div className="right"><p>Balance:0</p></div>

            </div>
            <div className = "bor">
              <input className="inp" type="text" name="name1" id="datahere" placeholder="0.0" />
              <select id="selectoption">
                <option value="A">ETH</option>
                <option value="B">DCX</option>
                <option value="C">DCXa</option>
              </select>
              <div className="right"><p>Balance:0</p></div>

            </div>
            <button type="btn" className="btn">ADD LIQUIDITY POOL</button>
          </form>

        </div>
      </A.Container>
    </>
  );
}

export default Liquidity;
