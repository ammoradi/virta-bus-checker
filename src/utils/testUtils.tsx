import React, {ReactNode} from 'react'
import {render} from '@testing-library/react'

import ThemeProvider from 'theme'

export const renderWithThemeProvider = (children: ReactNode) => {
  const renderResult = render(
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )

  return ({
    ...renderResult,
    rerender: (children: ReactNode) => renderResult.rerender(
      <ThemeProvider>
        {children}
      </ThemeProvider>
    )
  }) as typeof renderResult
}