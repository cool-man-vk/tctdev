import React from 'react'

const SubCategories = (props) => {
    const subCategoryData = props.subCategoryData;
    console.log(subCategoryData);
    return (
        <div>
            {
                subCategoryData.map((subCategory, index) => {
                    return (
                        <div style={{'display':'flex','padding':'14px','alignItems':'center'}}>
                            <img src={subCategory.image} alt={subCategory.name} width={50} height={50} />
                            <br />
                            <h5>    {subCategory['name']}</h5>
                            <br />
                        </div>
                    );
                })
            }
        </div>
    )
}

export default SubCategories