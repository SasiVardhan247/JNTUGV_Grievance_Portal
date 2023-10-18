import React from 'react'
import ReactPaginate from 'react-paginate';
import GCard from './GCard'
import { useState } from 'react';


const Grievances = ({ currentItems }) => {
    return (
        <div className='container mt-5'>
            {currentItems.length == 0 ? "No grivances up until now" : currentItems.map((g,index) => <GCard  i={index}  {...g} />)}
        </div>
    )
}

const Pagination = ({ itemsPerPage , grievances }) => {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = grievances.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(grievances.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % grievances.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Grievances currentItems={currentItems} />
            <div className='d-flex align-items-center justify-content-center'>
                <nav aria-label='...'>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="&raquo;"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="&laquo;"
                        renderOnZeroPageCount={null}
                        className="pagination"
                        pageClassName="page-item"
                        pageLinkClassName='page-link'
                        previousLinkClassName="page-link"
                        nextLinkClassName='page-link'
                        disabledClassName="disabled"
                        activeClassName="active"
                    />
                </nav>
            </div>
        </>
    )
}

export default Pagination