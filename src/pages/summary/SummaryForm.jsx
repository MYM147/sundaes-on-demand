import React, { useState } from 'react';

export default function SummaryForm() {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxLabel = (
    <span>I agree to the <span style={{ color: 'blue' }}>Terms and Conditions</span></span>
  );

  return (
		<div>
			<div className='my-2'>
				<input
					type='checkbox'
          className='mr-3'
					aria-label='checkbox'
					id='checkbox'
					check={isChecked}
          onChange={(e)=> setIsChecked(e.target.checked)}
          label={checkboxLabel}
				/>
				<label htmlFor='checkbox'>
					{checkboxLabel}
				</label>
			</div>
			<br />
			<button disabled={!isChecked} className='rounded-md bg-gray-200 py-2 px-4 font-bold shadow-md mb-4 border-solid border border-gray-900' type='button'>
				Confirm Order
			</button>
		</div>
	);
}