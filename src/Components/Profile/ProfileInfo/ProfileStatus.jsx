import React , { PureComponent } from 'react';




class ProfileStatus extends PureComponent {

state={
    editMode: false,
    status: this.props.status
}

activatedEditMode = () => {
    this.setState({
        editMode: true
    })
}
deactivatedEditMode = ()  => {
    this.setState({
        editMode: false
    })
    this.props.updateStatus(this.state.status)
}
onStatusChenge = (e) => {
    this.setState({
        status: e.currentTarget.value
    })
}

componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
        this.setState ({
            status: this.props.status
        })
    }
}

    render() {

        return (
            <div>
                {!this.state.editMode && 
                    <div>
                        <span onDoubleClick={this.activatedEditMode}>{this.props.status}</span>
                    </div>}
                {this.state.editMode && 
                    <div>
                        <input onChange={this.onStatusChenge} autoFocus={true} onBlur={this.deactivatedEditMode} value={this.state.status} />
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;