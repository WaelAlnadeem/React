import React from 'react';

class Checkbox extends React.Component {
    toggleChange = () => {
        this.setState({
            isDone: !this.state.isChecked,
        });
    }
    render() {
        return (
            <div>
                <input type="checkbox"
                    checked={this.props.isDone}
                    onChange={() => { this.props.handleChangeChekBox(this.props.index, this.props.isDone) }}
                />
            </div >


        );
    }
}



export default Checkbox;