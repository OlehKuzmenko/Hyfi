import { Form } from 'react-bootstrap';
import { ReactComponent as Clip } from '@icons/clip.svg';
import {
  StyledForm,
  StyledTitle,
  StyledFormLabel,
  StyledInputLabel,
  StyledInputText,
  StyledReport,
  StyledFormControl,
  StyledBtn,
} from './styled';

export default function Report() {
  return (
    <StyledReport>
      <StyledForm id={'styled_form'}>
        <StyledTitle>Report an issue</StyledTitle>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <StyledFormLabel>Summary</StyledFormLabel>
          <StyledFormControl aria-required={'true'} size="lg" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <StyledFormLabel>Description</StyledFormLabel>
          <StyledFormControl
            aria-required={'true'}
            as="textarea"
            style={{ height: '140px', resize: 'none' }}
          />
        </Form.Group>

        <StyledInputLabel>
          <StyledFormControl type="file" style={{ display: 'none' }} />
          <Clip />
          <StyledInputText>Choose a file</StyledInputText>
        </StyledInputLabel>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <StyledFormLabel>Wallet Address</StyledFormLabel>
          <StyledFormControl size="lg" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <StyledFormLabel>Email</StyledFormLabel>
          <StyledFormControl aria-required={'true'} size="lg" type="email" />
        </Form.Group>

        <StyledBtn
          type={'submit'}
          form={'styled_form'}
          theme={'gradient'}
          title={'Send'}
        />
      </StyledForm>
    </StyledReport>
  );
}
