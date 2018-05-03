'use strict';

import multiBracketValidation from '../multi-bracket-validation';

describe('multi-bracket-validation.js', () => {
  it('#multiBracketValidation return true', () => {
    expect(multiBracketValidation('([])')).toBeTruthy();
  });

  it('#multiBracketValidation return false', () => {
    expect(multiBracketValidation('([)')).toBeFalsy();
  });
});
