import React from "react";

import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoInformationCircleOutline } from "react-icons/io5";

const App = () => {
  return (
    <div className="container">
      <div className="cards">
        <div className="card1">
          <h1 className="free-title">Free</h1>
          <p>Card 1 content</p>
          <ul>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <RxCross2 />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <RxCross2 />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <RxCross2 />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <RxCross2 />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <RxCross2 />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <RxCross2 />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
          </ul>
        </div>
        <div className="card2">
          <div className="title-holder">
            <h1 className="card-title">Premium</h1>
          </div>

          <p>Card 2 content</p>
          <ul>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
            <li>
              <span>
                <IoMdCheckmark />
                Item 1
              </span>
              <IoInformationCircleOutline />
            </li>
          </ul>
        </div>
      </div>
      <div className="right-card">
        <h1 className="plan-title">Select Your Plan</h1>
        <div className="plans">
          <div className="plan">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
              quis.
            </p>
          </div>
          <div className="plan">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
              quis.
            </p>
          </div>
          <div className="plan">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
              quis.
            </p>
          </div>
          <hr />
          <div className="text-plan">
            <h3>Money Back Guaranty</h3>
            <p>100% money back guarenty</p>
          </div>
          <div className="text-plan">
            <h3>Money Back Guaranty</h3>
            <p>100% money back guarenty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
