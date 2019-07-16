import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from '../lib/styledComponents';
import theme from '../theme';

export const shallowWithTheme = (tree: any) =>
  shallow(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);

export const mountWithTheme = (tree: any) =>
  mount(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);

export const resize = (newWidth: number) => {
  (global as any).innerWidth = newWidth;
  (global as any).dispatchEvent(new Event('resize'));
};

export const checkStyleRules = (el: any, rules: any, options: any = {}) => {
  const ruleKeys = Object.keys(rules);

  ruleKeys.forEach((ruleKey: any) => {
    expect(el).toHaveStyleRule(ruleKey, rules[ruleKey], options);
  });
};