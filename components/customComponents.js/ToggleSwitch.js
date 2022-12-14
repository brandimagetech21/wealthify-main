import React from 'react'
import Wrappers from '../../assets/wrappers/ToggleSwitchcss'
const ToggleSwitch = () => {
    return (
      <Wrappers>
    <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
    </label>
      </Wrappers>
  )
}

export default ToggleSwitch