import styled from "styled-components";
import { Form as FormikForm, ErrorMessage as FirmikError} from 'formik';

export const Form = styled(FormikForm)`
width: 400px;
padding: 8px;
border: 1px solid black;
display: flex;
flex-direction: column;
gap: 12px;
`;

export const FormField = styled.label`
display: flex;
flex-direction: column;
gap: 4px;
`;

export const ErrorMessage = styled(FirmikError)`
color: red;
`;