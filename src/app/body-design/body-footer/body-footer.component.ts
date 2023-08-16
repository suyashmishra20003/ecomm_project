import { Component, OnInit } from '@angular/core';
import { footerMenu } from './body-footer.interface';

@Component({
  selector: 'app-body-footer',
  templateUrl: './body-footer.component.html',
  styleUrls: ['./body-footer.component.scss']
})
export class BodyFooterComponent implements OnInit {

  footerMenu: footerMenu[] = [];

  constructor() { }
  ngOnInit(): void {
    this.footerMenu = [
      { 
        label: 'GET HELP', children: [
            {
                label:'Frequently Asked Questions',
                command:()=>{
                }},
            {
                label:'Order Status',
                command:()=>{
                }},
            {
                label:'Return Policy',
                command:()=>{
                }},
            {
                label:'Store Feedback',
                command:()=>{
                }},
        ]
      },
      { label: 'LEAGEL AND PRIVACY', children: [
        {
            label:'CA Privacy Rights',
            command:()=>{}},
        {
            label:'Conditions of Use',
            command:()=>{}},
        {
            label:'Privacy Policy',
            command:()=>{}},
        {
            label:'Conditions',
            command:()=>{}},
      ] },
      { label: 'ABOUT US', children: [
        {
            label:'Accessibility',
            command:()=>{}},
        {
            label:'Carrers',
            command:()=>{}},
        {
            label:'Retail',
            command:()=>{}},
        {
            label:'Affliates',
            command:()=>{}},

        
      ] },
    ]

  }

  executeCommand(command?:()=>void){
    if(command){
        command()
    }
  }
}
