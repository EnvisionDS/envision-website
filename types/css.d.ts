// lets inline styles set CSS custom properties, e.g. style={{ "--c": "#5b9be6" }} for a service's colour
import "react";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
