import { Component, OnInit } from '@angular/core';
import { SnakelessService } from '../snakeless/snakeless.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  camelcase: any;
  snakecase: any;

  constructor(private service: SnakelessService) { }

  ngOnInit() {
  }

  to() {
    this.camelcase = JSON.stringify(this.service.fromSnake(JSON.parse(this.snakecase)));
    console.log(this.camelcase);
  }

  from() {
    this.snakecase = JSON.stringify(this.service.toSnake(JSON.parse(this.camelcase)));
    console.log(this.snakecase);
  }

}
