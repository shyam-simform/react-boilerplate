import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TextInput from '../../components/common/text-input';

describe('TextInput Component', () => {
  it('renders input with label', () => {
    render(<TextInput label="Test Label" name="test" type="text" />);

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders textarea when type is textarea', () => {
    render(<TextInput label="Test Textarea" name="test" type="textarea" rows={5} />);

    const textarea = screen.getByRole('textbox');
    expect(textarea.tagName).toBe('TEXTAREA');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('displays error message when error prop is provided', () => {
    const errorMessage = 'This field is required';

    render(<TextInput label="Test Input" name="test" type="text" error={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveClass('border-red-500');
  });

  it('shows required asterisk when required prop is true', () => {
    render(<TextInput label="Required Field" name="test" type="text" required={true} />);

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('applies correct placeholder', () => {
    const placeholder = 'Enter your text here';

    render(<TextInput label="Test Input" name="test" type="text" placeholder={placeholder} />);

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
});
