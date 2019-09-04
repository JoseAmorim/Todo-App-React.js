import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import IconButton from '../template/IconButton';
import { search, markAsDone, deleteTodo } from '../store/actions/todo';

const TodoList = ({ todos, handleRemove, handleMarkAsDone, onSearch }) => {
    const renderRows = () => {
        const list = todos || []

        return list.map(item => {
            return (
                <tr key={item._id}>
                    <td className={item.isDone ? 'markedAsDone' : ''}>{item.description}</td>
                    <td>
                        <IconButton style={item.isDone ? 'warning' : 'success'}
                            icon={item.isDone ? 'undo' : 'check'}
                            onClick={() => handleMarkAsDone(item)} />
                        <IconButton style='danger' icon='trash-o'
                            hide={!item.isDone}
                            onClick={() => handleRemove(item._id)} />
                    </td>
                </tr>
            )
        })
    }

    useEffect(() => {
        onSearch()
    }, [])

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = ({ todo }) => ({
    todos: todo.todos
});

const mapDispatchToProps = dispatch => ({
    onSearch: () => dispatch(search()),
    handleMarkAsDone: (item) => dispatch(markAsDone(item)),
    handleRemove: (id) => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)