import React from 'react' ;
import { Button, Label, Select, TextInput } from 'flowbite-react';

const Order = () => {
    // handle order submission
    const handleOrderSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const customerName = form.customerName.value;
        const phone_no = form.phone_no.value;
        const email = form.email.value;
        const payment = form.payment.value;
        const flat_no = form.flat_no.value;
        const street_name = form.street_name.value;
        const city = form.city.value;
        const state = form.state.value;
        const country = form.country.value;
        const pin_code = form.pin_code.value;
    
        const orderObj = {
            customerName, phone_no, email, payment, flat_no, 
            street_name, city, state, country, pin_code }
            console.log(orderObj);
        // send data to database

    fetch(`http://localhost:5000/order-books`,{
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(orderObj)
      }).then(res => res.json()).then(data => {
        //console.log(data)
        alert("Book ordered successfully!!!")
        form.reset();
      })
    }
  return (
    <div className='px-4 my-12 mt-30 ml-20'>
      <h2 className=' text-4xl font-bold ml-20'>Order a book</h2>

      <form onSubmit={handleOrderSubmit} className="flex lg:w-[1080px] flex-col flex-wrap gap-4">
      {/* First row */}
        <div className='flex gap-8'>
          
          {/* Number */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="customerName" value="Your Name" />
            </div>
            <TextInput id="customerName" name="customerName" type="text" placeholder="enter your name" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="phone_no" value="Phone number" />
            </div>
            <TextInput id="phone_no" name="phone_no" type="number" placeholder="enter your number" required />
          </div>
        </div>

        {/* Second row */}
        <div className='flex gap-8'>

            {/* Email URL */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your Email_id" />
            </div>
            <TextInput id="email" name="email" type="email" placeholder="enter your email" required />
          </div>

          {/* Payment */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="payment" value="Payment" />
            </div>
            <TextInput id="payment" type="text" required defaultValue="cash on delivery"/>
          </div>
        </div>

        {/* Third row */}
        {/* Address */}
        <div className='flex gap-8'>

            {/* Flat */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="flat_no" value="Address Line 1" />
            </div>
            <TextInput id="flat_no" name="flat_no" type="text" placeholder="e.g. flat no." required />
          </div>

          {/* street */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="street_name" value="Address Line 2" />
            </div>
            <TextInput id="street_name" name="street_name" type="text" placeholder="e.g. street name" required />
          </div>
        </div>

         {/* fourth row */}
            {/* Address */}
        <div className='flex gap-8'>

        {/* City */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="city" value="City" />
            </div>
            <TextInput id="city" name="city" type="text" placeholder="e.g. Delhi" required />
          </div>

          {/* State */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="state" value="State" />
            </div>
            <TextInput id="state" name="state" type="text" placeholder="e.g. Jharkhand" required />
          </div>
        </div>

        {/* fifth row */}
            {/* Address */}
        <div className='flex gap-8'>

        {/* Country */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="country" value="Country" />
            </div>
            <TextInput id="country" name="country" type="text" placeholder="e.g. India" required />
          </div>

          {/* Pincode */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="pin_code" value="Pincode" />
            </div>
            <TextInput id="pin_code" name="pin_code" type="number" placeholder="e.g. 832108" required />
          </div>
        </div>
        
        <Button type="submit" className='mt-5'>Order Book</Button>
      </form>
    </div>
  )
}

export default Order