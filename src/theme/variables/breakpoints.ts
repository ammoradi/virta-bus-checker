type Device = 'mobile' | 'tablet';

const sizes: Record<Device, number> = {
  mobile: 500,
  tablet: 800
};

const getMaxWidthBreakpoint = (device: Device) =>
  `only screen and (max-width: ${sizes[device]}px)`;

export const ThemeBreakpoints: Record<Device, string> = {
  mobile: getMaxWidthBreakpoint('mobile'),
  tablet: getMaxWidthBreakpoint('tablet'),
};