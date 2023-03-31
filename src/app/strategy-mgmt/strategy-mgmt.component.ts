import { Component, ViewChild, OnInit,AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { StrategyService } from '../strategy.service';
import { MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator';
import { IStrategy } from '../strategy';

@Component({
  selector: 'app-strategy-mgmt',
  templateUrl: './strategy-mgmt.component.html',
  styleUrls: ['./strategy-mgmt.component.css']
})
export class StrategyMgmtComponent implements OnInit, AfterViewInit  {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _strategyService : StrategyService) { 
   
  }

  public errorMsg;

  //ELEMENT_DATA = []

  displayedColumns: string[] = ['id', 'name', 'symbol'];
  dataSource?: MatTableDataSource<IStrategy>

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this._strategyService.getStrategies().subscribe( data => {
      this.dataSource = new MatTableDataSource(data),
      error => this.errorMsg = error
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
