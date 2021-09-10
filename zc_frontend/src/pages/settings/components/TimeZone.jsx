import React from 'react'
import styles from '../styles/SettingsTab.module.css'

const TimeZone = () => {
  return (
    <div className={styles.passwordsection}>
      <form class="row d-flex flex-column">
        <div class="col-md-5 mt-2">
          <select class="form-select" required>
            <option disabled selected>
              (UTC+01:00) West Central Africa.
            </option>
            <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
            <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
            <option value="-10:00">(GMT -10:00) Hawaii</option>
            <option value="-09:50">(GMT -9:30) Taiohae</option>
            <option value="-09:00">(GMT -9:00) Alaska</option>
            <option value="-08:00">
              (GMT -8:00) Pacific Time (US &amp; Canada)
            </option>
            <option value="-07:00">
              (GMT -7:00) Mountain Time (US &amp; Canada)
            </option>
            <option value="-06:00">
              (GMT -6:00) Central Time (US &amp; Canada), Mexico City
            </option>
            <option value="-05:00">
              (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
            </option>
            <option value="-04:50">(GMT -4:30) Caracas</option>
            <option value="-04:00">
              (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
            </option>
            <option value="-03:50">(GMT -3:30) Newfoundland</option>
            <option value="-03:00">
              (GMT -3:00) Brazil, Buenos Aires, Georgetown
            </option>
            <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
            <option value="-01:00">
              (GMT -1:00) Azores, Cape Verde Islands
            </option>
            <option value="+00:00" selected="selected">
              (GMT) Western Europe Time, London, Lisbon, Casablanca
            </option>
            <option value="+01:00">
              (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
            </option>
            <option value="+02:00">
              (GMT +2:00) Kaliningrad, South Africa
            </option>
            <option value="+03:00">
              (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
            </option>
            <option value="+03:50">(GMT +3:30) Tehran</option>
            <option value="+04:00">
              (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
            </option>
            <option value="+04:50">(GMT +4:30) Kabul</option>
            <option value="+05:00">
              (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
            </option>
            <option value="+05:50">
              (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
            </option>
            <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
            <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
            <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
            <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
            <option value="+08:00">
              (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
            </option>
            <option value="+08:75">(GMT +8:45) Eucla</option>
            <option value="+09:00">
              (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
            </option>
            <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
            <option value="+10:00">
              (GMT +10:00) Eastern Australia, Guam, Vladivostok
            </option>
            <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
            <option value="+11:00">
              (GMT +11:00) Magadan, Solomon Islands, New Caledonia
            </option>
            <option value="+11:50">(GMT +11:30) Norfolk Island</option>
            <option value="+12:00">
              (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
            </option>
            <option value="+12:75">(GMT +12:45) Chatham Islands</option>
            <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
            <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
          </select>
        </div>
        <div class="col-md-4 mb-3 mt-2">
          <button class="btn btn-primary">Save Time Zone</button>
        </div>
      </form>
    </div>
  )
}

export default TimeZone
