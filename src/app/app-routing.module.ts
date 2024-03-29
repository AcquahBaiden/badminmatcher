import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameBoardComponent } from './game-board/game-board.component';
import { HomeComponent } from './home/home.component';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new/:gameId', component: NewGameComponent },
  { path: 'board/:gameId', component: GameBoardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, DragDropModule]
})
export class AppRoutingModule { }
