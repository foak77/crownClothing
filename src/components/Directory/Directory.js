import React from 'react'
import MenuItem from "../MenuItem/MenuItem"
import "../Directory/Directory.scss"
import {connect} from "react-redux"
import {selectDirectorySection} from "../../redux/Directory/DirectorySelector"
import {createStructuredSelector} from "reselect"

const Directory = ({sections}) => (
            <div className="directory-menu">s
                {sections.map (({ id, ...otherSectionProps }) =>(
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory)
