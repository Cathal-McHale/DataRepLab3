import { useState } from "react";

function Create() {


    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [cover, setCover] = useState('');


    const handleSubmit= (e)=>{

        e.preventDefault();

        {/** output to console data */}
        console.log("Title: " + title + 
        " Author: "+ authors+ " Cover: " + cover);
        }

    return (
        <div>
            <h3>Hello from Create Component!</h3>
            {/* add a form */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                {/**author form */}
                    <div className="form-group">
                        <label>Edit Authors Name: </label>
                        <input type="text"
                            className="form-control"
                            value={authors}
                            onChange={(e) => { setAuthors(e.target.value) }}
                        />
                    </div>
                      {/**Cover Image form */}
                      <div className="form-group">
                        <label>Edit Cover Image: </label>
                        <input type="src"
                            className="form-control"
                            value={cover}
                            onChange={(e) => { setCover(e.target.value) }}
                        />
                    </div>
                    <div>
                        {/** form to submit and store */}
                        <input type="submit"
                        classname="form-control"
                        color="blue">
                        
                        </input>
                    </div>


            </form>
        </div>
    )

}
export default Create;