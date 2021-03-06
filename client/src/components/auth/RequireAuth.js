import React, { Component } from 'react'
import { connect } from 'react-redux'

export default ChildComponent => {

    class ComposedCompoent extends Component {

        componentDidMount() {
            this.shouldNavigateAway()
        }

        componentDidUpdate() {
            this.shouldNavigateAway()
        }

        shouldNavigateAway() {
            if (!this.props.auth) this.props.history.push('/')
        }

        renderChilds() {
            if (this.props.auth) return <ChildComponent {...this.props} />
            return null
        }

        render() {
            return <div> {this.renderChilds()} </div>
        }

    }

    const mapStateToProps = state => ({ auth: state.auth.authenticated})

    return connect(mapStateToProps)(ComposedCompoent)

}