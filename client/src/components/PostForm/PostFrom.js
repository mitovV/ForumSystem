import { useEffect, useState } from 'react'

import InputError from '../Shared/InputError'
import Option from '../Option'
import { Editor } from '@tinymce/tinymce-react'

import * as categoresService from '../../services/categoriesService'

const PostForm = ({
    title, content, category, buttonName, submitHandler, onTitleBlurHandler, titleErrorMessage, contentErrorMessage
}) => {

    const [categories, setCategories] = useState([])

    const [updatedContent, setContent] = useState('')
    const [updatedCategory, setCategory] = useState('')

    useEffect(() => {
        setContent(content)
        setCategory(category)
        categoresService
            .getAll()
            .then(setCategories)
    }, [content, category])

    const onContentChangedHandler = (e) => {
        setContent(e)
    }

    const onCategoryChangedHandler = (e) => {
        setCategory(e.target.value)
    }
   
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" className="form-control" onBlur={onTitleBlurHandler} defaultValue={title} />
                <InputError>{titleErrorMessage}</InputError>
            </div>

            <div>
                <label htmlFor="content">Content</label>
                <Editor 
                    id="content" 
                    name="content" 
                    className="form-control" 
                    value={updatedContent} 
                    onEditorChange={onContentChangedHandler} />
                <InputError>{contentErrorMessage}</InputError>
            </div>
            <div>
                <label htmlFor="categoryId">Category</label>
                <select name="category" className="form-control" value={updatedCategory} onChange={onCategoryChangedHandler}>
                    {categories
                        .map(x => <Option key={x._id} value={x._id} name={x.name} />)
                    }
                </select>
            </div>
            <button type="submit" className="btn btn-success mt-2">{buttonName}</button>
        </form>
    )
}

export default PostForm