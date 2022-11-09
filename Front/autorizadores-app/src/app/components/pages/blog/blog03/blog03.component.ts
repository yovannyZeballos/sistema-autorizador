import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog03',
  templateUrl: './blog03.component.html',
  styleUrls: ['./blog03.component.scss', '../../../apps/forms/form-editor/form-editor.component.scss'],
})
export class Blog03Component implements OnInit {
  constructor(
    private modalService: NgbModal) {}

  ngOnInit(): void {}

  // dropzone
  files: File[] = [];
  filesPreview: File[] = [];
  filesDisabled: File[] = [];
  disable = true;

  onSelect(event) {
    // console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onPreviewFileSelect(event) {
    // console.log(event);
    this.filesPreview.push(...event.addedFiles);
  }

  onPreviewFileRemove(event) {
    // console.log(event);
    this.filesPreview.splice(this.filesPreview.indexOf(event), 1);
  }

  //Angular Editor
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

}
