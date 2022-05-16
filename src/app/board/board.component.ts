import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  entered = ["","","","","","","","",""] ;
  flag = [true,true, true, true, true, true, true, true, true, true];
  count = 0 ;
  winner = "" ;
  display_winner = false ;

  inc_count(a:number) {
    if ( this.flag[a] == true ) this.count = this.count + 1 ;
  }

  process(a:number) {
    if ( this.flag[a] == true ) {
      this.flag[a] = false ;
      if ( this.count % 2 == 1 ) this.entered[a] = "X" ;
      else this.entered[a] = "O" ;
      this.check() ;
    }
  }

  check() {
    if ( this.entered[0] == this.entered[1] && this.entered[1] == this.entered[2] ) {
      if ( this.entered[0] == "O") this.O_wins() ;
      else if ( this.entered[0] == "X" ) this.X_wins() ;
    }
    else if ( this.entered[3] == this.entered[4] && this.entered[4] == this.entered[5] ) {
      if ( this.entered[3] == "O") this.O_wins() ;
      else if ( this.entered[3] == "X" ) this.X_wins() ;
    }
    else if ( this.entered[6] == this.entered[7] && this.entered[7] == this.entered[8] ) {
      if ( this.entered[6] == "O") this.O_wins() ;
      else if ( this.entered[6] == "X" ) this.X_wins() ;
    }
    else if ( this.entered[0] == this.entered[3] && this.entered[3] == this.entered[6] ) {
      if ( this.entered[0] == "O") this.O_wins() ;
      else if ( this.entered[0] == "X" ) this.X_wins() ;
    }
    else if ( this.entered[1] == this.entered[4] && this.entered[4] == this.entered[7] ) {
      if ( this.entered[1] == "O") this.O_wins() ;
      else if ( this.entered[1] == "X" ) this.X_wins() ;
    }
    else if ( this.entered[2] == this.entered[5] && this.entered[5] == this.entered[8] ) {
      if ( this.entered[2] == "O") this.O_wins() ;
      else if ( this.entered[2] == "X" ) this.X_wins() ;
    }
    else if ( this.entered[0] == this.entered[4] && this.entered[4] == this.entered[8] ) {
      if ( this.entered[0] == "O") this.O_wins() ;
      else if ( this.entered[0] == "X" ) this.X_wins() ;
    }
    else if ( this.entered[2] == this.entered[4] && this.entered[4] == this.entered[6] ) {
      if ( this.entered[2] == "O") this.O_wins() ;
      else if ( this.entered[2] == "X" ) this.X_wins() ;
    }
  }

  O_wins() {
    this.winner = "O" ;
    this.display_winner = true ;
  }

  X_wins() {
    this.winner = "X" ;
    this.display_winner = true ;
  }

  ngOnInit(): void {
  }

}
