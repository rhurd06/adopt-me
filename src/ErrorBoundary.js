import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component{
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }
    render () {
        if (this.state.hasError) {
            return(
                <h1>
                    This listing has an error. <Link to="/">ClickHere</Link>to go back to the home page.
                </h1>
            )
        }
        return this.props.children;
    }
}