import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const CheckoutForm = () => {
  const { biodataId, name, number } = useParams(); 
  console.log(biodataId, name, number);// Use biodataId from params
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret , setClientSecret] = useState('');
  const [transactionId , setTransactionId] = useState('');
    const axiosPublic = useAxiosPublic();
const price = 5;


// Update handleSubmit function in CheckoutForm.js




  useEffect( () =>{
    axiosPublic.post('/request-contact',{price:price})
    .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
    })
  },[axiosPublic,price ])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);


    // mme
    if(card === null ){
        return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.error(error);
    } else {
      // Send paymentMethod.id to your server for processing
    //   const response = await axios.post('https://matrimony-server-sable.vercel.app/request-contact', {
    //     biodataId, // Pass biodataId to backend
    //     userEmail: user.email,
    //     paymentMethodId: paymentMethod.id,
    //   });

    //   if (response.data.success) {
    //     console.log('Payment successful, request processed!');
    //   } else {
    //     console.error('Payment failed, request not processed');
    //   }
    console.log('Payment method!', paymentMethod);

    }

    //confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous',
            }
        }
    })
    if(confirmError){
        console.log('confirm error' )
    }
    else{
        console.log(' payment-Intent', paymentIntent);
        if(paymentIntent.status === 'succeeded'){
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id)

            const info = await axios.get(`https://matrimony-server-sable.vercel.app/info/${biodataId}`);
            console.log(info.data.name);
            const name= info.data.name;
            const email= info.data.email;
            const number= info.data.number;
       console.log(name, email);



        

            const response = await axios.post('https://matrimony-server-sable.vercel.app/request-contact-info', {
                          biodataId, 
                          name,
                          email,
                          number,
                          // Assuming you have biodataId available
                          userEmail: user.email,
                          price: 5, // Assuming price is fixed for each request
                        });
                     Swal.fire("payment SuccessFull")
                        navigate('/dashboard/my_contact_request')
                   
                        console.log(response);


        }
    }

  };


// Update handleSubmit function in CheckoutForm.js
// const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }
//     const card = elements.getElement(CardElement);
//     if (card === null) {
//       return;
//     }
//     try {
//       // Create payment method
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card,
//       });
//       if (error) {
//         console.error(error);
//       } else {
//         // Payment successful, send request to backend to save biodata info
//         const response = await axios.post('https://matrimony-server-sable.vercel.app/request-contact', {
//           biodataId, // Assuming you have biodataId available
//           userEmail: user.email,
//           price: 5, // Assuming price is fixed for each request
//         });
//         if (response.data.success) {
//           // Redirect to My Contact Requests page upon successful payment
//           navigate('/my-contact-requests');
//         } else {
//           console.error('Failed to process payment');
//         }
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error);
//     }
//   };
  

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-4 text-center font-serif text-red-600">Request Contact Information</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Biodata ID</label>
          <input type="text" value={biodataId} readOnly className="w-full p-2 border border-gray-300 rounded mt-2" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Self Email</label>
          <input type="email" value={user.email} readOnly className="w-full p-2 border border-gray-300 rounded mt-2" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Card Details</label>
          <CardElement className="p-2 border border-gray-300 rounded mt-2" />
        </div>
        <button
          type="submit"
          disabled={!stripe || !clientSecret }
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;
