import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import userContext from '../contexts/userContext'

const IsAuth = (InnerComponent) => {
    const OuterComponent = (props) => {
        const [user] = useContext(userContext)
        const hisroy = useHistory()

        if (!user) {
            hisroy.push('/users/login')
            return null
        }

        return <InnerComponent {...props}/>
    }

    return OuterComponent
}

export default IsAuth