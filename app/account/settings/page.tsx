'use client'

import { useState } from 'react'
import { User, Lock, Bell, Save, Check } from 'lucide-react'
import Tabs from '@/components/dashboard/Tabs'

export default function SettingsPage() {
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    region: 'United States',
  })

  const [securitySettings, setSecuritySettings] = useState({
    mfaEnabled: false,
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailOrderUpdates: true,
    emailKingdomNews: true,
    smsOrderUpdates: false,
    smsKingdomNews: false,
    pushOrderUpdates: true,
    pushKingdomNews: false,
  })

  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle')

  const handleSave = () => {
    setSaveStatus('saving')
    // Simulate save
    setTimeout(() => {
      setSaveStatus('saved')
      setTimeout(() => setSaveStatus('idle'), 2000)
    }, 500)
  }

  const tabs = [
    {
      id: 'profile',
      label: 'Profile',
      content: (
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-pure-white mb-6 flex items-center">
              <User className="w-5 h-5 mr-2 text-kingdom-gold" />
              Personal Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Region
                </label>
                <select
                  value={profileData.region}
                  onChange={(e) =>
                    setProfileData({ ...profileData, region: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white focus:border-kingdom-gold focus:outline-none"
                >
                  <option value="United States">United States</option>
                  <option value="Africa">Africa</option>
                  <option value="Caribbean">Caribbean</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'security',
      label: 'Security',
      content: (
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-pure-white mb-6 flex items-center">
              <Lock className="w-5 h-5 mr-2 text-kingdom-gold" />
              Security Settings
            </h3>
            <div className="space-y-6">
              {/* Password Reset */}
              <div>
                <h4 className="text-lg font-semibold text-pure-white mb-3">
                  Password
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Update your password to keep your account secure.
                </p>
                <button className="px-6 py-3 border border-kingdom-gold text-kingdom-gold rounded-lg hover:bg-kingdom-gold hover:text-royal-black transition-all duration-300 font-semibold">
                  Change Password
                </button>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-pure-white mb-2">
                      Multi-Factor Authentication
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setSecuritySettings({
                        ...securitySettings,
                        mfaEnabled: !securitySettings.mfaEnabled,
                      })
                    }
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      securitySettings.mfaEnabled
                        ? 'bg-kingdom-gold'
                        : 'bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-pure-white transition-transform duration-200 ${
                        securitySettings.mfaEnabled
                          ? 'translate-x-6'
                          : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                {securitySettings.mfaEnabled && (
                  <div className="mt-4 p-4 bg-kingdom-gold bg-opacity-10 border border-kingdom-gold rounded-lg">
                    <p className="text-sm text-kingdom-gold">
                      ✓ Multi-Factor Authentication is enabled
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      content: (
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-pure-white mb-6 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-kingdom-gold" />
              Notification Preferences
            </h3>
            <div className="space-y-6">
              {/* Order Updates */}
              <div>
                <h4 className="text-lg font-semibold text-pure-white mb-4">
                  Order Updates
                </h4>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-kingdom-gold transition-colors cursor-pointer">
                    <div>
                      <span className="font-medium text-pure-white">Email</span>
                      <p className="text-sm text-gray-400">
                        Receive order updates via email
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationSettings.emailOrderUpdates}
                      onChange={(e) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          emailOrderUpdates: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-kingdom-gold bg-gray-700 border-gray-600 rounded focus:ring-kingdom-gold focus:ring-2"
                    />
                  </label>
                  <label className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-kingdom-gold transition-colors cursor-pointer">
                    <div>
                      <span className="font-medium text-pure-white">SMS</span>
                      <p className="text-sm text-gray-400">
                        Receive order updates via text message
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationSettings.smsOrderUpdates}
                      onChange={(e) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          smsOrderUpdates: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-kingdom-gold bg-gray-700 border-gray-600 rounded focus:ring-kingdom-gold focus:ring-2"
                    />
                  </label>
                  <label className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-kingdom-gold transition-colors cursor-pointer">
                    <div>
                      <span className="font-medium text-pure-white">Push</span>
                      <p className="text-sm text-gray-400">
                        Receive push notifications for orders
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationSettings.pushOrderUpdates}
                      onChange={(e) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          pushOrderUpdates: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-kingdom-gold bg-gray-700 border-gray-600 rounded focus:ring-kingdom-gold focus:ring-2"
                    />
                  </label>
                </div>
              </div>

              {/* Kingdom News */}
              <div className="border-t border-gray-800 pt-6">
                <h4 className="text-lg font-semibold text-pure-white mb-4">
                  Kingdom News
                </h4>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-kingdom-gold transition-colors cursor-pointer">
                    <div>
                      <span className="font-medium text-pure-white">Email</span>
                      <p className="text-sm text-gray-400">
                        Receive Kingdom Commerce news and updates
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationSettings.emailKingdomNews}
                      onChange={(e) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          emailKingdomNews: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-kingdom-gold bg-gray-700 border-gray-600 rounded focus:ring-kingdom-gold focus:ring-2"
                    />
                  </label>
                  <label className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-kingdom-gold transition-colors cursor-pointer">
                    <div>
                      <span className="font-medium text-pure-white">SMS</span>
                      <p className="text-sm text-gray-400">
                        Receive Kingdom news via text message
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationSettings.smsKingdomNews}
                      onChange={(e) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          smsKingdomNews: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-kingdom-gold bg-gray-700 border-gray-600 rounded focus:ring-kingdom-gold focus:ring-2"
                    />
                  </label>
                  <label className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-kingdom-gold transition-colors cursor-pointer">
                    <div>
                      <span className="font-medium text-pure-white">Push</span>
                      <p className="text-sm text-gray-400">
                        Receive push notifications for Kingdom news
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationSettings.pushKingdomNews}
                      onChange={(e) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          pushKingdomNews: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-kingdom-gold bg-gray-700 border-gray-600 rounded focus:ring-kingdom-gold focus:ring-2"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">Settings</h1>
        <button
          onClick={handleSave}
          disabled={saveStatus === 'saving'}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            saveStatus === 'saved'
              ? 'bg-green-600 text-pure-white'
              : 'bg-kingdom-gold text-royal-black hover:bg-opacity-90'
          }`}
        >
          {saveStatus === 'saved' ? (
            <>
              <Check className="w-5 h-5" />
              <span>Saved!</span>
            </>
          ) : saveStatus === 'saving' ? (
            <span>Saving...</span>
          ) : (
            <>
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </>
          )}
        </button>
      </div>

      <Tabs tabs={tabs} defaultTab="profile" />
    </div>
  )
}

