import React from 'react';
import { render } from '@testing-library/react'
import Content from './';

describe('Layout Content component', () => {
  test('it renders sidebar and content area', () => {
    const { getByTestId } = render(<Content />);
    expect(getByTestId('content')).toBeVisible();
    expect(getByTestId('sidebar-container')).toBeVisible();
  })
})