import React from 'react'
import SubCategories from './SubCategories';

export default class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryData: props.categoryData
        }
    }

    render() {
        return (
            <div>
                <div style={{'textAlign':'center' ,'width':'100%','padding':'18px','display':'grid','gridTemplateColumns':'1fr 1fr'}}>
                     <div>
                        <h3>Categories</h3>
                     </div>
                     <div>
                        <h3>Subcategories</h3>
                     </div>
                </div>
                {
                    this.state.categoryData.map((category, index) => {
                        return (
                            <>
                                <div key={index} style={{'width':'100%' ,'display':'grid','gridTemplateColumns':'1fr 1fr'}}>
                                    <div style={{'width':'100%','display':'flex','alignItems':'center','justifyContent':'center','border':'1px solid black'}}>
                                        <img src={category['image']} alt={category.name} width={50} height={50} /><br/>
                                        <h5>    {category['name']}</h5>
                                        <br />
                                    </div>
                                    {/* Subcategories */}
                                    <div style={{'width':'100%','padding':'14px','border':'1px solid black'}}>
                                        <SubCategories subCategoryData={category['subcategories']} />
                                    </div>
                                </div>
                                <hr/>
                            </>
                        )
                    })
                }
            </div>
        )
    }
}
