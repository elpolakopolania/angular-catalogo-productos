import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generals',
  templateUrl: './generals.component.html',
  styleUrls: ['./generals.component.css']
})
export class GeneralsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {}

  ngOnInit(): void {}

  redireccionar(bool: boolean) {
    console.log(bool);
    this.router.navigate(['/trademarks/']);
  }

}
