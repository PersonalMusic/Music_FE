import React, { Component, ReactNode } from "react";
import { NavigateFunction } from 'react-router-dom';

interface IErrorBoundaryProps {
  children: ReactNode;
  navigate: NavigateFunction;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  // componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children;
  }
}

