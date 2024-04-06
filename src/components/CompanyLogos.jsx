import React from 'react';
import { companyLogos } from '../constants';

export const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className='tagline mb-6 text-center text-n-1/50'>HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT THESE COMPANIES</h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li key={index} className='flex items-center justify-center flex-1 h-[8.5rem]'>
            <img src={logo} width={138} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
