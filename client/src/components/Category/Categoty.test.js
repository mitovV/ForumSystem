import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Category from './'

describe('Category component', () => {
    it('Should display name', () => {
        const name = "Sport"

        render(
            <BrowserRouter>
                <Category name={name} />
            </BrowserRouter>
        )

        expect(document.querySelector('.media-body h5').nextSibling.textContent).toBe(name)
    })

    it('Should display imageUrl', () => {
        const imageUrl = "someimageurl"

        render(
            <BrowserRouter>
                <Category pictureUrl={imageUrl} />
            </BrowserRouter>
        )

        expect(document.querySelector('img').getAttribute('src')).toBe(imageUrl)
    })

    it('Should set correct link to detais', () => {
        const id = "someid"

        render(
            <BrowserRouter>
                <Category _id={id} />
            </BrowserRouter>
        )

        expect(document.querySelector('h5 a').getAttribute('href')).toBe(`/categories/${id}`)
    })
})