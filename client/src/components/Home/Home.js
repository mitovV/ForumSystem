import { Component } from 'react'
import Category from '../Category'
import * as categoriesService from '../../services/categoriesService'

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            categories: []
        }
    }

    componentDidMount(){
        categoriesService
        .getAll()
        .then(categories => {
            this.setState({categories})
    })
    }

    render(){
        return(
            <>
            <h1>Categories</h1>
            <div className="row">
                {this.state.categories.map(x => <Category key={x._id} {...x} />)}
            </div>
            </>
        )
    }
}

export default Home