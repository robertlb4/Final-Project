import { Component, OnInit } from '@angular/core';
import { InputinfoService } from '../inputinfo.service'
import { UserService } from '../user.service'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  saved: boolean = false;
  
  noSave: boolean = false;

  constructor(private inputInfo: InputinfoService, private _user: UserService) { }

  ngOnInit() {
  }

  clickSave () {
    let profInfo = { ...this.inputInfo.user };
    delete profInfo.reginfo;
    this._user.saveResult(profInfo)
    .subscribe(result => {
      console.log(result + " success!")
      return this.saved = true;
    },
    error => this.noSave = true)
    
  }
//{dob: this.inputInfo.user.dob, income: this.inputInfo.user.income, ssiAmount: this.inputInfo.user.ssiAmount, monthlybenefit: this.inputInfo.user.monthlyBen}
}
