import { describe, it, expect } from 'vitest';
import {
  formatFileSize,
  isValidEmail,
  formatDate,
  truncateText,
  generateId,
  isFileTypeAllowed,
  getInitials,
} from '../../utils';

describe('Utility Functions', () => {
  describe('formatFileSize', () => {
    it('should format bytes correctly', () => {
      expect(formatFileSize(0)).toBe('0 Bytes');
      expect(formatFileSize(1024)).toBe('1 KB');
      expect(formatFileSize(1048576)).toBe('1 MB');
      expect(formatFileSize(1073741824)).toBe('1 GB');
    });
  });

  describe('isValidEmail', () => {
    it('should validate email addresses correctly', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
    });
  });

  describe('formatDate', () => {
    it('should format date strings correctly', () => {
      const dateString = '2024-01-15T10:30:00Z';
      const formatted = formatDate(dateString);
      expect(formatted).toContain('January');
      expect(formatted).toContain('15');
      expect(formatted).toContain('2024');
    });
  });

  describe('truncateText', () => {
    it('should truncate text correctly', () => {
      const longText = 'This is a very long text that should be truncated';
      expect(truncateText(longText, 10)).toBe('This is a ...');
      expect(truncateText('Short', 10)).toBe('Short');
    });
  });

  describe('generateId', () => {
    it('should generate unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
      expect(typeof id1).toBe('string');
      expect(id1.length).toBeGreaterThan(0);
    });
  });

  describe('isFileTypeAllowed', () => {
    it('should check file types correctly', () => {
      const file = new File(['content'], 'test.jpg', { type: 'image/jpeg' });
      const allowedTypes = ['jpg', 'png', 'gif'];

      expect(isFileTypeAllowed(file, allowedTypes)).toBe(true);
      expect(isFileTypeAllowed(file, ['pdf', 'doc'])).toBe(false);
    });
  });

  describe('getInitials', () => {
    it('should generate initials correctly', () => {
      expect(getInitials('John Doe')).toBe('JD');
      expect(getInitials('Jane Mary Smith')).toBe('JM');
      expect(getInitials('SingleName')).toBe('S');
      expect(getInitials('A B C D E')).toBe('AB');
    });
  });
});
