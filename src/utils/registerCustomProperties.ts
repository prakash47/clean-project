'use client';

export function registerCustomProperties() {
  if (typeof window !== 'undefined') {
    try {
      CSS.registerProperty({
        name: '--border-angle',
        syntax: '<angle>',
        inherits: true,
        initialValue: '0turn',
      });
    } catch (error) {
      // Silently ignore if the property is already registered
      console.warn('Custom property --border-angle already registered:', error);
    }
  }
}