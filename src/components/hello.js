import React ,{ Component} from 'react'

class Hello extends Component {

    render() {
        return (
            <div>
                Hello from class Hello component
                <br />create whith classe Methode 
                <br />{this.props.value}
            </div>
        )
    }
}

export default Hello;