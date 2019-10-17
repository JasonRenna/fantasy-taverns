import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { isNull } from '@angular/compiler/src/output/output_ast';

export const taverns: any[] = [
  { ID: 1, TavernName: "Moe's Tavern" },
  { ID: 2, TavernName: "Joe's Tavern" },
  { ID: 3, TavernName: 'Blasphemy Bar' },
  { ID: 4, TavernName: 'Rejected Reality' },
  { ID: 5, TavernName: "Brianna's" }
];