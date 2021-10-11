import React from "react";

type ModeButtonPropsType = {
  callback: () => void
}

const ModeButton = (props: ModeButtonPropsType) => {

    let universalCallback = () => {
        props.callback()
    }

    return <button onClick={universalCallback}>Set mode</button>
}

export default ModeButton