import React from 'react'
import { storiesOf } from '@storybook/react'

import { Icon } from '../src'

storiesOf('Icons', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Icon Set', () => (
    <div>
      <span>Add: </span>
      <Icon icon="add" />
      <br />
      <span>Admin: </span>
      <Icon icon="admin" />
      <br />

      <span>Apointment: </span>
      <Icon icon="appointment" />
      <br />
      <span>Add Apointment: </span>
      <Icon icon="appointment-add" />
      <br />
      <span>Remove Apointment: </span>
      <Icon icon="appointment-remove" />
      <br />

      <span>Calendar: </span>
      <Icon icon="calendar" />
      <br />

      <span>Image: </span>
      <Icon icon="image" />
      <br />
      <span>Incident: </span>
      <Icon icon="incident" />
      <br />
      <span>Lab: </span>
      <Icon icon="lab" />
      <br />
      <span>Left Arrow: </span>
      <Icon icon="left-arrow" />
      <br />
      <span>Medication: </span>
      <Icon icon="medication" />
      <br />
      <span>Patient: </span>
      <Icon icon="patient" />
      <br />
      <span>Add Patient: </span>
      <Icon icon="patient-add" />
      <br />
      <span>Remove Patient: </span>
      <Icon icon="patient-remove" />
      <br />
      <span>Patients: </span>
      <Icon icon="patients" />
      <br />
      <span>Remove: </span>
      <Icon icon="remove" />
      <br />
      <span>Right Arrow: </span>
      <Icon icon="right-arrow" />
      <br />
      <span>Save: </span>
      <Icon icon="save" />
      <br />
      <span>Setting: </span>
      <Icon icon="setting" />
      <br />
    </div>
  ))
