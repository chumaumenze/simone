import { Component } from '@angular/core';

import { LogsPage } from '../logs/call_logs';
import { ContactsPage } from '../contact/contacts';
import { DialerPage } from '../dialer/dialer';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  dialer_tab = DialerPage;
  logs_tab = LogsPage;
  contacts_tab = ContactsPage;

  constructor() {

  }
}
