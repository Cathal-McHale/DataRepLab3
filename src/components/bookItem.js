import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function BookItem(props) {

    return (
        <div>
            <Card style={{ width: '15rem',height: '35rem' }}>
                <Card.Img variant="top" src={props.MyBook.thumbnailUrl} />
                <Card.Body>
                    <Card.Title>{props.MyBook.title}</Card.Title>
                    <Card.Text>
                        {props.MyBook.authors[0]}
                    </Card.Text>
                    <Button variant="primary">Open</Button>
                </Card.Body>
            </Card>
        </div>

    )
}




export default BookItem;