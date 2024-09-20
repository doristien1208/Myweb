import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
//import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.scss'
})
export class PublicationComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    /*// 讀取第一個 JSON 文件的數據
    this.dataService.getDataFilePublication().subscribe(response => {
      this.data = response;
    });*/
    this.dataService.getDataFromFile('publication.json').subscribe(response => {
      this.data = response;
    });
  }
}
