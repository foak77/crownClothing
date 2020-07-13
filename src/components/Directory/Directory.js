import React from 'react'
import MenuItem from "../MenuItem/MenuItem"
import "../Directory/Directory.scss"
import {connect} from "react-redux"
import {selectDirectorySections} from "../../redux/Directory/DirectorySelector"
import {createStructuredSelector} from "reselect"

const Directory = ({sections}) => (
            <div className="directory-menu">
                {sections.map (({ id, ...otherSectionProps }) =>(
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
