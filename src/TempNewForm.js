import React, { useState } from 'react';
import './TemplateForm.css';


const TempNewForm = () => {

    const [firstName, setFirstName] = useState('');
    const [buttonclick, setButtonClick] = useState('');
    const [checkValid, setCheckValid] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleChange = (e) => {
        e.preventDefault(); //refresh, default submission, suppress the html related events
        setFirstName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName.length < 5) {
            setCheckValid('Name is too short');
            setButtonClick('');
        }
        else {
            setButtonClick(firstName);
            setCheckValid('');
            setFormSubmitted(true);
            alert(`Form is submitted with ${firstName}`);
        }

    }

    return (
        <div>
            {formSubmitted ?
                (


                    <><p>Form is submitted</p></>


                ) :
                (<>
                    <div className="beaut grad1">
                    <h1 className="grad2"><p >"React Sample Form" </p></h1>
                        <h1 align="center"><p>Sayonara,  {firstName}</p></h1>
                    <center>
                        <p>Your Input : {buttonclick}</p>

                    <form onSubmit={handleSubmit}>
                          <input className="input-field" type='text' onChange={handleChange}></input>
                    
                        <br/><br/>
                        <button type="submit">Enter Data</button>
                        {checkValid && <p className='error'>{checkValid}</p>}
                     </form>
                     </center>
                </div>

                </>)
            }
        </div>
    )
}


export default TempNewForm;