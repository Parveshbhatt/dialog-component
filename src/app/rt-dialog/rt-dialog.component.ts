import { Component, Input } from '@angular/core';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-rt-dialog',
  templateUrl: './rt-dialog.component.html',
  styleUrls: ['./rt-dialog.component.scss']
})
export class RtDialogComponent {
/*
  Property to assign title of the dialog box
*/
  @Input() title:string;
/*
  Property to set whether to display footer or not of the dialog box
*/
  @Input() showFooter:boolean;
/*
  Property to set whether to display close icon on right top of the dialog box
*/
  @Input() crossIcon:boolean;
/*
  Property to set height of the dialog box
*/
  @Input() height:string;
/*
  Property to set width of the dialog box
*/
  @Input() width:string;
/*
  Property to set whether to dispaly primary button (save) or not of the dialog box
*/
  @Input() primaryButton;
/*
  Property to set whether to dispaly secondary button (close) or not of the dialog box
*/
  @Input() secondaryButton;
/*
  Property to set the position of the dialog box i.e at the center or side 
*/
  @Input() position:('center'|'side');


/*
  'dialog' is the reference variable of type DialogService
*/
  constructor(public dialog:DialogService) {
    this.title="RT Dialog" 
    this.showFooter = true;
    this.crossIcon = true;
    this.position = 'center';
    this.primaryButton = true;
    this.secondaryButton = true;
    this.height = "300";
    this.width = "550";
  }

/*
  method to show the dialog box
*/
  show(){
    this.dialog.showDialog = true;
  }
/*
  method to close the dialog box
*/
  close(){
    this.dialog.showDialog = false;
  }

/*
  method the get the showFooter property
*/
  getShowFooter(){
    return this.showFooter;
  }
/*
  method the get the crossIcon property
*/
  getCrossIcon(){
    return this.crossIcon
  }
/*
  method the get the position property
*/
  getPosition(){
    return this.position;
  }
/*
  method the get the primaryButton property
*/  
  getPrimaryButton(){
    return this.primaryButton;
  }
/*
  method the get the SecondaryButton property
*/
  getSecondaryButton(){
    return this.secondaryButton;
  }
/*
  method the get the height property
*/
  getHeight(){
    return this.height;
  }
/*
  method the get the width property
*/
  getWidth(){
    return this.width;
  }
}
