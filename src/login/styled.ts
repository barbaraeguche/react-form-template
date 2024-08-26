import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid darkgrey;
    padding: 1.35em;
    border-radius: 15px;
    min-width: 20em;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6),
                -2px -2px 3px rgba(0, 0, 0, 0.3);
	font-family: Tahoma;
`;
export const Text = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 1.5em;
`;
export const HasAccount = styled.div`
    > p {
        margin: 0;
    }
`;
export const Buttons = styled.button`
    width: 100%;
	margin: 1.85em 0 3.5em 0;
    padding: 1em;
    background-color: black;
    color: white;
    border-radius: 10px;
    border: 1px solid;
    font-size: 0.7em;
    cursor: pointer;
	
    &:nth-child(2) {
        background-color: white;
        color: black;
	    margin: 1.25em 0 1em 0;
        border-color: black;
    }
`;
export const LabelInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3em;
`;
export const Input = styled.input`
	border-radius: 10px;
    border-style: solid;
    border-color: darkgrey;
    padding: 0.6em 0.6em 0.6em 35px;
    font-size: 0.8em;
    width: 100%;
`;
export const InputWrapper = styled.div`
	position: relative;
	width: 85%;
`;
export const IconWrapper = styled.div`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
`;