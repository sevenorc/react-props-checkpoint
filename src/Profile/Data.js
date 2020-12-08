import React from 'react'
import PropTypes from 'prop-types'

const Data = ({fullName, bio, profession, children,handleName}) => {
    return (
        <div style={{textAlign:"center"}}>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <h2>{profession}</h2>
            {children}
            <button style={{margin:"30px", border:"1px solid black", borderRadius:"5px"}} onClick={()=>handleName(fullName)}>Click me</button>
        </div>
    )
}

Data.defaultProps = {
    fullName: "Flen Ben Faltene",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    profession: "web developper"
}

Data.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
}

export default Data;