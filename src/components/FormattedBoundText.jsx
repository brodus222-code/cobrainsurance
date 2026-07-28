/**
 * Lightweight pass-through. The original supported dev-time format overrides
 * (an empty sidecar in production), so it always renders its children.
 */
export function FormattedBoundText({ children, ...rest }) {
  return <>{children}</>;
}

export default FormattedBoundText;