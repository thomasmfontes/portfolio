/**
 * Testes para funções utilitárias
 * Executar com: npm test
 */

import { describe, it, expect } from 'vitest';
import {
  isValidEmail,
  truncateText,
  sanitizeString,
  formatDate,
  getTimeAgo,
} from '../helpers';

describe('Utils/Helpers', () => {
  describe('isValidEmail', () => {
    it('deve validar emails corretos', () => {
      expect(isValidEmail('user@example.com')).toBe(true);
      expect(isValidEmail('test.email@domain.co.uk')).toBe(true);
    });

    it('deve rejeitar emails inválidos', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('user@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
    });
  });

  describe('truncateText', () => {
    it('deve truncar texto longo', () => {
      const text = 'Este é um texto bem longo que precisa ser truncado';
      const result = truncateText(text, 20);
      expect(result).toBe('Este é um texto bem...');
    });

    it('não deve truncar texto curto', () => {
      const text = 'Texto curto';
      const result = truncateText(text, 20);
      expect(result).toBe('Texto curto');
    });
  });

  describe('sanitizeString', () => {
    it('deve remover tags HTML', () => {
      const dirty = '<script>alert("xss")</script>Hello';
      const clean = sanitizeString(dirty);
      expect(clean).not.toContain('<script>');
    });
  });

  describe('formatDate', () => {
    it('deve formatar data corretamente', () => {
      const date = new Date(2024, 0, 15);
      const result = formatDate(date);
      expect(result).toContain('15');
    });
  });

  describe('getTimeAgo', () => {
    it('deve calcular tempo decorrido', () => {
      const pastDate = new Date(Date.now() - 60000); // 1 minuto atrás
      const result = getTimeAgo(pastDate);
      expect(result).toContain('minuto');
    });
  });
});
