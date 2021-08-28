import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  ultimasOcorrencias: any = []
  usuarios: any = []
  titleTable: any = ["nome", "carro", "placa", "cargo", 'acao']
  titleFormated: any = ["Nome", "Carro", "Placa", "Cargo",'Ocorrencia']
  formAluno;
  constructor(
    public dialog: MatDialog,
    fb: FormBuilder,

  ) {
    this.formAluno = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'telefone': ['', Validators.compose([Validators.required])],
      'nome': ['', Validators.compose([Validators.required])],
      'curso': ['', Validators.compose([Validators.required])],
      'ra': ['', Validators.compose([Validators.required])]
    });
  }

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
        nome: "Vinicios",
        carro: "Corsa",
        placa: "ASD-2356",
        cargo: "Aluno",
        acao: "mode_edit"
      },
      {
        nome: "Marta",
        carro: "HB-20",
        placa: "ASD-2356",
        cargo: "Servidor",
        acao: "mode_edit"
      },
      {
        nome: "Claudio",
        carro: "Vectra",
        placa: "ASD-5874",
        cargo: "Visitante",
        acao: "mode_edit"
      },
      {
        nome: "Ana",
        carro: "Corola",
        placa: "TRY-3456",
        cargo: "Aluno",
        acao: "mode_edit"
      },
    ]
  }


  addUser(component: any) {
    const dialogRef = this.dialog.open(component, {
      width: '70vw',
      height: '60vh',
    });
  }

  addCar(component: any) {
    const dialogRef = this.dialog.open(component, {
      width: '70vw',
      height: '60vh',
    });
  }

  addParking(component: any) {
    const dialogRef = this.dialog.open(component, {
      width: '70vw',
      height: '60vh',
    });
  }

}
