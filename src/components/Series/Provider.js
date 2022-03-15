import React from 'react'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core';

const ButtonProvider = styled(Button)({
   borderRadius: "20px",
   color: "#ffffff",
   border: "2px solid #ffffff",
   margin: "4px",
   fontSize: "12px",
   "&.active": {
    background:'#f7ca0f',
  }

  });

export const Provider = ({provider, getSeriesNetwork, active}) => {


  return (
    <div className='provider'>
        {
    provider.map((provider) => {
        const {provider_id, provider_name} = provider
        return (
          <ButtonProvider
          onClick={() => getSeriesNetwork(provider_id) }
          key={provider_id}
          id={provider_id}
          className={`${active === provider_id ? "active" : ""}`}
        
          >
{provider_name}
</ButtonProvider>
        );
      })}
    </div>
  )
}
