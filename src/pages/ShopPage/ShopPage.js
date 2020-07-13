import React from 'react'
// import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
// import CollectionItem from '../../components/CollectionItem/CollectionItem'
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview"
import {Route} from "react-router-dom"
import Collection from "../Collection/Colletion"
// import {selectCollections} from "../../redux/Shop/ShopSelectors"
// import {connect} from "react-redux"
// import {createStructuredSelector} from "reselect"
// import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

const ShopPage = ({match}) => (
                <div className="shop-page">
                       <div className="shop-page">
                    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                    <Route path={`${match.path}/:collectionId`} component={Collection} />
                </div>
                </div>
        )

export default (ShopPage)
