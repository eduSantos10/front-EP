import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  ultimasOcorrencias: any = []
  usuarios: any = []
  titleTable: any = [ "nome", "carro", "placa", "cargo"]
  titleFormated: any = [ "Nome", "Carro", "Placa", "Cargo"]

  constructor() { }

  ngOnInit() {

    this.ultimasOcorrencias = [
      {
        nome: "Eduardo",
        placa: "MVH-1234",
        dia: "15/08 - 22:45"
      },
      {
        nome: "Luciano",
        placa: "ASE-3556",
        dia: "15/08 - 20:45"
      },
      {
        nome: "Julia",
        placa: "DTH-7898",
        dia: "15/08 - 21:40"
      },
      {
        nome: "Cezar",
        placa: "SRT-8954",
        dia: "15/08 - 21:31"
      },
      {
        nome: "Cezar",
        placa: "SRT-8954",
        dia: "15/08 - 21:31"
      },
      {
        nome: "Claudia",
        placa: "MGR-5896",
        dia: "16/08 - 17:15"
      }
    ];

    this.usuarios = [
      {
        nome : "Vinicios",
        carro : "Corsa",
        placa : "ASD-2356",
        cargo : "Aluno"
      },
      {
        nome : "Marta",
        carro : "HB-20",
        placa : "ASD-2356",
        cargo : "Servidor"
      },
      {
        nome : "Claudio",
        carro : "Vectra",
        placa : "ASD-5874",
        cargo : "Visitante"
      },
      {
        nome : "Ana",
        carro : "Corola",
        placa : "TRY-3456",
        cargo : "Aluno"
      },
    ]
  }



}
