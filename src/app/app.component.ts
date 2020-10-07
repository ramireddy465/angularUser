import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {QueryRef} from 'apollo-angular';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';



// interface todo {
//   uuid:string;
//   name:string;
//   age:number;
//   mobile:string
// }

// interface Response{
//   todo:todo[]
// }

// const GET_DOGS = gql`
// query MyQuery {
//   todo {
//     age
//     id
//     mobile
//     name
//   }
// }

// `;
 




const user = gql`

mutation ($name: String!, $email: String!, $password: String!) {
  sign(name: $name, email: $email, password: $password) {
   token
    pasword
    sendEmail
  }
}

`;
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  


  todo :Observable<any[]>
  queryRef : QueryRef<Response>

  constructor(private apollo:Apollo){

  }

  ngOnInit(){

   // this.todo$.apollo



  //  this.queryRef = this.apollo
  //  .watchQuery<Response>({
  //    query: GET_DOGS,
  //  })
  //  // this.todo = 
  //  this.todo = this.queryRef.valueChanges.pipe(map(result => result.data.todo));

  //   console.log(this.todo)

  }


  onSubmit(val){
    console.log(val)
   // val.id = "jkjnkjn"
    this.apollo.mutate({
      
      mutation:user,
      variables:val

    }).subscribe(({data})=>{
      this.queryRef.refetch()
      console.log(data)
    })
  }
}
