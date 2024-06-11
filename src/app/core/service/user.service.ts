import { Injectable } from '@angular/core';
import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userI: User[] = [
    { id: 1, name: 'Hydrogen', email: 'pkrogen@gmail.com', role: 'H' },
    { id: 2, name: 'Helium', email: 'helium@gmail.com', role: 'He' },
    { id: 3, name: 'Lithium', email: 'lithium@gmail.com', role: 'Li' },
    { id: 4, name: 'Beryllium', email: 'beryllium@gmail.com', role: 'Be' },
    { id: 5, name: 'Boron', email: 'boron@gmail.com', role: 'B' },
    { id: 6, name: 'Carbon', email: 'carbon@gmail.com', role: 'C' },
    { id: 7, name: 'Nitrogen', email: 'nitrogen@gmail.com', role: 'N' },
    { id: 8, name: 'Oxygen', email: 'oxygen@gmail.com', role: 'O' },
    { id: 9, name: 'Fluorine', email: 'fluorine@gmail.com', role: 'F' },
    { id: 10, name: 'Neon', email: 'neon@gmail.com', role: 'Ne' },
  ];
  private nextId = 1;


  constructor() {
    // Load users from local storage
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.userI = JSON.parse(savedUsers);
      this.nextId = this.userI.length > 0 ? Math.max(...this.userI.map(user => user.id)) + 1 : 1;
    }
  }

  getUsers(): User[] {
    return this.userI;
  }

  addUser(user: User): void {
    user.id = this.nextId++;
    this.userI.push(user);
    this.saveUsers();
  }

  updateUser(user: User): void {
    const index = this.userI.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.userI[index] = user;
      this.saveUsers();
    }
  }

  deleteUser(id: number): void {
    this.userI = this.userI.filter(user => user.id !== id);
    this.saveUsers();
  }

  private saveUsers(): void {
    localStorage.setItem('userI', JSON.stringify(this.userI));
  }
   }

