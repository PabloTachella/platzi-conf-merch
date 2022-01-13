import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import { handleSumTotal } from '../utils';
import '../styles/components/Payment.css';

const Payment = ({ history }) => {

    const { state, addNewOrder } = useContext(AppContext)
    const { cart, buyer } = state

    const paypalOptions = {
        clientId: 'clientID',
        intent: 'capture',
        currency: 'USD',
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    }

    const handlePaymentSuccess = (data) => {
        console.log(data)
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer: buyer,
                product: cart,
                payment: data,
            }
            addNewOrder(newOrder);
            history.push('/checkout/success')
        }
    }

    return (
        <div className='Payment'>
            <div className='Payment-content'>
                <h3>Resument del pedido:</h3>
                {cart.map((item) => (
                    <div className='Payment-item' key={item.title}>
                        <div className='Payment-element'>
                            <h4>{item.title}</h4>
                            <span>
                                $
                                {' '}
                                {item.price}
                            </span>
                        </div>
                    </div>
                ))}
                <div className='Payment-button'>
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onPaymentStart={() => console.log('Start Payment')}
                        onPaymentSuccess={(data) => handlePaymentSuccess(data)}
                        onPaymentError={(error) => console.log(error)}
                        onPaymentCancel={(data) => console.log(data)}
                    />
                </div>
            </div>
            <div />
        </div>
    )
}

export default Payment