import React, { ChangeEvent } from 'react';

interface MyInputProps {
  content: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<MyInputProps> = ({ content, changeHandler }) => {
  return (
    <div>
      <input type="text" onChange={changeHandler} value={content} />
    </div>
  );
};

export default MyInput;
