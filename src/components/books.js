import BookItem from "./bookItem";

function Books(props){
//collects from MyBooks 
    return props.MyBooks.map(

        (book)=>{
            return <BookItem MyBook={book} key={book.isbn}></BookItem>
        }
    );
}

export default Books;