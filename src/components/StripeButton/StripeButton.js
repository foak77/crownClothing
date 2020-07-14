import React from 'react'
import StripeCheckout from "react-stripe-checkout"


    
    

const StripeButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51H4oG5IgeGNtI76FKhx9V3yJJS6R13v5Qb9Hvx2HgkNhpw5ykJQtF4VAmltcj46DQy8Y5Ay4J6DutW7ua5LkKQZS007ujvJP1o"

const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }
    
    return (
        <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your Price is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeButton
