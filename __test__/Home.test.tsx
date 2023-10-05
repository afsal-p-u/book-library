import { render, screen } from '@testing-library/react'
import Sidebar from '@/components/Sidebar'


it("Should have Hi Text", () => {
    render (<Sidebar />) // arrange

    const myElem = screen.getByText('Book') // action

    expect(myElem).toBeInTheDocument() // assert
})