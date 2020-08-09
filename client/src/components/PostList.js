import React, { Component } from "react"
import axios from "axios"

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            debates: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/newdebates")
            .then(response => {
                console.log(response)
                this.setState({ debates: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { debates } = this.state
        return (
            <div>
                List of Post
                {
                    debates.length ?
                        debates.map(debates => <div key={debates.user_id}>{debates.topic}</div>) :
                        null
                }
            </div>
        )
    }
}

export default PostList