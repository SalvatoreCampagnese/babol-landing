import React, { useRef, useState } from "react";
import PinInput from 'react-pin-input';

const Pin = ({
  value,
  setValue,
}: {
  value: string;
  setValue: any;
}) => {
  return (
    <div className="text-center flex flex-col justify-center items-center w-full">
        <div className="flex space-x-1 sm:space-x-4 w-full">
          <PinInput
            length={6} 
            initialValue={value}
            onChange={(value, index) => {{
              console.log('val', value);
              setValue(value)}}} 
            type="numeric" 
            inputMode="number"
            style={{padding: '10px', display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%'}}  
            inputStyle={{borderColor: '1px solid black', color:'black', borderRadius:10, height:56, width:56}}
            inputFocusStyle={{borderColor: 'black'}}
            onComplete={(value, index) => {
              console.log('complete')
              setValue(value)
            }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </div>
    </div>
  );
};

export default Pin;
