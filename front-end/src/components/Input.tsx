import React from 'react';
import styled from "styled-components";

interface Props extends React.ComponentPropsWithRef<"input"> {
  onClear?: React.MouseEventHandler<HTMLButtonElement>;
}

const InnerInput = styled.input`
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 5px;
  line-height: 2rem;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  background-color: transparent;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  border: none;
  color: #41534a9c;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.5s;
  background-color: #ddd;
  :hover, :focus {
    background-color: #00FA15;
  }
`;

const Input: React.ForwardRefExoticComponent<Props> = React.forwardRef<HTMLInputElement, Props>(
  ({ onClear = () => undefined, ...inputProps }, ref) => (
    <Wrapper>
      <InnerInput {...inputProps} ref={ref} />
      <Button onClick={onClear}>x</Button>
    </Wrapper>
  )
);

export default Input;