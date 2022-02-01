import React, { useRef, useEffect, useState } from 'react';
import { FormControlProps } from 'react-bootstrap/FormControl';
import { StyledFormControl, StyledInputGroup } from './styled';

export interface IInputBlockProps extends FormControlProps {
  gradient?: boolean;
  badge?: string;
}

export default function InputBlock({
  badge,
  gradient,
  ...props
}: IInputBlockProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setEditing] = useState(false);
  const toggleEditing = () => {
    setEditing(!isEditing);
  };
  const data = badge && badge?.constructor === String && badge?.length > 0;
  useEffect(() => {
    if (isEditing) {
      inputRef?.current?.focus();
    }
  }, [isEditing]);
  return (
    <StyledInputGroup
      onClick={toggleEditing}
      onBlur={() => {
        setEditing(false);
      }}
      data-gradient={gradient ?? false}
      data-badge={data ?? false}
      className="mb-0 mb-md-3"
      {...props}
    >
      <StyledFormControl
        ref={inputRef}
        aria-describedby="basic-addon1"
        {...props}
      />
    </StyledInputGroup>
  );
}
