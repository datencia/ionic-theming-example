import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsProvider } from './../../providers/settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedTheme: String;

  constructor(
    private navCtrl: NavController,
    private settings: SettingsProvider
  ) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }

}
