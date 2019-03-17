import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userCount'
})
export class UserCountPipe implements PipeTransform {

  transform(users: any[]): any {
    return users.filter(user => user.online).length;
  }

}
