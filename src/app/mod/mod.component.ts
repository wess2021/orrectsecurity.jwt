import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css']
})
export class ModComponent implements OnInit {
  board: string | undefined;
  errorMessage: string | undefined;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.userService.getModBoard().subscribe(
      (      data: string | undefined) => {
        this.board = data;
      },
      (      error: { status: any; error: string; }) => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}