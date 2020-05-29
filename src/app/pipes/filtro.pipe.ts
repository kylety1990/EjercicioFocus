import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(usuarios: IUser[], texto : string): any[] {
   
     if(texto === ""){
      return usuarios; 
     }
     texto.toLowerCase();

    return usuarios.filter(item =>{
       return item.first_name.toLowerCase()
       .includes(texto.toLowerCase());
     })
      
    };
  
  }


