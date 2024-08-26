import { Container, HasAccount, Buttons, LabelInput, Text, Input, InputWrapper, IconWrapper } from "./styled.ts";
import React, { useState } from "react";
import { MailIcon, PadlockIcon } from "./icons.tsx";

interface FormData {
    email: string;
    password: string;
}
interface FormDataProps extends FormData {
    onEmailPassChange: (updater: (updateData: FormData) => FormData) => void;
}

function LogSignForm({ email, password, onEmailPassChange }: FormDataProps) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onEmailPassChange(prevData => ({
            ...prevData, [name]: value
        }));
    }

    return (
        <Container>
            <form method='GET' action=''>
                <h3 style={{ margin: '0 0 1em 0', fontSize: '2em' }}>{isLoggedIn ? 'Log In' : 'Create Account'}</h3>

                <Text>
                    {/* email */}
                    <LabelInput>
                        <label htmlFor="email" style={{ fontSize: '0.9em' }}>Email</label>

                        <InputWrapper>
                            <IconWrapper>
                                <MailIcon/>
                            </IconWrapper>
                            <Input type="email" name="email" value={email} onChange={handleChange}></Input>
                        </InputWrapper>
                    </LabelInput>

                    {/* password */}
                    <LabelInput>
                        <label htmlFor="password" style={{ fontSize: '0.9em' }}>Enter Password</label>

                        <InputWrapper>
                            <IconWrapper>
                                <PadlockIcon/>
                            </IconWrapper>
                            <Input type="password" name="password" value={password} onChange={handleChange}></Input>
                        </InputWrapper>
                    </LabelInput>
                </Text>

                <Buttons>{isLoggedIn? 'Log in' : 'Register'}</Buttons>
            </form>

            <HasAccount>
                <p>{isLoggedIn? 'No account? Register' : 'Have an account?'}</p>
                <Buttons onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn ? 'Register' : 'Log in'}
                </Buttons>
            </HasAccount>
        </Container>
    );
}

export default function AuthForm() {
    const [emailPass, setEmailPass] = useState<FormData>({
        email: '', password: ''
    });

    return (
        <LogSignForm email={emailPass.email} password={emailPass.password} onEmailPassChange={setEmailPass}/>
    );
}