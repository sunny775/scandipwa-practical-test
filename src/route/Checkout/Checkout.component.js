import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import { ContentWrapper as SourceContentWrapper } from "SourceComponent/ContentWrapper/ContentWrapper.component";
import CheckoutProgress from "../../component/CheckoutProgress/CheckouProgress.component";
import "./Checkout.override.style.scss";

class Checkout extends SourceCheckout {
  render() {
    const { checkoutStep } = this.props;
    return (
      <main block="Checkout">
        <CheckoutProgress stepMap={this.stepMap} checkoutStep={checkoutStep} />
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
