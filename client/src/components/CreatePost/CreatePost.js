import { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'

import InputError from '../Shared/InputError'

const CreatePost = () => {
    const titleMessage = 'Title must contain at least 4 characters.'
    const [titleErrorMessage, setTitleErrorMessage] = useState('')
    const [contentErrorMessage, setConstentErrorMessage] = useState('')

    const createPostFormSubmitHandler = (e) => {
        e.preventDefault()

        if (e.target.title.value.length < 4) {
            setTitleErrorMessage(titleMessage)
        }
        else{
            setTitleErrorMessage('')
        }

        if (e.target.content.value.length < 10) {
            setConstentErrorMessage('Content must contain at least 10 characters.')
        }
        else{
            setConstentErrorMessage('')
        }
    }

    const onTitleBlurHandler = (e) => {
        if (e.target.value.length < 4 || !e.target.value) {
            setTitleErrorMessage(titleMessage)
        }
        else{
            setTitleErrorMessage('')
        }
    }

    return (
        <>
            <h1 className="text-primary">Crate post</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={createPostFormSubmitHandler}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input id="title" name="title" className="form-control"  onBlur={onTitleBlurHandler}/>
                            <InputError>{titleErrorMessage}</InputError>
                        </div>

                        <div>
                            <label htmlFor="content">Content</label>
                            <Editor id="content" name="content" className="form-control"/>
                            <InputError>{contentErrorMessage}</InputError>
                        </div>

                        <div>
                            <label htmlFor="categoryId">Category</label>
                            <select name="categoryId" className="form-control">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success mt-2">Create</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreatePost