import { useState, useEffect } from 'react';


const PaginateItems = (itemsPerPage ,dataa) => {

    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    useEffect(() => {
        setPageCount(Math.ceil(dataa.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, dataa]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % dataa.length;

        setItemOffset(newOffset);
    };




    return {pageCount , endOffset ,itemOffset , handlePageClick};
}
 
export default PaginateItems ;