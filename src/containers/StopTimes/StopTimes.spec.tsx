import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithThemeProvider } from 'utils/testUtils';
import {StopMock} from 'containers/App/App.graphql.mock'

import StopTimes, {StopTimesSlug} from './StopTimes';

describe('<StopTimes /> container', () => {
  it('should render slug', () => {
    renderWithThemeProvider(<StopTimes />);

    expect(screen.getByText(StopTimesSlug)).toBeInTheDocument();
  })

  it('should render title', () => {
    renderWithThemeProvider(<StopTimes data={StopMock} />);

    expect(screen.getByText(StopMock.stop?.name as string)).toBeInTheDocument();
  })

  it('should render list items', () => {
    renderWithThemeProvider(<StopTimes data={StopMock} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(
      StopMock.stop?.stopTimes?.length as number
    );
  })
})