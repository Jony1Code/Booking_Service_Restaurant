import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { AuthComponent } from '../popup/auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  openLoginModal(): void {
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.componentInstance.contentComponent = AuthComponent;
  }
}
