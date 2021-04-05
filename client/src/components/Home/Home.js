import { Component } from 'react'
import Category from '../Category'
import * as categoriesService from '../../services/categoriesService'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        categoriesService
            .getAll()
            .then(categories => {
                this.setState({ categories })
            })
    }

    render() {
        return (
            <>
                <h1 className="text-primary mb-3">Categories</h1>
                <Link to='/posts/create'><h3 className="text-info mb-3">Create new post</h3></Link>
                <div className="row justify-content-center">
                    {this.state.categories.map(x => <Category key={x._id} {...x} />)}
                </div>
            </>
        )
    }
}

export default Home