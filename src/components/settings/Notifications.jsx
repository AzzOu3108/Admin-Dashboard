import React, { useState } from 'react'
import SettingsSection from './SettingsSection'
import { Bell } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

const Notifications = () => {
    const [notifications, setNotifications] = useState({
        push:true,
        email:false,
        sms:true
    })

  return (
    <SettingsSection icon={Bell} title={"Notifications"}>
        <ToggleSwitch 
        Label={"Push Notifications"}
        isOn={notifications.push}
        onToggle={()=> setNotifications({...notifications, push: !notifications.push})}
        />
        <ToggleSwitch 
        Label={"Email Notifications"}
        isOn={notifications.email}
        onToggle={()=> setNotifications({...notifications, email: !notifications.email})}
        />
        <ToggleSwitch 
        Label={"SMS Notifications"}
        isOn={notifications.sms}
        onToggle={()=> setNotifications({...notifications, sms: !notifications.sms})}
        />
    </SettingsSection>
  )
}

export default Notifications