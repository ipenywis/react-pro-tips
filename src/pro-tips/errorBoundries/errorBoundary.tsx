import React from "react";
import styled from "styled-components";

const ErrorText = styled.span`
  color: #bb3b3b;
  font-size: 18px;
`;

export class MyErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, message: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, message: error && error.message };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if ((this.state as any).hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorText>
          {(this.state as any).message || "Something went wrong"}
        </ErrorText>
      );
    }

    return this.props.children;
  }
}
