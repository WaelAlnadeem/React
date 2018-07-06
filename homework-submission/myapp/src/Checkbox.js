import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
            editToDo: {
                description: props.description,
                deadline: props.deadline,
                done: props.isDone
            }
        }

    }
    handleClickDescription = () => {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }
    descriptionChange = (event) => {
        let editToDo = {
            description: event.target.value,
            deadline: this.state.editToDo.deadline
        }
        // editToDo.description = event.target.value
        this.setState({ editToDo })
        // console.log(event.target)
    }
    deadlineChange = (event) => {
        let editToDo = {
            description: this.state.editToDo.description,
            deadline: event.target.value
        }
        editToDo.deadline = event.target.value
        this.setState({ editToDo })
        console.log(this.state)
    }
    render() {
        if (!this.state.showEdit) {
            return (
                <div>
                    <div onClick={() => { this.handleClickDescription() }}>
                        <h2>Description : {this.state.editToDo.description}</h2>

                    </div>
                    <h2>Deadline : {new Date(this.state.editToDo.deadline).toDateString()}</h2>
                    <h2> {this.props.done} </h2>
                    <input type="checkbox"
                        checked={this.props.isDone}
                        onChange={() => {
                            this.props.handleChangeCheckBox(this.props.index, this.props.isDone)
                        }}
                    />
                    <button type="button" onClick={() => {
                        this.props.onDelete(this.props.index)
                    }} >
                        Delete </button>
                </div>


            );
        }
        else {
            return (<div>
                <form onSubmit={() => {
                    this.props.save(this.state.description, this.state.deadline,
                        this.state.done, this.props.index)
                    this.handleClickDescription()
                }}>   <input type="text" name="description"
                    value={this.state.editToDo.description}
                    onChange={this.descriptionChange.bind(this)}
                    />
                    <input type="text" name="deadline"
                        value={this.state.editToDo.deadline}
                        onChange={this.deadlineChange.bind(this)}
                    />
                    <button type="submit">
                        Save </button>
                    <button type="button" onClick={() => { this.handleClickDescription() }} >
                        Cancel </button>
                </form>
            </div>)
        }

    }
}



export default Checkbox;