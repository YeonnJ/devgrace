import { hexToRGB } from '.';

describe('hexToRGB', () => {
  it('should convert valid hex color to RGB', () => {
    const validHexColor = '#1A2B3C';
    const rgbColor = hexToRGB(validHexColor);

    expect(rgbColor).toEqual({ r: 26, g: 43, b: 60 });
  });

  it('should return null for invalid hex color', () => {
    const invalidHexColor = '#XYZ123';
    const rgbColor = hexToRGB(invalidHexColor);

    expect(rgbColor).toBeNull();
  });

  it('should handle short hex color codes', () => {
    const shortHexColor = '#1A2';
    const rgbColor = hexToRGB(shortHexColor);

    expect(rgbColor).toEqual({ r: 17, g: 170, b: 34 });
  });

  it('should return null for empty string', () => {
    const emptyHexColor = '';
    const rgbColor = hexToRGB(emptyHexColor);

    expect(rgbColor).toBeNull();
  });
});
