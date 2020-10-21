import { Component, OnInit } from '@angular/core';
import { ScriptManagerService } from '../script-manager.service';

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.css']
})
export class PokeapiComponent implements OnInit {

  constructor(private ScriptManager: ScriptManagerService) { }

  ngOnInit(): void {

    this.ScriptManager.cargarScript(['getPokeapi']);
  }

}

