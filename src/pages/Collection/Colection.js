import React from 'react'
import "./Collection.scss"
// import CollectionItem from "../../components/CollectionItem/CollectionItem"
import {connect} from "react-redux"
import {selectCollection} from "../../redux/Shop/ShopSelectors"

function Collection({collection}) {
    console.log(collection)
    return (
        <div className="collection-page">
            <h2>Collection PAGE</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
