import { Component, OnInit } from '@angular/core';
import { ListeDesCompetitionsService } from './liste-des-competitions.service'

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
 /* webSocket: any*/
  public liste : any

  public items: Array<{ title: string; /*note: string; */icon: string }> = [];

  constructor( public ListeDesCompetitionsService:ListeDesCompetitionsService) {
    ListeDesCompetitionsService.loadListeCompetitons().then(response => {this.liste = response
      for (let i = 0; i < this.liste.length; i++) {
      this.items.push({
        title: this.liste[i].nom,
       /* note: 'This is item #' + (i+1),*/
        icon: this.liste[i].icon
      });
     }  
    })
  }

  public selectItem(item){
    console.log(item)
    this.selectedItem = item

  }



  ngOnInit() {
    //this.WebSocket2()
  }


 /* WebSocket2(){
    if(this.webSocket){
      return}
    this.webSocket = new WebSocket('ws://localhost:8084')
    this.webSocket.onopen = (ws => {
      this.webSocket.send('Hello angular!')
     })
     this.webSocket.onmessage = (message => {
       if(this.Name == message.data.replace('reload ',''))
            this.ListeDesCompetitionsService.loadListeCompetitons()
 })
  }*/
}
