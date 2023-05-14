import React from 'react'
import { Container, EmailInput, SignUpLink } from './styles';
import { signIn } from 'next-auth/react';

function Input() {
    return (
        <Container>
          <EmailInput placeholder="Email" />
          <SignUpLink onClick={() => signIn()}>Continue</SignUpLink>
        </Container>
    );
}

export default Input
