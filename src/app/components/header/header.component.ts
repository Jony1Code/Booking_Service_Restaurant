import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  openLoginModal(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: 'Login Form',
      },
    });

    dialogRef.componentInstance.contentComponent = AuthComponent;
  }
}
