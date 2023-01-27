import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import { ContentWrapper as SourceContentWrapper } from "SourceComponent/ContentWrapper/ContentWrapper.component";
import "./Checkout.override.style.scss";

class Checkout extends SourceCheckout {
  render() {
    const { checkoutStep } = this.props;
    return (
      <main block="Checkout">
        <div block="Checkout_Progress">
          {Object.keys(this.stepMap).map((step, index) => (
            <div block="Checkout_Progress_step">
              <div
                block={step === checkoutStep ? "step_bar active" : "step_bar"}
                data-passed={
                  index < Object.keys(this.stepMap).indexOf(checkoutStep)
                    ? "passed"
                    : ""
                }
              ></div>
              <div
                key={this.stepMap[step]}
                title={this.stepMap[step].title}
                block={
                  step === checkoutStep ? "step_number active" : "step_number"
                }
                data-passed={
                  index < Object.keys(this.stepMap).indexOf(checkoutStep)
                    ? "passed"
                    : ""
                }
              >
                {index > Object.keys(this.stepMap).indexOf(checkoutStep)
                  ? index + 1
                  : "✓"}
              </div>
            </div>
          ))}
        </div>
        <SourceContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </SourceContentWrapper>
      </main>
    );
  }
}

export default Checkout;
