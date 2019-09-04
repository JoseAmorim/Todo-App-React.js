import React from 'react';
import { connect } from 'react-redux'
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import { changeDescription, search, addTodo, clear } from '../store/actions/todo';

const TodoForm = ({ onSearch, description, onChangeDescription, onCreateTodo, onClear }) => {
    const keyHandler = event => {
        if (event.key === 'Enter') {
            event.shiftKey ? onSearch() : onCreateTodo(description)
        } else if (event.key === 'Escape') {
            onSearch()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input value={description}
                    onChange={(event) => onChangeDescription(event.target.value)}
                    onKeyUp={keyHandler}
                    id='description'
                    className='form-control'
                    placeholder='Adcione uma tarefa'></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton onClick={() => onCreateTodo(description)} style='primary' icon='plus' />
                <IconButton onClick={() => onSearch()} style='info' icon='search' />
                <IconButton onClick={onClear} style='default' icon='close' />
            </Grid>
        </div>
    )
}

const mapStateToProps = ({ todo }) => ({
    description: todo.description
});

const mapDispatchToProps = dispatch => ({
    onChangeDescription: description => dispatch(changeDescription(description)),
    onCreateTodo: description => dispatch(addTodo(description)),
    onSearch: () => dispatch(search()),
    onClear: () => dispatch(clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)