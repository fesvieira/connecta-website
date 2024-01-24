import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mtd_primary: string;
    mtd_onPrimary: string;
    mtd_primaryContainer: string;
    mtd_onPrimaryContainer: string;
    mtd_secondary: string;
    mtd_onSecondary: string;
    mtd_secondaryContainer: string;
    mtd_onSecondaryContainer: string;
    mtd_tertiary: string;
    mtd_onTertiary: string;
    mtd_tertiaryContainer: string;
    mtd_onTertiaryContainer: string;
    mtd_error: string;
    mtd_errorContainer: string;
    mtd_onError: string;
    mtd_onErrorContainer: string;
    mtd_background: string;
    mtd_onBackground: string;
    mtd_surface: string;
    mtd_onSurface: string;
    mtd_surfaceVariant: string;
    mtd_onSurfaceVariant: string;
    mtd_inverseOnSurface: string;
    mtd_inverseSurface: string;
    mtd_outline: string;
    mtd_inversePrimary: string;
    mtd_surfaceTint: string;
    mtd_outlineVariant: string;
    mtd_scrim: string;
    STATUS_BAR_SCRIM: string;
    gradient_background: string[];
  }
}
