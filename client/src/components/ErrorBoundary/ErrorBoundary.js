import { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error){
        console.log(error)
    }

    render() {
        if (this.setState.hasError) {
            return (
                <div className="row justify-content-center">
                    <div className="col col-md-5">
                        <h2 className="text-info">Something went wrong!</h2>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary