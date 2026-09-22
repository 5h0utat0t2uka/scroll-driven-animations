import { Component, type ReactNode } from "react";
import { ErrorFallback } from "../fallback";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};
type State = {
  error?: Error;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = {};

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error("Uncaught error:", error);
  }

  render() {
    const { error } = this.state;
    if (!error) {
      return this.props.children;
    }
    return <ErrorFallback />;
  }
}

export default ErrorBoundary;
