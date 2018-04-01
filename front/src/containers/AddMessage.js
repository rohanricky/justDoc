import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

function getCall(){
  return fetch('/new-message')
    .then((res)=> res.json())
}

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)
