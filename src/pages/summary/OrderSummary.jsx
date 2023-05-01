import React from 'react';
import SummaryForm from './SummaryForm';

function OrderSummary() {
  return (
		<div className='mb-4'>
			<h1 className='text-3xl font-bold text-orange-400'>Order Summary</h1>
			<div className='my-4'>
				<h2 className='font-bold text-xl'>Scoops: $</h2>
			</div>
			<div className='my-4'>
				<h3 className='font-bold text-xl'>Toppings: $</h3>
			</div>
			<div className='font-bold text-2xl mb-4'>
				<h4>Total: $</h4>
			</div>
			<SummaryForm />
		</div>
	);
}

export default OrderSummary