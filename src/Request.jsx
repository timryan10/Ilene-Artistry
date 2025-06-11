import DropboxChooser from "react-dropbox-chooser";

function Request(){
    return(
        <form id="form" >
            <div className="request">
                <div className="refMail">
                    <div className="email">
                        <h5>E-mail:</h5>
                        <textarea 
                            required
                            placeholder="E-mail"
                            type="text" 
                            className="mail" 
                        />
                    </div>
                    <div>
                        <h5>Image:</h5>
                        <DropboxChooser/>    
                    </div>
                </div>
                <div className="address">
                    <div>
                        <h5>Street Address:</h5>
                        <textarea 
                            placeholder="Street Address"
                            type='text'
                        />
                    </div>
                    <div>
                        <h5>City:</h5>
                        <textarea 
                            placeholder="City"
                            type='text'
                        />
                    </div>
                    <div>
                        <h5>State:</h5>
                        <select placeholder="Select">
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>Arizona</option>
                            <option>Arkansas</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Connecticut</option>
                            <option>Deleware</option>
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Hawaii</option>
                            <option>Idaho</option>
                            <option>Illinois</option>
                            <option>Indiana</option>
                            <option>Iowa</option>
                            <option>Kansas</option>
                            <option>Kentucky</option>
                            <option>Louisiana</option>
                            <option>Maine</option>
                            <option>Maryland</option>
                            <option>Massachusetts</option>
                            <option>Michigan</option>
                            <option>Minnesota</option>
                            <option>Mississippi</option>
                            <option>Missouri</option>
                            <option>Montana</option>
                            <option>Nebraska</option>
                            <option>Nevada</option>
                            <option>New Hampshire</option>
                            <option>New Jersey</option>
                            <option>New Mexico</option>
                            <option>New York</option>
                            <option>North Carolina</option>
                            <option>North Dakota</option>
                            <option>Ohio</option>
                            <option>Oklahoma</option>
                            <option>Oregon</option>
                            <option>Pennsylvania</option>
                            <option>Rhode Island</option>
                            <option>South Carolina</option>
                            <option>South Dakota</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Utah</option>
                            <option>Vermont</option>
                            <option>Virginia</option>
                            <option>Washington</option>
                            <option>West Virginia</option>
                            <option>Wisconsin</option>
                            <option>Wyoming</option>
                        </select>
                    </div>
                    <div>
                        <h5>Zip Code:</h5>
                        <textarea 
                        placeholder="Zip Code"
                        type="text"
                        />
                    </div>
                </div>
                <div className="description">
                    <h5>Description:</h5>
                    <textarea 
                        placeholder="Description"
                        type="text"
                        className="descrip" 
                    />
                </div>
            </div>
        </form>
        
    )
}

export default Request