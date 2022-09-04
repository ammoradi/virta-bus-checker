import React, {ReactNode} from 'react';
import {MockedProvider, MockedResponse} from '@apollo/client/testing';
import {render} from '@testing-library/react';

import ThemeProvider from 'theme';

const withTheme = (children: ReactNode) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
);

export const renderWithThemeProvider = (children: ReactNode) => {
  const renderResult = render(withTheme(children));

  return ({
    ...renderResult,
    rerender: (children: ReactNode) => renderResult.rerender(
      withTheme(children)
    )
  }) as typeof renderResult;
}

type Mock = MockedResponse<Record<string, any>>;

const withApollo = (children: ReactNode, mocks?: Mock[]) => (
  <MockedProvider mocks={mocks || []} addTypename={false}>
    {children}
  </MockedProvider>
);

export const renderWithApolloAndThemeProvider = (
  children: ReactNode,
  mocks?: Mock[]
) => {
  const renderResult = render(withApollo(withTheme(children), mocks));

  return ({
    ...renderResult,
    rerender: (children: ReactNode) => renderResult.rerender(
      withApollo(withTheme(children), mocks)
    )
  }) as typeof renderResult;
}