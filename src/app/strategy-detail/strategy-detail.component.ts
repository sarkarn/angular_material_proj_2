import { Component,ViewChild, OnInit,AfterViewInit } from '@angular/core';
import { StrategyDetailService } from '../strategy-detail.service';
import { ActivatedRoute } from '@angular/router';
import { IStrategyDetail } from '../strategy-detail';
import { IStrategyComposition } from '../strategy-composition';
import { MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router'


@Component({
  selector: 'app-strategy-detail',
  templateUrl: './strategy-detail.component.html',
  styleUrls: ['./strategy-detail.component.css']
})
export class StrategyDetailComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public strategyDetail : IStrategyDetail[];
  public errorMessage;
  displayedColumns: string[] = ['security_name', 'symbol', 'weight'];
  dataSource?: MatTableDataSource<IStrategyComposition>

  constructor(private _strategyDetailService: StrategyDetailService,
    private _route : ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this._route.snapshot.paramMap.get('id'))
    this._strategyDetailService.getStrategyDetail(id).subscribe(data => {
      this.strategyDetail=data,
      this.dataSource = new MatTableDataSource(this.strategyDetail[0].composition),
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      console.log(this.strategyDetail[0]);
      console.log(this.dataSource);

     
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onSelect() {
     this._router.navigate(['/strategymgmt/create'])
  }

}
