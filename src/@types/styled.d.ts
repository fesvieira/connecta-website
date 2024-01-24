import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    errorContainer: string;
    onError: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    inverseOnSurface: string;
    inverseSurface: string;
    outline: string;
    inversePrimary: string;
    surfaceTint: string;
    outlineVariant: string;
    scrim: string;
    STATUS_BAR_SCRIM: string;
    gradient_background: string[];
  }
}
