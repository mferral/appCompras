import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PresupuestosService } from '../../servicios/presupuestos.service';
@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent implements OnInit {
  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  constructor(private pf: FormBuilder, private presupuestoService: PresupuestosService) { }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      cif: ['', Validators.required ],
      concepto: ['', Validators.required ],
      base: ['', Validators.required ],
      tipo: ['', Validators.required ],
      iva: this.iva,
      total: this.total
      });
      this.onChanges();
  }

  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe(valor => {
    this.base = valor.base;
    this.tipo = valor.tipo;
    this.presupuestoForm.value.iva = this.base * this.tipo;
    this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
    });
  }
  onSubmit() {
    this.presupuesto = this.presupuestoForm.value;
    this.presupuestoService.postPresupuesto( this.presupuesto )
      .subscribe(newpres => {
    });
    this.presupuestoForm.reset();
  }

}
