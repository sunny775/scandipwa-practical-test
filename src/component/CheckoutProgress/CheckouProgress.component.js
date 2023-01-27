import React from "react";
import "./CheckoutProgress.style.scss";

class CheckoutProgress extends React.PureComponent {
  render() {
    const { stepMap, checkoutStep } = this.props;

    const steps = Object.keys(stepMap);
    return (
      <div block="Checkout_Progress">
        {steps.map((step, index) => (
          <div block="Checkout_Progress_step">
            <div
              block={step === checkoutStep ? "step_bar active" : "step_bar"}
              data-passed={index < steps.indexOf(checkoutStep) ? "passed" : ""}
            ></div>
            <div
              key={stepMap[step]}
              title={stepMap[step].title}
              block={step === checkoutStep ? "checkpoint active" : "checkpoint"}
              data-passed={index < steps.indexOf(checkoutStep) ? "passed" : ""}
            >
              <div block="marker">
                {index >= steps.indexOf(checkoutStep) ? (
                  index + 1
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
              <p block="title">{stepMap[step].title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CheckoutProgress;
