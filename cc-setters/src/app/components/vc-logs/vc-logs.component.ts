import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit {
  _vName: string;

  @Input()
  get vName() {
    return this._vName;
  };

  set vName(name: string) {
    if (!name) return; // if name is undefined, return
    if (!this._vName) {
      console.log(!this._vName)
      this.logs.push(`initial version is ${name.trim()}`);
    } else {
      this.logs.push(`version changed from ${this._vName} to ${name.trim()}`);
    }

    this._vName = name;
  }

  logs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
