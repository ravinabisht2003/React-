import React, { useState } from "react";

export default function About() {
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, changeBtnTxt] = useState("Enable Dark Mode");
  const [IsItVisible, VisibleorNot] = useState(true);

  const toggleStyle = () => {
    if (mystyle.color == "black") {
      setmystyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });

      changeBtnTxt("Enable Light Mode");
    } else {
      setmystyle({ color: "black", backgroundColor: "white" });

      changeBtnTxt("Enable Dark Mode");
    }
  };

  const [btnText2, ChnageBtnTxt2] = useState("Hide The Text");

  const toggleVisible = () => {
    if (IsItVisible === true) {
      VisibleorNot(false);
      ChnageBtnTxt2("show The Text");
    } else {
      VisibleorNot(true);
      ChnageBtnTxt2("Hide The Text");
    }
  };

  const [btnText3, ChnageBtnTxt3] = useState("Like This");
  const [LikeTxt, LikeText] = useState("0");
  // ChnageBtnTxt3("Dislike This");


  const [LikeThis, Isitlike] = useState({
    backgroundColor: "White",
  });

  const toggleLike = () => {
    if (LikeThis.backgroundColor == "White") {
      Isitlike({ backgroundColor: "Red" });
      ChnageBtnTxt3("Dislike This");
      LikeText('1');
    } else {
      Isitlike({ backgroundColor: "White" });
      ChnageBtnTxt3("Like This");
      LikeText('0')
    }
  };

  return (
    <>
      <div className="container" style={mystyle}>
        <h1>AboutUs</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyle}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              style={mystyle}
            >
              <div className="accordion-body" style={mystyle}>
                <strong>This is the first item’s accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It’s also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mystyle}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={mystyle}
            >
              <div className="accordion-body">
                <strong>This is the second item’s accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It’s
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyle}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={mystyle}
            >
              <div className="accordion-body">
                <strong>This is the third item’s accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It’s
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        {/* <button class="text-bg-primary p-3" onClick={toggleStyle}>{btnText}</button> */}

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onClick={toggleStyle}
          />
          <label className="form-check-label" for="switchCheckDefault">
            {btnText}
          </label>
        </div>
        {IsItVisible && <div>This Is div</div>}

        <button onClick={toggleVisible}>{btnText2}</button>
      </div>

      <div>
        <button className="LikeBtn" onClick={toggleLike} style={LikeThis}>{btnText3}</button>
        <div>Like Counter - {LikeTxt}</div>
      </div>
    </>
  );
}
