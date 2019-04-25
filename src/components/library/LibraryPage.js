import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../redux/actions/bookActions';
import PropTypes from 'prop-types';

class LibraryPage extends React.Component {

    state = {
        book: {
            title: ""
        }
    };

    //Here I cloned existing state and made a change to it and then called the setState
    //declaration of handleChange with acceptance of an event
    handleChange = event => {
        //to copy current book from state used spread operator, set title to new value
        const book = { ...this.state.book, title: event.target.value };
        //Now we've copy book object that reflects the new title, we can call setState
        this.setState({ book }); //use object shorthand syntax when both sides are the same
    };
    //declaration of handleSubmit with acceptance of an event
    handleSubmit = event => {
        event.preventDefault();
        debugger;
        this.props.dispatch(bookActions.createBook(this.state.book))

    };

    render() {
        return (
            //added a submit handler to the form, Now user can submit by hitting the ENTER key
            <form onSubmit={this.handleSubmit}>
                <h2>Books</h2>
                <h3>Add Book</h3>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.book.title}
                />

                <input type="submit" value="Save" />
                {this.props.books.map(book => (
                    <div key={book.title}>
                        {book.title}
                    </div>
                ))}

            </form>
        );
    }
}
LibraryPage.propTypes = {
    books: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

//This functions determins what part of the state we expose the component
function mapStateToProps(state) {
    debugger;
    return {
        books: state.books
    };
}
//instead of exporting our plain LibraryPage component
// we're going to decorate our component using connect. 
export default connect(mapStateToProps)(LibraryPage);
//export default LibraryPage;

//As the first argument passed in to connect, mapStateToProps is used for selecting the part of
// the data from the store that the connected component needs