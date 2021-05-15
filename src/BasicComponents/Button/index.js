import React from 'react';

import {
  ButtonStyled,
  ButtonSearchIcon,
} from './styled';

import 'antd/es/button/style/css';

// type is default or another type
function DefaultButton({ children, ...props }) {
  if (props.type) {
    return (
      <ButtonStyled
        {...props}
        className={`${props.className || ''} btn-${props.type ||
          'normal'}-type btn-${props.size || 'medium'}-size ${
          props.disabled ? 'btn-disabled' : ''
        }`}
      >
        {children}
      </ButtonStyled>
    );
  }
  return (
    <ButtonStyled
      className={`${props.className || ''} btn-default-type btn-${props.size ||
        'medium'}-size ${props.disabled ? 'btn-disabled' : ''}`}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

// stardard type is primary
function PrimaryButton({ type, children, ...props }) {
  return (
    <ButtonStyled
      {...props}
      className={`${props.className || ''} btn-primary-type btn-${props.size ||
        'medium'}-size ${props.disabled ? 'btn-disabled' : ''}`}
    >
      {children}
    </ButtonStyled>
  );
}

// stardard type is secondary
function SecondaryButton({ type, children, ...props }) {
  return (
    <ButtonStyled
      {...props}
      className={`${props.className ||
        ''} btn-secondary-type btn-${props.size || 'medium'}-size ${
        props.disabled ? 'btn-disabled' : ''
      }`}
    >
      {children}
    </ButtonStyled>
  );
}

function Button({ children, ...props }) {
  switch (props.type) {
    case 'primary':
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
    case 'secondary':
      return <SecondaryButton {...props}>{children}</SecondaryButton>;
    default:
      return <DefaultButton {...props}>{children}</DefaultButton>;
  }
}

function Search({ size = 'small', icon = <ButtonSearchIcon />, ...props }) {
  return (
    <Button size={size} icon={icon} type="primary" {...props}>Search</Button>
  );
}

Button.Search = Search;

export default Button;
