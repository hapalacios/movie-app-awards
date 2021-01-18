import React from 'react';
import './RemoveNominations.scss'

const RemoveNominations = () => {
	return (
      <>
			<span className='remove-nominations'>Remove from Nominations</span>
			<svg
				width='3.5rem'height='3.5rem'
				viewBox='0 0 16 16'
				class='bi bi-file-x-fill'
				fill='red'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
               d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z"
				/>
			</svg>
		</>
	);
};

export default RemoveNominations;
