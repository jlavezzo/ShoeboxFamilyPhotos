module.exports = {
  '*.{ts,tsx,js}': 'npm run pre-commit',
  '**/*.ts?(x)': () => {
    return [
      `tsc -p ./config/typescript/tsconfig.json --noEmit`,
      `tsc -p ./config/typescript/tsconfig.browser.json --noEmit`,
    ];
  },
};
