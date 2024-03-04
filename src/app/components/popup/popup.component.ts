import {
  Component,
  Inject,
  Injector,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-universal-modal',
  templateUrl: './popup.component.html',
})
export class PopupComponent implements OnInit {
  @Input() contentComponent: any;
  @Input() data: any;

  constructor(
    private dialogRef: MatDialogRef<PopupComponent>,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {}

  ngOnInit(): void {
    const componentRef = this.viewContainerRef.createComponent(
      this.contentComponent,
      { injector: this.injector }
    );
    this.viewContainerRef.insert(componentRef.hostView);
  }

  close(): void {
    this.dialogRef.close();
  }
}
