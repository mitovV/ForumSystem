import { Component } from 'react'
import Category from '../Category'

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            categories: []
        }
    }
    render(){
        return(
            <>
            <h1>Categories</h1>
            <div className="row">
                {this.categories.map(x => <Category {...x} />)}
            </div>
            </>
        )
    }
}

export default Home